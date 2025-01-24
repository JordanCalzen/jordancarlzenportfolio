import { create } from "zustand";
type MinimalProps = {
	isMinimized: boolean;
	toogleMinimizeBtn: () => void;
};

export const useMinimal = create<MinimalProps>((set) => ({
	isMinimized: false,
	toogleMinimizeBtn: () =>
		set((state) => ({ isMinimized: !state.isMinimized })),
}));
