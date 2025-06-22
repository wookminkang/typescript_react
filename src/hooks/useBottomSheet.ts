import { useState, useCallback } from 'react';

interface BottomSheetDialogState {
  isOpen: boolean;
  title: string;
  content: string;
  children: React.ReactNode;
}

let globalBottomSheetState: BottomSheetDialogState = {
  isOpen: false,
  title: '',
  content: '',
  children: null,
};

let globalSetBottomSheetState:
  | ((state: BottomSheetDialogState) => void)
  | null = null;

export const useBottomSheet = () => {
  const [bottomSheetState, setBottomSheetState] =
    useState<BottomSheetDialogState>(globalBottomSheetState);

  // 전역 상태 업데이트 함수 설정
  if (!globalSetBottomSheetState) {
    globalSetBottomSheetState = setBottomSheetState;
  }

  const showBottomSheet = useCallback(
    (title: string, content: string, children: React.ReactNode) => {
      const newState = {
        isOpen: true,
        title,
        content,
        children,
      };
      globalBottomSheetState = newState;
      if (globalSetBottomSheetState) {
        globalSetBottomSheetState(newState);
      }
    },
    []
  );

  const hideBottomSheet = useCallback(() => {
    const newState = {
      ...globalBottomSheetState,
      isOpen: false,
    };
    globalBottomSheetState = newState;
    if (globalSetBottomSheetState) {
      globalSetBottomSheetState(newState);
    }
  }, []);

  return {
    isOpen: bottomSheetState.isOpen,
    title: bottomSheetState.title,
    children: bottomSheetState.children,
    showBottomSheet,
    hideBottomSheet,
  };
};
