import type { Component } from 'vue';

export interface ModalProps {
  show: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}
export type ModalEmits = {
  close: [];
};

export interface ModalContentProps {
  title?: string;
  closeIcon?: Component;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export type ModalContentEmits = {
  close: [];
  confirm: [];
};
