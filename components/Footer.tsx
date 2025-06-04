
import React from 'react';

interface FooterProps {
  ownerName: string;
}

export const Footer: React.FC<FooterProps> = ({ ownerName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-secondary text-center py-8">
      <div className="container mx-auto px-6">
        <p className="text-brand-text-secondary text-sm">
          &copy; {currentYear} {ownerName}. 全著作権所有。
        </p>
        <p className="text-brand-text-secondary text-xs mt-1">
          React、TypeScript、Tailwind CSSで構築。
        </p>
      </div>
    </footer>
  );
};