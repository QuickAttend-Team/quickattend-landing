import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ProblemSolution } from './components/ProblemSolution';
import { WorkflowSection } from './components/WorkflowSection';
import { UserStoriesSection } from './components/UserStoriesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { Footer } from './components/Footer';
import { LinkModal } from './components/LinkModal';

const DEFAULT_FIGMA_URL = 'https://www.figma.com/proto/8xurgCtCj8ft46yGnAIMkU/QuickAttend?node-id=3-365&p=f&t=SxWYwvveouxwpJ6b-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A365&show-proto-sidebar=1';
const DEFAULT_BEHANCE_URL = 'https://www.behance.net/portfolio/editor?project_id=259023993';
const DEFAULT_WIKI_URL = 'https://github.com/QuickAttend-Team/QuickAttend/wiki';

function App() {
  const [figmaUrl, setFigmaUrl] = useState<string>(() => {
    const saved = localStorage.getItem('quickattend_figma_url');
    if (!saved || saved.includes('QuickAttend-App-Prototype')) return DEFAULT_FIGMA_URL;
    return saved;
  });

  const [behanceUrl, setBehanceUrl] = useState<string>(() => {
    const saved = localStorage.getItem('quickattend_behance_url');
    if (!saved || saved.includes('QuickAttend-Smart-Attendance-System')) return DEFAULT_BEHANCE_URL;
    return saved;
  });

  const [wikiUrl, setWikiUrl] = useState<string>(() => {
    const saved = localStorage.getItem('quickattend_wiki_url');
    return saved || DEFAULT_WIKI_URL;
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('quickattend_figma_url', figmaUrl);
  }, [figmaUrl]);

  useEffect(() => {
    localStorage.setItem('quickattend_behance_url', behanceUrl);
  }, [behanceUrl]);

  useEffect(() => {
    localStorage.setItem('quickattend_wiki_url', wikiUrl);
  }, [wikiUrl]);

  const handleSaveLinks = (newFigma: string, newBehance: string, newWiki?: string) => {
    if (newFigma) setFigmaUrl(newFigma);
    if (newBehance) setBehanceUrl(newBehance);
    if (newWiki) setWikiUrl(newWiki);
  };

  return (
    <div className="landing-root__container_01" data-component="QuickAttendApp">
      {/* Top Sticky Navigation Bar */}
      <Navbar
        onOpenLinkModal={() => setIsModalOpen(true)}
        figmaUrl={figmaUrl}
        behanceUrl={behanceUrl}
        wikiUrl={wikiUrl}
      />

      <main className="landing-main__content_01">
        {/* Section 0: Hero Section with Dual Interactive Phone Mockups */}
        <HeroSection figmaUrl={figmaUrl} behanceUrl={behanceUrl} />

        {/* Section 1: Trust / Universities Logo Cloud */}
        <TrustSection />

        {/* Section 2: 3 Anti-fraud Core Solutions (Geofence, Hardware UUID, Session Delegation) */}
        <ProblemSolution />

        {/* Section 3: 3-Step Rapid In-Class Workflow */}
        <WorkflowSection />

        {/* Section 4: Target Personas & All 8 Core User Stories (US01 - US08) */}
        <UserStoriesSection />

        {/* Section 5: Real-world Testimonial */}
        <TestimonialSection />

        {/* Section 6: Bottom Call to Action Banner */}
        <CtaBannerSection figmaUrl={figmaUrl} behanceUrl={behanceUrl} />
      </main>

      {/* Global Footer with CO3043 Team Information */}
      <Footer wikiUrl={wikiUrl} />

      {/* Dynamic Link Update Modal for 23h15 Handover */}
      <LinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        figmaUrl={figmaUrl}
        behanceUrl={behanceUrl}
        wikiUrl={wikiUrl}
        onSave={handleSaveLinks}
      />
    </div>
  );
}

export default App;

/*
================================================================================
HISTORICAL IMPLEMENTATION BACKUP (Monolithic Version):
================================================================================
The previous monolithic App.tsx contained single-file sections for hero, problem analysis,
UVP cards, and 8 user stories without module decomposition. It has been refactored
into clean modular components in src/components/ matching the Stitch Desktop specification
while strictly adhering to {Block}__{Element}_{Index} functional class naming conventions.
================================================================================
*/
