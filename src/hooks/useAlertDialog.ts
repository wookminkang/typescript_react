import { useState, useCallback } from 'react';

interface AlertDialogState {
  isOpen: boolean;
  title: string;
  content: string;
  onConfirm?: () => void;
}

let globalAlertState: AlertDialogState = {
  isOpen: false,
  title: '',
  content: '',
};

let globalSetAlertState: ((state: AlertDialogState) => void) | null = null;

export const useAlertDialog = () => {
  const [alertState, setAlertState] =
    useState<AlertDialogState>(globalAlertState);

  // 전역 상태 업데이트 함수 설정
  if (!globalSetAlertState) {
    globalSetAlertState = setAlertState;
  }

  const showAlert = useCallback(
    (title: string, content: string, onConfirm?: () => void) => {
      const newState = {
        isOpen: true,
        title,
        content,
        onConfirm,
      };
      globalAlertState = newState;
      if (globalSetAlertState) {
        globalSetAlertState(newState);
      }
    },
    []
  );

  const bottomSheet = useCallback(
    (title: string, content: string, onConfirm?: () => void) => {
      const newState = {
        isOpen: true,
        title,
        content,
        onConfirm,
      };
      globalAlertState = newState;
      if (globalSetAlertState) {
        globalSetAlertState(newState);
      }
    },
    []
  );

  const hideAlert = useCallback(() => {
    const newState = {
      ...globalAlertState,
      isOpen: false,
    };
    globalAlertState = newState;
    if (globalSetAlertState) {
      globalSetAlertState(newState);
    }
  }, []);

  const handleConfirm = useCallback(() => {
    if (globalAlertState.onConfirm) {
      globalAlertState.onConfirm();
    }
    hideAlert();
  }, [hideAlert]);

  return {
    alertState,
    showAlert,
    hideAlert,
    handleConfirm,
    bottomSheet,
  };
};
