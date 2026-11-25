import React, { useState } from 'react';
import type { UserStory } from '../types';
import { CheckCircle2, Check } from 'lucide-react';

const USER_STORIES_DATA: UserStory[] = [
  {
    code: 'US01',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    title: 'Xác thực định danh học thuật',
    statement: 'Đăng ký tài khoản Giảng viên và xác thực danh tính qua email trường đại học (.edu / .edu.vn).',
    benefit: 'Đảm bảo chỉ người có thẩm quyền giảng dạy mới được phép tạo phòng và mở ca điểm danh.',
    metric: 'Bảo mật 100%',
  },
  {
    code: 'US02',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    title: 'Khóa thiết bị phần cứng',
    statement: 'Khóa tài khoản sinh viên với Mã định danh phần cứng thiết bị (Hardware UUID Binding).',
    benefit: 'Ngăn chặn triệt để hành vi đăng nhập tài khoản của bạn bè để điểm danh hộ.',
    metric: 'Chống gian lận 100%',
  },
  {
    code: 'US03',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    title: 'Tạo mẫu ca học linh hoạt',
    statement: 'Tạo và lưu sẵn các Mẫu ca học (Tên môn, Phòng học, Bán kính Geofence GPS 20m - 100m).',
    benefit: 'Không phải tốn thời gian thiết lập lại thông số ở mỗi buổi giảng dạy trên lớp.',
    metric: 'Lưu 1 lần dùng cả kỳ',
  },
  {
    code: 'US04',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    title: 'Khởi tạo phiên 1-chạm & Đồng hồ',
    statement: 'Bắt đầu phiên điểm danh chỉ với 1 nút bấm từ mẫu ca học kèm Đồng hồ đếm ngược thời gian thực.',
    benefit: 'Tiến hành điểm danh ngay lập tức mà không làm gián đoạn thời gian giảng dạy.',
    metric: 'Khởi động trong 3 giây',
  },
  {
    code: 'US05',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    title: 'Ủy quyền ca dạy an toàn',
    statement: 'Bàn giao quyền quản lý phiên điểm danh tạm thời cho Giảng viên dạy thay hoặc Trợ giảng.',
    benefit: 'Xử lý linh hoạt khi có sự cố bất ngờ mà không phải cấp quyền quản trị phức tạp trên LMS.',
    metric: 'Tự thu hồi quyền',
  },
  {
    code: 'US06',
    role: 'host',
    roleTitle: 'Giảng viên (Host)',
    title: 'Giám sát sĩ số thời gian thực',
    statement: 'Xem số lượng và danh sách sinh viên đã điểm danh hợp lệ theo thời gian thực.',
    benefit: 'Nắm bắt sĩ số lớp học ngay lập tức để điều chỉnh tiến trình bài giảng.',
    metric: 'Cập nhật từng mili-giây',
  },
  {
    code: 'US07',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    title: 'Điểm danh 1-chạm chống Fake GPS',
    statement: 'Sinh viên điểm danh 1-chạm với kiểm tra định vị ngầm GPS và cơ chế phát hiện ứng dụng giả lập vị trí.',
    benefit: 'Điểm danh cực nhanh trong 2 giây, không bị nghẽn mạng hay phải xếp hàng quét mã.',
    metric: 'Tốc độ < 2 giây',
  },
  {
    code: 'US08',
    role: 'guest',
    roleTitle: 'Sinh viên (Guest)',
    title: 'Hàng đợi ngoại tuyến (Offline Queue)',
    statement: 'Tự động lưu lượt điểm danh vào bộ nhớ bảo mật khi phòng học mất kết nối Wi-Fi/4G và tự động đồng bộ khi có mạng.',
    benefit: 'Không bao giờ bị mất lượt điểm danh hợp lệ do sự cố mạng đột xuất tại trường.',
    metric: 'Đồng bộ tự động 100%',
  },
];

