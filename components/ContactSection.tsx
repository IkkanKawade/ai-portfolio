import React, { useState, FormEvent } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('すべての必須項目を入力してください。');
      return;
    }

    if (!isValidEmail(email)) {
      setError('有効なメールアドレスを入力してください。');
      return;
    }

    // Simulate form submission
    console.log('お問い合わせフォーム送信:', { name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-brand-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
            お問い合わせ<span className="text-brand-text">完了</span>
          </h2>
          <p className="text-lg text-brand-text-secondary">
            メッセージありがとうございます！できるだけ早く返信いたします。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-text mb-4">
          お問い<span className="text-brand-text">合わせ</span>
        </h2>
        <p className="text-lg text-brand-text-secondary text-center mb-12 max-w-2xl mx-auto">
          プロジェクトに関するご質問、コラボレーションのご提案、または単にお話ししたい場合でも、お気軽にご連絡ください。以下のフォームにご記入いただければ、できるだけ早く返信いたします。
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-brand-secondary p-8 rounded-lg shadow-lg">
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">
              {error}
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-brand-text bg-white placeholder-gray-400"
              placeholder="山田 太郎"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-brand-text bg-white placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-1">
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-required="true"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent text-brand-text bg-white placeholder-gray-400"
              placeholder="お問い合わせ内容をご記入ください..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-brand-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
              aria-label="お問い合わせフォームを送信する"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};