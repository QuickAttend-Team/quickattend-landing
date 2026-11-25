import { useState } from 'react';
import './App.css';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Smartphone,
  MapPin,
  Users,
  Share2,
  WifiOff,
  Layers,
  Database,
  Server,
  Code2,
  ExternalLink,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Edit3,
} from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface UserStory {
  code: string;
  role: 'host' | 'guest';
  roleTitle: string;
  statement: string;
  benefit: string;
}

const USER_STORIES: UserStory[] = [
  {
    code: 'US01',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    statement: 'Đăng ký tài khoản Giảng viên và xác thực danh tính qua email trường (.edu / .edu.vn).',
    benefit: 'Đảm bảo chỉ người có thẩm quyền giảng dạy mới được phép tạo phòng và mở ca điểm danh.',
  },
  {
    code: 'US02',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    statement: 'Khóa tài khoản sinh viên với Mã định danh phần cứng thiết bị (Hardware UUID Binding).',
    benefit: 'Ngăn chặn triệt để hành vi đăng nhập tài khoản của bạn bè để điểm danh hộ.',
  },
  {
    code: 'US03',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    statement: 'Tạo và lưu sẵn các Mẫu ca học (Tên môn, Phòng học, Bán kính Geofence GPS 20m - 100m).',
    benefit: 'Không phải tốn thời gian thiết lập lại thông số ở mỗi buổi giảng dạy trên lớp.',
  },
  {
    code: 'US04',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    statement: 'Bắt đầu phiên điểm danh chỉ với 1 nút bấm từ mẫu ca học kèm Đồng hồ đếm ngược thời gian thực.',
    benefit: 'Tiến hành điểm danh ngay lập tức mà không làm gián đoạn thời gian giảng dạy.',
  },
  {
    code: 'US05',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    statement: 'Bàn giao quyền quản lý phiên điểm danh tạm thời cho Giảng viên dạy thay hoặc Trợ giảng.',
    benefit: 'Xử lý linh hoạt khi có sự cố bất ngờ mà không phải cấp quyền quản trị phức tạp trên LMS.',
  },
  {
    code: 'US06',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    statement: 'Xem số lượng và danh sách sinh viên đã điểm danh hợp lệ theo thời gian thực.',
    benefit: 'Nắm bắt sĩ số chính xác ngay tại lớp và đóng phiên bất kỳ lúc nào.',
  },
  {
    code: 'US07',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    statement: 'Điểm danh chỉ bằng 1 nút bấm duy nhất trên màn hình kết hợp định vị GPS ngầm.',
    benefit: 'Hoàn tất điểm danh trong chưa đầy 3 giây khi đã ngồi trong phòng học.',
  },
  {
    code: 'US08',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    statement: 'Nhận thông báo kết quả điểm danh tức thì qua Bottom Sheet xác thực đa yếu tố.',
    benefit: 'Minh bạch trạng thái điểm danh (Hợp lệ, Ngoài vùng GPS, Sai thiết bị) ngay trên màn hình.',
  },
];

