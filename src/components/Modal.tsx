import React, { useEffect, useRef } from 'react';
import type { CollectionEntry } from 'astro:content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: CollectionEntry<'projects'> | null;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { data } = project;
  const videoId = data.urlType === 'video' ? getYouTubeId(data.url) : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8">
          {/* Video/Presentation embed */}
          {data.urlType === 'video' && videoId ? (
            <div className="aspect-video mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={data.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : data.urlType === 'presentation' ? (
            <div className="aspect-video mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src={data.url}
                title={data.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : null}

          {/* Project details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
              {data.fullDescription}
            </p>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(data.links.live || data.links.github || data.links.other) && (
              <div className="flex flex-wrap gap-3 pt-4">
                {data.links.live && (
                  <a
                    href={data.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    View Live
                  </a>
                )}
                {data.links.github && (
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {data.links.other?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}