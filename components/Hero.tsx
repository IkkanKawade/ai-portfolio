
import React from 'react';

interface HeroProps {
  name: string;
  tagline?: string; // taglineをオプショナルに変更
  bio: string;
  imageUrl: string; // プロフィール画像のURLを受け取るためのプロップを追加
}

export const Hero: React.FC<HeroProps> = ({ name, tagline, bio, imageUrl }) => {
  return (
    <section className="bg-brand-primary py-16 md:py-24 text-center">
      <div className="container mx-auto px-6">
        <img 
          src={imageUrl} // picsum.photosの代わりに渡されたimageUrlを使用
          alt={`${name}のプロフィール写真`} 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand-accent shadow-lg object-cover" // object-coverを追加して画像のアスペクト比を維持
          aria-label={`${name}のプロフィール写真`}
        />
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-3">
          Vibe Coding portfolio<span className="text-brand-text">について</span>
        </h2>
        {tagline && ( 
          <p className="text-xl md:text-2xl text-brand-text-secondary mb-8">{tagline}</p>
        )}
        <p className="max-w-3xl mx-auto text-lg text-brand-text leading-relaxed">
          {bio}
        </p>
      </div>
    </section>
  );
};
