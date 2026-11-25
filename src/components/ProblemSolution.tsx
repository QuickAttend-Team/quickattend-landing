import React from 'react';
import { Navigation, Smartphone, UserCheck } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="giai-phap" className="solution__section_01" data-component="ProblemSolution">
      <div className="solution__container_01">
        {/* Header */}
        <div className="solution__header_01">
          <h2 className="solution__title_01">
            Bộ 3 giải pháp triệt tiêu gian lận giảng đường
          </h2>
          <p className="solution__subtitle_01">
            Thiết kế xóa bỏ hoàn toàn lỗ hổng GPS giả, đăng nhập tài khoản hộ và chuyển quyền phức tạp khi giảng viên bận đột xuất.
          </p>
        </div>

        {/* Bento Grid 3 Cards */}
        <div className="solution__grid_01">
          {/* Card 1: GPS Geofence */}
          <div className="solution__card_01">
            <div className="solution__card_top_01">
              <div className="solution__card_icon_wrap_01">
                <Navigation size={26} className="solution__card_icon_01" />
              </div>
              <h3 className="solution__card_title_01">GPS Geofence Thời Gian Thực</h3>
              <p className="solution__card_desc_01">
                Hàng rào địa lý siêu chuẩn xác bán kính 20m - 50m quanh giảng đường. Công nghệ chống Fake GPS và phát hiện phần mềm giả lập tự động từ chối điểm danh trái phép.
              </p>
            </div>
            <div className="solution__card_metric_01">
              <span className="solution__metric_label_01">Bán kính quét an toàn</span>
              <span className="solution__metric_value_01">Sai số &lt; 1.5 mét</span>
            </div>
          </div>

          {/* Card 2: Khóa 1 Máy / 1 Sinh Viên */}
          <div className="solution__card_01">
            <div className="solution__card_top_01">
              <div className="solution__card_icon_wrap_01">
                <Smartphone size={26} className="solution__card_icon_01" />
              </div>
              <h3 className="solution__card_title_01">Khóa 1 Máy / 1 Sinh Viên</h3>
              <p className="solution__card_desc_01">
                Ràng buộc mã định danh thiết bị (Hardware Device ID) với tài khoản MSSV duy nhất. Mỗi sinh viên chỉ có thể điểm danh bằng chính thiết bị đã xác minh ban đầu.
              </p>
            </div>
            <div className="solution__card_metric_01">
              <span className="solution__metric_label_01">Gian lận điểm danh hộ</span>
              <span className="solution__metric_value_01">Ngăn chặn 100%</span>
            </div>
          </div>

          {/* Card 3: Bàn Giao Quyền Tức Thì */}
          <div className="solution__card_01">
            <div className="solution__card_top_01">
              <div className="solution__card_icon_wrap_01">
                <UserCheck size={26} className="solution__card_icon_01" />
              </div>
              <h3 className="solution__card_title_01">Bàn Giao Quyền Tức Thì</h3>
              <p className="solution__card_desc_01">
                Giảng viên đi công tác hoặc trợ giảng đứng lớp thay? Chuyển quyền quản lý ca học chỉ bằng 1 chạm qua email đại học, tự động thu hồi quyền sau giờ học mà không cần can thiệp hệ thống máy chủ.
              </p>
            </div>
            <div className="solution__card_metric_01">
              <span className="solution__metric_label_01">Thời gian ủy quyền</span>
              <span className="solution__metric_value_01">Dưới 5 giây</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
