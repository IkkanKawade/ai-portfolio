
import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface AllProjectsPageProps {
  projects: Project[];
  onShowHome: () => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ projects, onShowHome }) => {
  return (
    <section id="all-projects" className="py-16 md:py-24 bg-brand-primary">
      <div className="container mx-auto px-6">
        {/* 上部の「ホームページに戻る」ボタンを削除 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-text mt-8 mb-12">
          全ての制作物
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-text-secondary">表示するプロジェクトはまだありません。</p>
        )}
         <div className="mt-12 text-center">
            <button
                onClick={onShowHome}
                className="text-brand-accent hover:text-blue-700 font-semibold transition-colors duration-300 inline-flex items-center"
                aria-label="ホームページに戻る"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                ホームページに戻る
            </button>
        </div>
      </div>
    </section>
  );
};