
import React from 'react';
import { IconProps } from '../../types';

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a.75.75 0 000 1.5h4.037L6.76 13.037a.75.75 0 001.06 1.06L15.596 6.32v4.038a.75.75 0 001.5 0V3.75a.75.75 0 00-.75-.75h-5.25z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M7.5 5.25a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3V12a.75.75 0 00-1.5 0v4.5a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h4.5a.75.75 0 000-1.5h-4.5z"
      clipRule="evenodd"
    />
  </svg>
);
