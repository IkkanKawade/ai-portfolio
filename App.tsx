
import React, { useState } from 'react';
import Header from './components/Header'; // Changed from named import
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AllProjectsPage } from './components/AllProjectsPage'; // 新しいコンポーネントをインポート
import { Project } from './types';

const portfolioName = "ikkan-ai.com";
const ownerName = "ikkan-ai.com";
const bio = `AI技術を活用して開発したツールやプロジェクトをまとめたポートフォリオです。
今後も、新たに開発したツールやアップデート内容を随時追加していきます。`;

const profileImageUrl = "/alex-innovator-profile.png"; 

const projectsData: Project[] = [
  {
    id: '0',
    title: 'Eigo Partner',
    description: 'AIとチャットしながら英語を学べる学習支援ツール。',
    longDescription: 'AIチャットボット「Eigo Partner」は、自然な会話を通じて英語学習をサポートします。日常会話の練習、語彙の増強、文法チェックなど、あなたのレベルや目標に合わせてカスタマイズされた学習体験を提供。いつでもどこでも、気軽に英語のアウトプット練習が可能です。',
    imageUrl: 'https://picsum.photos/seed/eigopartner/600/400',
    technologies: ['React', 'TypeScript', 'AI/NLP', 'Vercel'],
    projectUrl: 'https://eigo-partner-clean.vercel.app/',
    date: '2024年5月',
  },
  {
    id: '1',
    title: 'ポモドーロタイマー',
    description: '作業と休憩を管理し集中力を高めるタイマーアプリ。',
    longDescription: 'ポモドーロテクニックを実践するために設計された直感的なタイマーです。25分の作業セッションと5分の短い休憩を繰り返し、生産性を向上させます。タスク管理、進捗追跡、カスタマイズ可能なタイマー設定などの機能が含まれています。',
    imageUrl: 'https://picsum.photos/seed/pomodorotimer/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://ikkankawade.github.io/pomodoro-timer/',
    date: '2023年10月',
  },
  {
    id: '2',
    title: 'Coming Soon...',
    description: 'Coming Soon...',
    longDescription: 'Coming Soon...',
    imageUrl: 'https://picsum.photos/seed/comingsoonalpha/600/400',
    technologies: ['TBD'],
    projectUrl: undefined,
    repoUrl: undefined,
    date: 'Coming Soon',
  },
  {
    id: '3',
    title: 'Coming Soon...',
    description: 'Coming Soon...',
    longDescription: 'Coming Soon...',
    imageUrl: 'https://picsum.photos/seed/comingsoonbeta/600/400',
    technologies: ['TBD'],
    projectUrl: undefined,
    repoUrl: undefined,
    date: 'Coming Soon',
  },
];

type View = 'home' | 'allProjects';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  return (
    <div className="flex flex-col min-h-screen bg-brand-primary">
      <Header title={portfolioName} />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero name={ownerName} bio={bio} imageUrl={profileImageUrl} />
            <ProjectsSection 
              projects={projectsData} 
              onShowAllProjects={() => setCurrentView('allProjects')} 
            />
            <ContactSection />
          </>
        )}
        {currentView === 'allProjects' && (
          <AllProjectsPage 
            projects={projectsData} 
            onShowHome={() => setCurrentView('home')} 
          />
        )}
      </main>
      <Footer ownerName={ownerName} />
    </div>
  );
};

export default App;
