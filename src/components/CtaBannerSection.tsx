import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface CtaBannerSectionProps {
  figmaUrl: string;
  behanceUrl: string;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  figmaUrl,
  behanceUrl,
}) => {
  return (
    <section className="cta-banner__section_01" data-component="CtaBannerSection">
      <div className="cta-banner__container_01">
        <div className="cta-banner__card_01">
          {/* Ambient background glows */}
          <div className="cta-banner__glow_01" aria-hidden="true"></div>
          <div className="cta-banner__glow_02" aria-hidden="true"></div>

          <div className="cta-banner__content_01">
            <div className="cta-banner__badge_01">
              <Sparkles size={14} className="cta-banner__badge_icon_01" />
              <span>SẴN SÀNG TRẢI NGHIỆM</span>
            </div>

            <h2 className="cta-banner__title_01">
              Sẵn sàng nâng cấp giảng đường số thông minh của bạn?
            </h2>

            <p className="cta-banner__desc_01">
              Trải nghiệm hệ thống điểm danh GPS Geofence thế hệ mới cùng QuickAttend ngay hôm nay. Hỗ trợ tích hợp toàn diện với các cổng Portal Đào tạo hiện có của trường.
            </p>

            <div className="cta-banner__btn_group_01">
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-banner__btn_primary_01"
              >
                <span>Dùng thử Figma Prototype</span>
                <ExternalLink size={18} />
              </a>

              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-banner__btn_secondary_01"
              >
                <span>Xem Case Study Behance</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
