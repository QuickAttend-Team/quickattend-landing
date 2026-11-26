import React from 'react';
import { Play, MapPin, RefreshCw } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Giảng viên mở ca dạy',
      description:
        'Chỉ cần 1 chạm vào mẫu môn học cấu hình sẵn. Hệ thống tự động tạo mã phiên và kích hoạt rào chắn Geofence phòng học.',
      badgeText: 'Phiên mở trong 3s',
      icon: Play,
    },
    {
      number: '2',
      title: 'Sinh viên mở app & Xác thực',
      description:
        'Ứng dụng tự động kiểm tra GPS phòng học và khóa thiết bị chính chủ, sinh viên chỉ bấm nút "Điểm danh ngay".',
      badgeText: 'Xác thực GPS < 2 giây',
      icon: MapPin,
    },
    {
      number: '3',
      title: 'Tự động đồng bộ số liệu',
      description:
        'Dữ liệu lập tức đồng bộ về hệ thống đào tạo tín chỉ, giảng viên tải file Excel/PDF gửi phòng đào tạo ngay khi tan lớp.',
      badgeText: 'Đồng bộ Portal Đại học',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="quy-trinh" className="workflow__section_01" data-component="WorkflowSection">
      <div className="workflow__container_01">
        <div className="workflow__header_01">
          <h2 className="workflow__title_01">Quy trình 3 bước siêu tốc trong giờ học</h2>
          <p className="workflow__subtitle_01">
            Không cần gọi tên từng người, không mất thời gian cho tiết học.
          </p>
        </div>

        <div className="workflow__grid_01">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="workflow__step_card_01">
                <div className="workflow__step_badge_01">{step.number}</div>
                <h3 className="workflow__step_title_01">{step.title}</h3>
                <p className="workflow__step_desc_01">{step.description}</p>
                <div className="workflow__step_visual_01">
                  <Icon size={28} className="workflow__step_icon_01" />
                  <span className="workflow__step_tag_01">{step.badgeText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
