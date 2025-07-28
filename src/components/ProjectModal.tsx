import React, { useEffect, useState } from 'react';
import Modal from './Modal.tsx';
import type { CollectionEntry } from 'astro:content';

interface ProjectModalProps {
  projects: CollectionEntry<'projects'>[];
}

export default function ProjectModal({ projects }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<CollectionEntry<'projects'> | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Store projects globally for access
    (window as any).__PORTFOLIO_PROJECTS__ = projects;

    const handleCardClick = (e: MouseEvent) => {
      const card = (e.currentTarget as HTMLElement);
      const projectId = card.getAttribute('data-project-id');
      if (projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
          setIsOpen(true);
        }
      }
    };

    // Attach click handlers to all project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('click', handleCardClick);
    });

    // Cleanup
    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, [projects]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      project={selectedProject}
    />
  );
}

export function initializeProjectModal() {
  // This function is now deprecated but kept for compatibility
  console.log('ProjectModal is now self-initializing');
}