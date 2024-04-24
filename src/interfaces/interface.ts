import type React from 'react';
import type { ReactNode } from 'react';

export interface IButton {
    label: string;
    type?: 'button' | 'submit';
    id?: string;
    className?: string;
    isDisabled?: boolean;
    routeName?: string;
    onClickHandler?: () => void;
  }

  export interface IHeadingElementProps {
    medium?: boolean;
    children: React.ReactNode;
    className?: string;
  }
  export interface AttachmentFormInfo {
    accountMaintainanceCertificate: File | null;
    externalBank: File | null;
    livePicture: File | null;
    cnicFront: File | null;
    cnicBack: File | null;
    // status?: string;
  }

  export interface IFormLayout {
    children: ReactNode;
    className?: string;
  }