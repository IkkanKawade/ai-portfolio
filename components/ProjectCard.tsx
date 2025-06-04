import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, longDescription, imageUrl, technologies, projectUrl, repoUrl, date } = project;

  return (
    <div className="bg-brand-primary rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200/50">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-brand-text mb-2">{title}</h3>
        <p className="text-sm text-brand-text-secondary mb-3">{date}</p>
        <p className="text-brand-text-secondary text-sm mb-4 flex-grow">{longDescription || description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-brand-text mb-1">使用技術：</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="bg-brand-secondary text-brand-text text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200 flex items-center space-x-4">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text hover:text-gray-700 transition-colors duration-200 flex items-center"
              aria-label={`${title} のライブプロジェクトを見る`}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              ライブデモ
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text hover:text-gray-700 transition-colors duration-200 flex items-center"
              aria-label={`${title} のソースコードをGitHubで見る`}
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              ソースコード
            </a>
          )}
        </div>
      </div>
    </div>
  );
};