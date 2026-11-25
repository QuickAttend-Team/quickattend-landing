import React from 'react';
import { ExternalLink, Settings2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenLinkModal: () => void;
  figmaUrl: string;
  behanceUrl: string;
  wikiUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLinkModal,
  figmaUrl,
  behanceUrl,
  wikiUrl = 'https://github.com/QuickAttend-Team/QuickAttend/wiki',
}) => {
  return (
    <header className="navbar__header_01" data-component="Navbar">
      <div className="navbar__inner_01">
        {/* Brand: quickattend. official logo image */}
        <a href="#" className="navbar__brand_01" aria-label="quickattend.">
          <img
            src={logoImg}
            alt="quickattend."
            className="navbar__logo_img_01"
          />
        </a>

        {/* Navigation Links: Flat single-line layout without gray container */}
        <nav className="navbar__nav_01" aria-label="Điều hướng chính">
          <a href="#tinh-nang" className="navbar__nav_link_01">Tính năng</a>
          <a href="#giai-phap" className="navbar__nav_link_01">Giải pháp</a>
          <a href="#quy-trinh" className="navbar__nav_link_01">Quy trình</a>
          <a href="#user-stories" className="navbar__nav_link_01">8 User Stories</a>
          <a href="#doi-ngu" className="navbar__nav_link_01">Đội ngũ</a>
        </nav>

        {/* Actions & CTAs: Behance + GitHub Wiki + Figma black pill + Settings circle button */}
        <div className="navbar__actions_01">
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__button_text_01"
            title="Xem GitHub Wiki đồ án CO3043"
          >
            <span>GitHub Wiki</span>
          </a>

          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__button_text_01"
            title="Xem Case Study Behance"
          >
            <span>Behance</span>
          </a>

          <a
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__button_cta_01"
            title="Dùng thử Figma Prototype"
          >
            <span>Figma Prototype</span>
            <ExternalLink size={14} />
          </a>

          <button
            type="button"
            onClick={onOpenLinkModal}
            className="navbar__button_avatar_01"
            title="Cài đặt link nộp bài"
            aria-label="Cài đặt link nộp bài"
          >
            <Settings2 size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
