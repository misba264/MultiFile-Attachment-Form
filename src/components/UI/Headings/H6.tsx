import React from 'react';

import type { IHeadingElementProps } from '@/interfaces/interface';

const H6 = ({ medium = false, children, className }: IHeadingElementProps) => {
  return (
    <div
      className={`text-base ${
        medium ? 'font-medium' : 'font-semibold'
      } leading-tight text-secondary-base ${className}`}
    >
      {children}
    </div>
  );
};

export default H6;