export const UserStoriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'host' | 'guest'>('all');

  const filteredStories =
    activeTab === 'all'
      ? USER_STORIES_DATA
      : USER_STORIES_DATA.filter((item) => item.role === activeTab);

  return (
    <section id="user-stories" className="stories__section_01" data-component="UserStoriesSection">
      <div className="stories__container_01">
        {/* Header */}
        <div className="stories__header_01">
          <h2 className="stories__title_01">Giải pháp tối ưu cho từng người dùng</h2>
          <p className="stories__subtitle_01">
            Giao diện tối giản, tập trung vào nhiệm vụ, thao tác tự nhiên không phức tạp.
          </p>

          {/* Role Filter Tabs */}
          <div className="stories__tab_bar_01">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`stories__tab_btn_01 ${activeTab === 'all' ? 'is-active' : ''}`}
            >
              Tất cả 8 User Stories
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('host')}
              className={`stories__tab_btn_01 ${activeTab === 'host' ? 'is-active' : ''}`}
            >
              Dành cho Giảng Viên (Host)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('guest')}
              className={`stories__tab_btn_01 ${activeTab === 'guest' ? 'is-active' : ''}`}
            >
              Dành cho Sinh Viên (Guest)
            </button>
          </div>
        </div>

        {/* Highlight Banner matching Stitch Section 4 */}
        <div className="stories__highlight_banner_01">
          <div className="stories__highlight_col_01">
            <div className="stories__highlight_pill_01">
              <CheckCircle2 size={16} className="stories__highlight_icon_01" />
              <span>Tiết kiệm 15-20 phút mỗi buổi dạy</span>
            </div>
            <h3 className="stories__highlight_title_01">
              Tối ưu cho cả Giảng viên đứng lớp & Sinh viên giảng đường
            </h3>
            <p className="stories__highlight_desc_01">
              Không còn áp lực đọc danh sách hàng trăm sinh viên hay giải quyết khiếu nại về điểm danh hộ. Giảng viên tập trung hoàn toàn vào chất lượng giảng dạy, sinh viên chỉ mất 1 chạm để hoàn tất nghĩa vụ học phần.
            </p>
            <ul className="stories__feature_list_01">
              <li className="stories__feature_item_01">
                <Check size={16} className="stories__feature_check_01" />
                <span>Lưu mẫu cấu hình phòng học: Tạo 1 lần cho cả học kỳ, mở ca trong 3 giây</span>
              </li>
              <li className="stories__feature_item_01">
                <Check size={16} className="stories__feature_check_01" />
                <span>Bàn giao quyền dạy thay an toàn: Ủy quyền ca dạy qua email, tự động thu hồi</span>
              </li>
              <li className="stories__feature_item_01">
                <Check size={16} className="stories__feature_check_01" />
                <span>Báo cáo trực quan tức thì: Xuất danh sách vắng, trễ chuẩn Bộ Giáo Dục</span>
              </li>
            </ul>
          </div>

          <div className="stories__highlight_col_02">
            <div className="stories__live_preview_card_01">
              <div className="stories__live_preview_top_01">
                <span className="stories__live_preview_title_01">Tổng quan ca học trực tiếp</span>
                <span className="stories__live_badge_01">Live 09:41</span>
              </div>
              <div className="stories__live_list_01">
                <div className="stories__live_item_01">
                  <div className="stories__live_user_01">
                    <div className="stories__live_avatar_01">N</div>
                    <div>
                      <div className="stories__live_name_01">Lâm Chí Nguyên</div>
                      <div className="stories__live_id_01">MSSV: 2412332 • SM-S928B</div>
                    </div>
                  </div>
                  <span className="stories__live_status_valid_01">Hợp lệ (8m)</span>
                </div>
                <div className="stories__live_item_01">
                  <div className="stories__live_user_01">
                    <div className="stories__live_avatar_01">M</div>
                    <div>
                      <div className="stories__live_name_01">Ngô Võ Gia Minh</div>
                      <div className="stories__live_id_01">MSSV: 2412069 • IP15PM</div>
                    </div>
                  </div>
                  <span className="stories__live_status_valid_01">Hợp lệ (12m)</span>
                </div>
                <div className="stories__live_item_01">
                  <div className="stories__live_user_01">
                    <div className="stories__live_avatar_01">P</div>
                    <div>
                      <div className="stories__live_name_01">Nguyễn Huỳnh Tấn Phát</div>
                      <div className="stories__live_id_01">MSSV: 2412585 • Pixel 8</div>
                    </div>
                  </div>
                  <span className="stories__live_status_valid_01">Hợp lệ (5m)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 User Stories Grid */}
        <div className="stories__grid_01">
          {filteredStories.map((story) => {
            const isHost = story.role === 'host';
            return (
              <div
                key={story.code}
                className={`stories__card_01 ${isHost ? 'is-host' : 'is-guest'}`}
              >
                <div className="stories__card_header_01">
                  <span className="stories__card_code_01">{story.code}</span>
                  <span className={`stories__card_role_tag_01 ${isHost ? 'tag-host' : 'tag-guest'}`}>
                    {story.roleTitle}
                  </span>
                </div>
                <h4 className="stories__card_title_01">{story.title}</h4>
                <p className="stories__card_statement_01">"{story.statement}"</p>
                <div className="stories__card_benefit_box_01">
                  <span className="stories__card_benefit_label_01">Lợi ích đạt được:</span>
                  <p className="stories__card_benefit_text_01">{story.benefit}</p>
                </div>
                <div className="stories__card_footer_01">
                  <span className="stories__card_metric_01">{story.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