export default function App() {
  // Links state - can be updated on the fly or through modal
  const [figmaUrl, setFigmaUrl] = useState('https://www.figma.com/design/QuickAttend-Prototype');
  const [behanceUrl, setBehanceUrl] = useState('https://www.behance.net/gallery/QuickAttend-CaseStudy');
  
  // UI states
  const [storyFilter, setStoryFilter] = useState<'all' | 'host' | 'guest'>('all');
  const [activePreviewTab, setActivePreviewTab] = useState<'guest' | 'host'>('guest');
  const [modalConfig, setModalConfig] = useState<{
    visible: boolean;
    type: 'figma' | 'behance';
    tempUrl: string;
  }>({
    visible: false,
    type: 'figma',
    tempUrl: '',
  });

  const filteredStories = USER_STORIES.filter((item) => {
    if (storyFilter === 'all') return true;
    return item.role === storyFilter;
  });

  const handleOpenLinkModal = (type: 'figma' | 'behance') => {
    setModalConfig({
      visible: true,
      type,
      tempUrl: type === 'figma' ? figmaUrl : behanceUrl,
    });
  };

  const handleSaveLink = () => {
    if (modalConfig.type === 'figma') {
      setFigmaUrl(modalConfig.tempUrl);
    } else {
      setBehanceUrl(modalConfig.tempUrl);
    }
    setModalConfig({ visible: false, type: 'figma', tempUrl: '' });
  };

  return (
    <div className="landing-container__root_01" data-component="QuickAttendLandingPage">
      {/* ==============================================================================
         NAVBAR
         ============================================================================== */}
      <nav className="landing-nav__header_01" data-component="Navbar">
        <div className="landing-nav__inner_01">
          <div className="landing-nav__brand_01">
            <div className="landing-nav__logo_01">
              <CheckCircle2 size={24} />
            </div>
            <span className="landing-nav__brand_text_01">QuickAttend</span>
          </div>

          <div className="landing-nav__links_01">
            <a href="#problem" className="landing-nav__link_01">Vấn đề</a>
            <a href="#features" className="landing-nav__link_01">Tính năng cốt lõi</a>
            <a href="#preview" className="landing-nav__link_01">Giao diện mẫu</a>
            <a href="#stories" className="landing-nav__link_01">8 User Stories</a>
            <a href="#tech" className="landing-nav__link_01">Công nghệ</a>
            <a href="#team" className="landing-nav__link_01">Nhóm phát triển</a>
          </div>

          <div className="landing-nav__actions_01">
            <a
              href="https://github.com/QuickAttend-Team/QuickAttend"
              target="_blank"
              rel="noreferrer"
              className="landing-nav__button_01"
              data-testid="btn-github-repo"
            >
              <GithubIcon size={18} />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ==============================================================================
         HERO SECTION
         ============================================================================== */}
      <header className="landing-hero__section_01" data-component="HeroSection">
        <div className="landing-hero__badge_01">
          <Sparkles size={16} />
          <span>CO3043 • Phát triển Ứng dụng Di động — HCMUT 2026</span>
        </div>

        <h1 className="landing-hero__title_01">
          Điểm danh Di động <span className="landing-hero__highlight_01">1-Chạm</span>
          <br />& Bàn giao Phiên Siêu tốc
        </h1>

        <p className="landing-hero__description_01">
          <strong>QuickAttend</strong> giải quyết triệt để vấn đề tốn thời gian điểm danh và gian lận học đường bằng công nghệ <strong>định vị Geofencing GPS ngầm</strong>, <strong>khóa phần cứng thiết bị (Hardware UUID)</strong> kết hợp cơ chế <strong>bàn giao quyền điểm danh tạm thời</strong> độc quyền.
        </p>

        {/* 2 Nút lớn CTA theo đặc tả nộp bài */}
        <div className="landing-hero__cta_group_01">
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="landing-hero__cta_button_01"
            data-testid="btn-cta-figma"
          >
            <Smartphone size={20} />
            <span>Dùng thử Figma Prototype</span>
            <ExternalLink size={16} />
          </a>

          <a
            href={behanceUrl}
            target="_blank"
            rel="noreferrer"
            className="landing-hero__cta_button_02"
            data-testid="btn-cta-behance"
          >
            <BookOpen size={20} />
            <span>Xem Case Study Behance</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <p className="landing-hero__note_01">
          * Đã chừa sẵn 2 nút lớn để gắn liên kết Figma Prototype và Behance Case Study chính thức trước giờ nộp bài.
          <button
            onClick={() => handleOpenLinkModal('figma')}
            style={{ marginLeft: 8, color: '#34d399', textDecoration: 'underline', fontSize: '0.85rem' }}
          >
            <Edit3 size={12} style={{ display: 'inline', marginRight: 4 }} />
            Chỉnh sửa link
          </button>
        </p>
      </header>

      {/* ==============================================================================
         MOCKUP PREVIEW SECTION
         ============================================================================== */}
      <section id="preview" className="landing-preview__section_01" data-component="MockupPreview">
        <div className="landing-preview__tabs_01">
          <button
            className={`landing-preview__tab_btn_01 ${activePreviewTab === 'guest' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('guest')}
          >
            📱 Sinh viên: Điểm danh 1-Chạm (Guest)
          </button>
          <button
            className={`landing-preview__tab_btn_01 ${activePreviewTab === 'host' ? 'active' : ''}`}
            onClick={() => setActivePreviewTab('host')}
          >
            👨‍🏫 Giảng viên: Phiên Hoạt động (Host Session)
          </button>
        </div>

        <div className="landing-preview__phone_frame_01">
          {activePreviewTab === 'guest' ? (
            <div className="landing-preview__screen_01" style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>QuickAttend Guest</span>
                <span style={{ fontSize: 12, background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: 9999, fontWeight: 600 }}>
                  Trực tuyến
                </span>
              </div>

              <div style={{ background: '#ffffff', borderRadius: 16, padding: 16, border: '1px solid #e2e8f0', marginBottom: 20, textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#0f172a' }}>Lập trình Mobile – IT001</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Phòng A201 • Ca sáng (09:00 - 11:30)</div>
              </div>

              {/* Big 1-Tap Attendance Button */}
              <div
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 85,
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(16, 185, 129, 0.4)',
                }}
              >
                <Smartphone size={36} />
                <div style={{ fontWeight: 800, fontSize: 15, marginTop: 8, letterSpacing: 0.5 }}>ĐIỂM DANH NGAY</div>
                <div style={{ fontSize: 11, opacity: 0.9 }}>1 Chạm Tức Thì</div>
              </div>

              {/* Geofence Status Chip */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: '#f0fdf4',
                  color: '#15803d',
                  padding: '6px 14px',
                  borderRadius: 9999,
                  fontSize: 13,
                  fontWeight: 600,
                  border: '1px solid #bbf7d0',
                }}
              >
                <MapPin size={15} />
                <span>Vị trí GPS: Trong bán kính phòng học (~14m)</span>
              </div>
            </div>
          ) : (
            <div className="landing-preview__screen_01">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Phiên Đang Mở</div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: '#0f172a' }}>Lập trình Mobile – IT001</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#ef4444' }}>04:48</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Thời gian còn lại</div>
                </div>
              </div>

              {/* Attendance Ratio Bar */}
              <div style={{ background: '#ffffff', borderRadius: 16, padding: 14, border: '1px solid #e2e8f0', marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                  <span>Sĩ số: 37 / 50 Sinh viên</span>
                  <span style={{ color: '#10b981' }}>74%</span>
                </div>
                <div style={{ height: 8, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: '74%', height: '100%', background: '#10b981' }} />
                </div>
              </div>

              {/* Recent list preview */}
              <div style={{ fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 8 }}>Vừa điểm danh thành công:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '6px 10px', borderRadius: 8, fontSize: 12 }}>
                  <span style={{ fontWeight: 600 }}>Lê Thị Hoàng Yến (20260101)</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>09:15:22 ✓</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '6px 10px', borderRadius: 8, fontSize: 12 }}>
                  <span style={{ fontWeight: 600 }}>Trần Văn An (20260102)</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>09:15:40 ✓</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==============================================================================
         PROBLEM SECTION
         ============================================================================== */}
      <section id="problem" className="landing-problem__section_01" data-component="ProblemSection">
        <div className="landing-section__header_01">
          <div className="landing-section__subtitle_01">Bối cảnh & Thực trạng</div>
          <h2 className="landing-section__title_01">3 Nút thắt Lớn trong Điểm danh Học đường</h2>
          <p className="landing-section__desc_01">
            Khảo sát thực tế tại giảng đường đại học chỉ ra các điểm nghẽn nghiêm trọng làm lãng phí 15–20% thời lượng mỗi buổi học.
          </p>
        </div>

        <div className="landing-problem__grid_01">
          <div className="landing-problem__card_01">
            <div className="landing-problem__icon_box_01">
              <Clock size={26} />
            </div>
            <h3 className="landing-problem__title_01">1. Thao tác Cồng kềnh</h3>
            <p className="landing-problem__text_01">
              Giảng viên tốn 10–15 phút đầu giờ điểm danh danh sách giấy hoặc thiết lập lại thông số ca học trên các hệ thống LMS phức tạp, làm giảm thời gian truyền đạt kiến thức.
            </p>
          </div>

          <div className="landing-problem__card_01">
            <div className="landing-problem__icon_box_01">
              <Share2 size={26} />
            </div>
            <h3 className="landing-problem__title_01">2. Bất tiện khi Bàn giao</h3>
            <p className="landing-problem__text_01">
              Khi đổi phòng học đột xuất hoặc có giảng viên dạy thay / trợ giảng, việc cấp quyền quản trị ca học trên hệ thống nhà trường rất rườm rà, chậm trễ và rủi ro bảo mật.
            </p>
          </div>

          <div className="landing-problem__card_01">
            <div className="landing-problem__icon_box_01">
              <AlertTriangle size={26} />
            </div>
            <h3 className="landing-problem__title_01">3. Gian lận Điểm danh hộ</h3>
            <p className="landing-problem__text_01">
              Mã QR tĩnh, Google Form hay ký giấy điểm danh rất dễ bị sinh viên chụp ảnh gửi cho bạn ở nhà hoặc ký hộ, làm sai lệch báo cáo chuyên cần thực tế.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================================================================
         CORE FEATURES SECTION (UVP)
         ============================================================================== */}
      <section id="features" className="landing-features__section_01" data-component="FeaturesSection">
        <div className="landing-features__inner_01">
          <div className="landing-section__header_01">
            <div className="landing-section__subtitle_01">Giải pháp Đột phá</div>
            <h2 className="landing-section__title_01">Bộ 4 Ưu điểm Vượt trội của QuickAttend</h2>
            <p className="landing-section__desc_01">
              Tối ưu hóa tối đa trải nghiệm người dùng với các tiêu chuẩn công nghệ tiên tiến nhất.
            </p>
          </div>

          <div className="landing-features__grid_01">
            {/* Feature 1 */}
            <div className="landing-features__card_01">
              <div className="landing-features__icon_01">
                <Smartphone size={28} />
              </div>
              <h3 className="landing-features__title_01">Điểm danh 1-Chạm Siêu tốc (&lt; 3s)</h3>
              <p className="landing-features__desc_01">
                Sinh viên chỉ cần chạm đúng một lần trên màn hình điện thoại khi bước vào lớp. Không cần quét QR phức tạp, không cần nhập mã số, hệ thống tự động hoàn tất trong tích tắc.
              </p>
              <div className="landing-features__badge_01">
                <CheckCircle2 size={14} />
                <span>Tốc độ phản hồi cực nhanh</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="landing-features__card_01">
              <div className="landing-features__icon_01">
                <MapPin size={28} />
              </div>
              <h3 className="landing-features__title_01">Geofencing GPS & Khóa Mã Thiết bị</h3>
              <p className="landing-features__desc_01">
                Sử dụng thuật toán Haversine đo khoảng cách tọa độ thực tế so với tâm phòng học, kết hợp trích xuất Hardware UUID khóa 1 tài khoản với 1 máy vật lý, chấm dứt hoàn toàn nạn điểm danh hộ.
              </p>
              <div className="landing-features__badge_01">
                <ShieldCheck size={14} />
                <span>Chống Fake GPS & Đa thiết bị</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="landing-features__card_01">
              <div className="landing-features__icon_01">
                <Share2 size={28} />
              </div>
              <h3 className="landing-features__title_01">Bàn giao Quyền Quản lý Phiên (Delegation)</h3>
              <p className="landing-features__desc_01">
                Tính năng độc quyền cho phép giảng viên ủy quyền quản lý ca học chỉ bằng 3 bước chạm qua email đồng nghiệp (.edu.vn), giúp buổi học diễn ra liền mạch khi giảng viên bận đột xuất.
              </p>
              <div className="landing-features__badge_01">
                <Users size={14} />
                <span>Không cần can thiệp quyền Admin LMS</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="landing-features__card_01">
              <div className="landing-features__icon_01">
                <WifiOff size={28} />
              </div>
              <h3 className="landing-features__title_01">Hàng đợi Ngoại tuyến (Offline Queue Resilience)</h3>
              <p className="landing-features__desc_01">
                Giải quyết triệt để sự cố mạng yếu tại giảng đường. Khi mất kết nối, dữ liệu được ký số và lưu an toàn vào bộ đệm cục bộ, tự động đồng bộ (Retry & Sync) ngay khi phát hiện có Internet.
              </p>
              <div className="landing-features__badge_01">
                <Layers size={14} />
                <span>NetInfo Auto-Sync & Bền bỉ dữ liệu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================================
         8 USER STORIES SECTION
         ============================================================================== */}
      <section id="stories" className="landing-stories__section_01" data-component="UserStoriesSection">
        <div className="landing-section__header_01">
          <div className="landing-section__subtitle_01">Phạm vi MVP</div>
          <h2 className="landing-section__title_01">8 User Stories Cốt lõi (US01 – US08)</h2>
          <p className="landing-section__desc_01">
            Được phân bổ chặt chẽ theo hai nhóm đối tượng chính: Giảng viên (Host) và Sinh viên (Guest).
          </p>
        </div>

        {/* Filter buttons */}
        <div className="landing-stories__filters_01">
          <button
            className={`landing-stories__filter_btn_01 ${storyFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStoryFilter('all')}
          >
            Tất cả ({USER_STORIES.length})
          </button>
          <button
            className={`landing-stories__filter_btn_01 ${storyFilter === 'host' ? 'active' : ''}`}
            onClick={() => setStoryFilter('host')}
          >
            👨‍🏫 Giảng viên (5)
          </button>
          <button
            className={`landing-stories__filter_btn_01 ${storyFilter === 'guest' ? 'active' : ''}`}
            onClick={() => setStoryFilter('guest')}
          >
            📱 Sinh viên (3)
          </button>
        </div>

        {/* Stories Grid */}
        <div className="landing-stories__grid_01">
          {filteredStories.map((story) => (
            <div key={story.code} className="landing-stories__card_01">
              <div className="landing-stories__header_01">
                <span className="landing-stories__code_01">{story.code}</span>
                <span
                  className={`landing-stories__tag_01 ${
                    story.role === 'host' ? 'landing-stories__tag_host_01' : 'landing-stories__tag_guest_01'
                  }`}
                >
                  {story.roleTitle}
                </span>
              </div>
              <h4 className="landing-stories__role_01">{story.statement}</h4>
              <p className="landing-stories__text_01">
                <strong>Mục đích:</strong> {story.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==============================================================================
         TECH STACK SECTION
         ============================================================================== */}
      <section id="tech" className="landing-tech__section_01" data-component="TechStackSection">
        <div className="landing-section__header_01">
          <div className="landing-section__subtitle_01">Kiến trúc Công nghệ</div>
          <h2 className="landing-section__title_01">Nền tảng Công nghệ Hiện đại & Chuẩn hóa</h2>
          <p className="landing-section__desc_01">
            Xây dựng trên nền tảng pnpm Monorepo chia sẻ hợp đồng dữ liệu `@quickattend/contracts`.
          </p>
        </div>

        <div className="landing-tech__grid_01">
          <div className="landing-tech__item_01">
            <Smartphone size={32} color="#10b981" style={{ margin: '0 auto' }} />
            <div className="landing-tech__name_01">Expo SDK 52</div>
            <div className="landing-tech__role_01">React Native & Expo Router Mobile App</div>
          </div>

          <div className="landing-tech__item_01">
            <Server size={32} color="#3b82f6" style={{ margin: '0 auto' }} />
            <div className="landing-tech__name_01">Express & Node 24</div>
            <div className="landing-tech__role_01">REST API Server & Auth Services</div>
          </div>

          <div className="landing-tech__item_01">
            <Database size={32} color="#f59e0b" style={{ margin: '0 auto' }} />
            <div className="landing-tech__name_01">PostgreSQL 18</div>
            <div className="landing-tech__role_01">Prisma 7 ORM & Migration Engine</div>
          </div>

          <div className="landing-tech__item_01">
            <Code2 size={32} color="#8b5cf6" style={{ margin: '0 auto' }} />
            <div className="landing-tech__name_01">TypeScript & Zod</div>
            <div className="landing-tech__role_01">End-to-End Type Safety Contracts</div>
          </div>
        </div>
      </section>

      {/* ==============================================================================
         TEAM SECTION
         ============================================================================== */}
      <section id="team" className="landing-team__section_01" data-component="TeamSection">
        <div className="landing-section__header_01">
          <div className="landing-section__subtitle_01">Nhóm Thực hiện</div>
          <h2 className="landing-section__title_01">Đội ngũ Phát triển Dự án</h2>
          <p className="landing-section__desc_01">
            Lớp L01 — Môn học Phát triển Ứng dụng Di động (CO3043) • Trường ĐH Bách Khoa, ĐHQG-HCM
          </p>
        </div>

        <div className="landing-team__grid_01">
          <div className="landing-team__card_01">
            <div className="landing-team__avatar_01">NN</div>
            <h4 className="landing-team__name_01">Nguyễn Hồng Thiện Nhân</h4>
            <div className="landing-team__mssv_01">MSSV: 2410670</div>
            <div className="landing-team__role_01">Git Manager / Backend API & Database Lead</div>
          </div>

          <div className="landing-team__card_01">
            <div className="landing-team__avatar_01">LN</div>
            <h4 className="landing-team__name_01">Lâm Chí Nguyên</h4>
            <div className="landing-team__mssv_01">MSSV: 2412332</div>
            <div className="landing-team__role_01">Frontend Mobile Lead / Architecture & Landing Page</div>
          </div>

          <div className="landing-team__card_01">
            <div className="landing-team__avatar_01">GM</div>
            <h4 className="landing-team__name_01">Ngô Võ Gia Minh</h4>
            <div className="landing-team__mssv_01">MSSV: 2412069</div>
            <div className="landing-team__role_01">Mobile UI/UX Design & Frontend Feature Dev</div>
          </div>

          <div className="landing-team__card_01">
            <div className="landing-team__avatar_01">TP</div>
            <h4 className="landing-team__name_01">Nguyễn Huỳnh Tấn Phát</h4>
            <div className="landing-team__mssv_01">MSSV: 2412585</div>
            <div className="landing-team__role_01">QA / Testing, Geofencing & Hardware Auth</div>
          </div>
        </div>
      </section>

      {/* ==============================================================================
         FOOTER
         ============================================================================== */}
      <footer className="landing-footer__container_01" data-component="Footer">
        <div className="landing-footer__inner_01">
          <div className="landing-footer__info_01">
            <div className="landing-footer__title_01">QuickAttend Project</div>
            <p className="landing-footer__text_01">
              Đề tài môn học CO3043 (Phát triển Ứng dụng Di động) — Khoa Khoa học và Kỹ thuật Máy tính, Trường Đại học Bách Khoa, ĐHQG-HCM. Giảng viên hướng dẫn: ThS. Hoàng Lê Hải Thanh.
            </p>
          </div>

          <div className="landing-footer__links_01">
            <a
              href="https://github.com/QuickAttend-Team/QuickAttend"
              target="_blank"
              rel="noreferrer"
              className="landing-footer__link_01"
            >
              <GithubIcon size={16} />
              <span>GitHub Org</span>
            </a>
            <a
              href="https://github.com/QuickAttend-Team/QuickAttend/wiki"
              target="_blank"
              rel="noreferrer"
              className="landing-footer__link_01"
            >
              <BookOpen size={16} />
              <span>GitHub Wiki</span>
            </a>
          </div>
        </div>
      </footer>

      {/* ==============================================================================
         MODAL: EDIT LINKS
         ============================================================================== */}
      {modalConfig.visible && (
        <div className="landing-modal__overlay_01" data-component="EditLinkModal">
          <div className="landing-modal__card_01">
            <h3 className="landing-modal__title_01">
              Cập nhật liên kết {modalConfig.type === 'figma' ? 'Figma Prototype' : 'Behance Case Study'}
            </h3>
            <p className="landing-modal__message_01">
              Dán URL bài nộp chính thức của nhóm (lúc 23h15) vào ô bên dưới:
            </p>
            <input
              type="url"
              className="landing-modal__input_01"
              value={modalConfig.tempUrl}
              onChange={(e) => setModalConfig({ ...modalConfig, tempUrl: e.target.value })}
              placeholder="https://..."
            />
            <div className="landing-modal__actions_01">
              <button
                className="landing-modal__btn_cancel_01"
                onClick={() => setModalConfig({ ...modalConfig, visible: false })}
              >
                Hủy
              </button>
              <button className="landing-modal__btn_confirm_01" onClick={handleSaveLink}>
                Lưu liên kết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
