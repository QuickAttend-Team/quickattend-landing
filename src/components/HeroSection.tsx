import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Radio,
  Lock,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  figmaUrl: string;
  behanceUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  figmaUrl,
  behanceUrl,
}) => {
  // Trạng thái mô phỏng tương tác kết nối giữa Giảng viên (Host) và Sinh viên (Guest)
  const [attended, setAttended] = useState<boolean>(false);
  const [sessionActive, setSessionActive] = useState<boolean>(true);
  const [attendeeCount, setAttendeeCount] = useState<number>(68);

  const handleStudentCheckin = () => {
    if (!attended) {
      setAttended(true);
      setAttendeeCount((prev) => prev + 1);
    } else {
      setAttended(false);
      setAttendeeCount((prev) => prev - 1);
    }
  };

  const handleToggleSession = () => {
    setSessionActive((prev) => !prev);
  };

  return (
    <section id="tinh-nang" className="hero__section_01" data-component="HeroSection">
      {/* Ambient background glows */}
      <div className="hero__ambient_glow_01" aria-hidden="true"></div>
      <div className="hero__ambient_glow_02" aria-hidden="true"></div>

      <div className="hero__container_01">
        {/* Main Headline */}
        <h1 className="hero__title_01">
          Điểm danh trong 1 giây.<br className="hero__title_br_01" />
          <span className="hero__title_highlight_01">Chống gian lận tuyệt đối.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle_01">
          QuickAttend tích hợp GPS Geofence, cơ chế khóa 1 máy cho 1 sinh viên và bàn giao quyền phiên dạy tức thì. Tiết kiệm 15 phút mỗi giờ giảng đường.
        </p>

        {/* 2 Main Big Call-to-Action Buttons */}
        <div className="hero__cta_group_01">
          <a
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta_button_primary_01"
            id="btn-figma-hero"
          >
            <span>Dùng thử Figma Prototype</span>
            <ExternalLink size={18} />
          </a>

          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta_button_secondary_01"
            id="btn-behance-hero"
          >
            <span>Xem Case Study Behance</span>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Live Telemetry KPI Bar */}
        <div className="hero__kpi_bar_01">
          <div className="hero__kpi_item_01">
            <span className="hero__kpi_value_01">99.8%</span>
            <span className="hero__kpi_label_01">Tỷ lệ chính xác GPS</span>
          </div>
          <div className="hero__kpi_item_01">
            <span className="hero__kpi_value_01 hero__kpi_value_emerald_01">&lt; 2s</span>
            <span className="hero__kpi_label_01">Tốc độ điểm danh/SV</span>
          </div>
          <div className="hero__kpi_item_01">
            <span className="hero__kpi_value_01">0%</span>
            <span className="hero__kpi_label_01">Điểm danh hộ gian lận</span>
          </div>
          <div className="hero__kpi_item_01">
            <span className="hero__kpi_value_01">12K+</span>
            <span className="hero__kpi_label_01">Lượt quét mỗi ngày</span>
          </div>
        </div>

        {/* HERO VISUAL: Dual Interactive Phone Mockups Showcase */}
        <div className="hero__showcase_container_01">
          {/* Ambient Status Chip Floater Left */}
          <div className="hero__floater_chip_01">
            <span className="hero__floater_pulse_01"></span>
            <span className="hero__floater_text_01">Geofence: Bán kính 30m Hợp lệ</span>
          </div>

          {/* Ambient Status Chip Floater Right */}
          <div className="hero__floater_chip_02">
            <Lock size={15} className="hero__floater_lock_01" />
            <span className="hero__floater_text_02">Đã gắn mã phần cứng thiết bị</span>
          </div>

          {/* Phone Mockup 1: Giảng viên mở phiên (Host - Dark Slate Theme) */}
          <div className="hero__phone_card_01">
            {/* Top Android Status Bar */}
            <div className="hero__phone_status_bar_01">
              <span>09:41</span>
              <div className="hero__phone_status_icons_01">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Mockup Header */}
            <div className="hero__mockup_header_01">
              <div>
                <span className="hero__mockup_subtag_01">GIẢNG VIÊN (HOST)</span>
                <h3 className="hero__mockup_title_01">Ca dạy hiện tại</h3>
              </div>
              <button
                type="button"
                onClick={handleToggleSession}
                className="hero__session_pill_01"
                title="Bấm để mô phỏng đóng/mở phiên"
              >
                <span className={`hero__session_indicator_01 ${sessionActive ? 'is-active' : 'is-closed'}`}></span>
                <span>{sessionActive ? 'Đang mở' : 'Đã đóng'}</span>
              </button>
            </div>

            {/* Subject Details Card */}
            <div className="hero__subject_card_01">
              <div className="hero__subject_badge_01">CO3043</div>
              <h4 className="hero__subject_name_01">Kỹ thuật phần mềm</h4>
              <p className="hero__subject_meta_01">Phòng H6-602 • Thứ Tư, Ca 2</p>
              <div className="hero__geofence_tag_01">
                <Radio size={14} className="hero__geofence_icon_01" />
                <span>Geofence GPS: 30 mét quanh phòng học</span>
              </div>
            </div>

            {/* Live Attendance Counter Display */}
            <div className="hero__counter_card_01">
              <div className="hero__counter_top_01">
                <span className="hero__counter_label_01">Sĩ số đã điểm danh:</span>
                <span className="hero__counter_timer_01">
                  <Clock size={14} /> 04:58
                </span>
              </div>
              <div className="hero__counter_stat_01">
                <span className="hero__counter_number_01">{attendeeCount}</span>
                <span className="hero__counter_total_01">/ 80 Sinh viên</span>
                <span className="hero__counter_percent_01">
                  {Math.round((attendeeCount / 80) * 100)}%
                </span>
              </div>
              <div className="hero__progress_bar_bg_01">
                <div
                  className="hero__progress_bar_fill_01"
                  style={{ width: `${(attendeeCount / 80) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Bottom Trigger Button */}
            <button
              type="button"
              onClick={handleToggleSession}
              className="hero__mockup_btn_host_01"
            >
              {sessionActive ? (
                <>
                  <Clock size={16} />
                  <span>Đóng ca điểm danh (Lưu bảng)</span>
                </>
              ) : (
                <>
                  <Play size={16} />
                  <span>Mở lại ca điểm danh 1 chạm</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Mockup 2: Sinh viên điểm danh 1 chạm (Guest - White Minimalist Theme) */}
          <div className="hero__phone_card_02">
            {/* Top Android Status Bar */}
            <div className="hero__phone_status_bar_02">
              <span>09:41</span>
              <div className="hero__phone_status_icons_02">
                <span>GPS Đang Bật</span>
                <span>98%</span>
              </div>
            </div>

            {/* Mockup Header */}
            <div className="hero__mockup_header_02">
              <div>
                <span className="hero__mockup_subtag_02">SINH VIÊN (GUEST)</span>
                <h3 className="hero__mockup_title_02">Điểm danh 1-Chạm</h3>
              </div>
              <div className="hero__student_avatar_02">
                <span>SV</span>
              </div>
            </div>

            {/* GPS Match Verification Card */}
            <div className="hero__verification_card_01">
              <div className="hero__verification_icon_wrap_01">
                <Radio size={20} className="hero__verification_icon_01" />
              </div>
              <div className="hero__verification_info_01">
                <span className="hero__verification_title_01">Định vị GPS phòng học</span>
                <span className="hero__verification_desc_01">
                  Khoảng cách: <strong>8.4m</strong> (Bán kính hợp lệ: 30m)
                </span>
              </div>
              <span className="hero__verification_badge_01">HỢP LỆ</span>
            </div>

            {/* Device Binding Lock Check */}
            <div className="hero__verification_card_02">
              <div className="hero__verification_icon_wrap_02">
                <ShieldCheck size={20} className="hero__verification_icon_02" />
              </div>
              <div className="hero__verification_info_02">
                <span className="hero__verification_title_02">Khóa thiết bị phần cứng</span>
                <span className="hero__verification_desc_02">
                  UUID: <strong>d8f2...b41a</strong> (Đã xác minh chính chủ)
                </span>
              </div>
              <span className="hero__verification_badge_02">KHÓA 1 MÁY</span>
            </div>

            {/* Big 1-Tap Attendance Action Button */}
            <div className="hero__student_action_wrap_01">
              <button
                type="button"
                onClick={handleStudentCheckin}
                className={`hero__student_action_btn_01 ${attended ? 'is-attended' : ''}`}
              >
                {attended ? (
                  <>
                    <CheckCircle2 size={24} className="hero__checkin_done_icon_01" />
                    <span>ĐÃ ĐIỂM DANH THÀNH CÔNG!</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    <span>ĐIỂM DANH NGAY (1 CHẠM)</span>
                  </>
                )}
              </button>
              <p className="hero__student_hint_01">
                {attended
                  ? 'Thời gian ghi nhận: 09:41:12 • Đã đồng bộ cổng đào tạo'
                  : 'Bấm nút trên để thử nghiệm tính năng điểm danh'}
              </p>
              {attended && (
                <button
                  type="button"
                  onClick={handleStudentCheckin}
                  className="hero__reset_demo_btn_01"
                >
                  <RotateCcw size={13} /> Thử lại lần nữa
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

