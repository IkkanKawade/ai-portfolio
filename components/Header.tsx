import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-brand-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold text-brand-text tracking-tight">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
