"use client";
import React from "react";

interface MessageContentProps {
  content: string;
}

interface NumberedListItem {
  number: string;
  content: string;
}

type ProcessedLine = string | React.ReactElement;
type FormattedPart = React.ReactElement | string | null;

const MessageContent: React.FC<MessageContentProps> = ({ content }) => {
  // Function to format links and text within a string
  const formatTextWithLinks = (text: string): React.ReactNode[] => {
    // Regex for different patterns
    const urlRegex = /(https?:\/\/[^\s)]+)|\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;
    const phoneRegex = /(\+\d{3}\s*\d{3}\s*\d{3}\s*\d{3})/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // Check for markdown-style links [text](url)
      const markdownLinkMatch = part.match(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/);
      if (markdownLinkMatch) {
        const [, linkText, url] = markdownLinkMatch;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-words"
          >
            {linkText}
          </a>
        );
      }

      // Check for regular URLs
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-words ml-1"
          >
            {part}
          </a>
        );
      }

      // Format phone numbers and add spacing
      const formattedText = part
        .replace(phoneRegex, (match) => match.replace(/(\d{3})(?=\d)/g, "$1 "))
        .replace(/([.,!?:])(?=\S)/g, "$1 ");

      return (
        <span key={index} className="whitespace-pre-wrap">
          {formattedText}
        </span>
      );
    });
  };

  // Function to check if text is a numbered list item
  const isNumberedListItem = (text: string): boolean => {
    return /^\s*\d+\.\s*/.test(text);
  };

  // Function to process and format the message
  const formatMessage = (text: string): React.ReactNode[] => {
    const lines = text.split("\n");
    let inNumberedList = false;
    let numberedListItems: NumberedListItem[] = [];
    let processedLines: ProcessedLine[] = [];

    lines.forEach((line, idx) => {
      if (isNumberedListItem(line)) {
        if (!inNumberedList) {
          inNumberedList = true;
          numberedListItems = [];
        }
        const match = line.match(/^(\d+)\.\s*(.*)$/);
        if (match) {
          const [, num, content] = match;
          if (content) {
            // Store the full content including any links
            numberedListItems.push({
              number: num,
              content: content.trim(),
            });
          }
        }
      } else if (inNumberedList && line.trim()) {
        if (numberedListItems.length > 0) {
          const lastItem = numberedListItems[numberedListItems.length - 1];
          lastItem.content += " " + line.trim();
        }
      } else {
        if (inNumberedList) {
          processedLines.push(
            <div key={`numbered-list-${idx}`} className="space-y-2">
              {numberedListItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="font-medium min-w-[24px]">
                    {item.number}.
                  </span>
                  <span>{formatTextWithLinks(item.content)}</span>
                </div>
              ))}
            </div>
          );
          inNumberedList = false;
          numberedListItems = [];
        }
        if (line.trim()) {
          processedLines.push(line);
        }
      }
    });

    // Handle any remaining numbered list
    if (inNumberedList && numberedListItems.length > 0) {
      processedLines.push(
        <div key="final-numbered-list" className="space-y-2">
          {numberedListItems.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="font-medium min-w-[24px]">{item.number}.</span>
              <span>{formatTextWithLinks(item.content)}</span>
            </div>
          ))}
        </div>
      );
    }

    // Process regular lines
    return processedLines.map((segment, segmentIndex) => {
      if (React.isValidElement(segment)) {
        return segment;
      }

      return (
        <p key={segmentIndex} className="mb-3">
          {formatTextWithLinks(segment as any)}
        </p>
      );
    });
  };

  return <div className="space-y-2">{formatMessage(content)}</div>;
};

export default MessageContent;
