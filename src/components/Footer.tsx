import React from "react";
import { Users, BookOpen } from "lucide-react";
import type { TeamMember } from "../types";
import logoImg from "../assets/logo.png";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface FooterProps {
  wikiUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  wikiUrl = "https://github.com/QuickAttend-Team/QuickAttend/wiki",
}) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Lâm Chí Nguyên",
      studentId: "2412332",
      role: "Frontend Mobile Lead / Architecture & Web Landing Page",
    },
    {
      name: "Ngô Võ Gia Minh",
      studentId: "2412069",
      role: "Mobile UI/UX Design & Frontend Feature Dev",
    },
    {
      name: "Nguyễn Hồng Thiện Nhân",
      studentId: "2410670",
      role: "Git Manager / Backend API & Database Lead",
    },
    {
      name: "Nguyễn Huỳnh Tấn Phát",
      studentId: "2412585",
      role: "QA / Testing, Geofencing & Hardware Auth",
    },
  ];

  return (
    <footer id="doi-ngu" className="footer__root_01" data-component="Footer">
      <div className="footer__container_01">
        {/* Top Section */}
        <div className="footer__top_01">
          <div className="footer__brand_col_01">
            <div className="footer__brand_header_01">
              <img
                src={logoImg}
                alt="quickattend."
                className="footer__logo_img_01"
              />
            </div>
            <p className="footer__brand_desc_01">
              Hệ thống điểm danh di động 1-chạm kết hợp Geofencing GPS,
              khóa phần cứng thiết bị và ủy quyền phiên tạm thời - giải pháp cho
              giảng đường đại học.
            </p>
            <div className="footer__github_link_wrap_01">
              <a
                href={wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__github_btn_01 footer__github_btn_wiki_01"
                title="Tài liệu kiến trúc & Báo cáo đồ án Wiki"
              >
                <BookOpen size={16} />
                <span>GitHub Wiki (Báo cáo & Kiến trúc)</span>
              </a>
              <a
                href="https://github.com/QuickAttend-Team/quickattend-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__github_btn_01"
                title="Mã nguồn Landing Page"
              >
                <GithubIcon size={16} />
                <span>Repository (quickattend-landing)</span>
              </a>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="footer__team_col_01">
            <div className="footer__team_header_01">
              <Users size={18} className="footer__team_icon_01" />
              <h4 className="footer__team_title_01">
                Nhóm Tứ Trụ CO3043_Môn Phát triển Ứng dụng trên Thiết bị di động
                (CO3043)
              </h4>
            </div>
            <div className="footer__members_grid_01">
              {teamMembers.map((member) => (
                <div key={member.studentId} className="footer__member_card_01">
                  <div className="footer__member_top_01">
                    <span className="footer__member_name_01">
                      {member.name}
                    </span>
                    <span className="footer__member_id_01">
                      MSSV: {member.studentId}
                    </span>
                  </div>
                  <div className="footer__member_role_01">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="footer__bottom_01">
          <p className="footer__copyright_01">
            © 2026 QuickAttend Team. Trường Đại học Bách Khoa — ĐHQG-HCM
            (HCMUT). Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};
