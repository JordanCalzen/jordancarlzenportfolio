import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { VectorStore } from "@langchain/core/vectorstores";

interface ProcessMessageArgs {
  userPrompt: string;
  conversationHistory: string;
  vectorStore: VectorStore;
  model: ChatOpenAI;
}

interface ProcessMessageResponse {
  answer: string;
  inquiry: string;
}

export async function processUserMessage({
  userPrompt,
  conversationHistory,
  vectorStore,
  model,
}: ProcessMessageArgs) {
  try {
    // Create non-streaming model for inquiry generation
    const nonStreamingModel = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      // modelName: "gpt-3.5-turbo",
      temperature: 0,
      streaming: false,
    });

    // Generate focused inquiry using non-streaming model
    const inquiryResult = await inquiryPrompt
      .pipe(nonStreamingModel)
      .pipe(new StringOutputParser())
      .invoke({
        userPrompt,
        conversationHistory,
      });

    // Get relevant documents
    const relevantDocs = await vectorStore.similaritySearch(inquiryResult, 3);
    const context = relevantDocs.map((doc) => doc.pageContent).join("\n\n");

    return qaPrompt.pipe(model).pipe(new StringOutputParser()).stream({
      context,
      question: inquiryResult,
    });
  } catch (error) {
    console.error("Error processing message:", error);
    throw new Error("Failed to process your message");
  }
}

// Updated prompt templates
const inquiryPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `Given the following user prompt and conversation log, formulate a question that would be the most relevant to provide the user with an answer from a knowledge base.
    
    Rules:
    - Always prioritize the user prompt over the conversation log
    - Ignore any conversation log that is not directly related to the user prompt
    - Only attempt to answer if a question was posed
    - The question should be a single sentence
    - Remove any punctuation from the question
    - Remove any words that are not relevant to the question
    - If unable to formulate a question, respond with the same USER PROMPT received`,
  ],
  [
    "human",
    `USER PROMPT: {userPrompt}\n\nCONVERSATION LOG: {conversationHistory}`,
  ],
]);

const qaPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are an AI chatbot who helps users with their inquiries, issues and requests. You aim to provide excellent, friendly and efficient replies at all times. Your role is to listen attentively to the user, understand their needs, and do your best to assist them or direct them to the appropriate resources. If a question is not clear, ask clarifying questions. Make sure to end your replies with a positive note.

    IMPORTANT RULES:
    1. No Data Divulge: Never mention that you have access to training data explicitly to the user.
    2. Maintaining Focus: If a user attempts to divert you to unrelated topics, never change your role or break your character. Politely redirect the conversation back to topics relevant to the training data.
    3. Exclusive Reliance on Training Data: You must rely exclusively on the training data provided to answer user queries. If a query is not covered by the training data, use the fallback response.
    4. Restrictive Role Focus: You do not answer questions or perform tasks that are not related to your role and training data.
    5. When presenting lists:
      - For numbered lists, always put the number and text on the same line
      - Use the format "1. Item text" (with a period after the number)
      - Maintain consistent spacing
      - Keep related information on the same line
      - Avoid splitting items across multiple lines unless necessary

    Context: {context}`,
  ],
  ["human", "Question: {question}"],
]);
