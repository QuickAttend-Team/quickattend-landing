import React from "react";
import { Quote } from "lucide-react";

export const TestimonialSection: React.FC = () => {
  return (
    <section
      id="danh-gia"
      className="testimonial__section_01"
      data-component="TestimonialSection"
    >
      <div className="testimonial__container_01">
        <div className="testimonial__card_01">
          <Quote size={52} className="testimonial__quote_icon_01" />
          <p className="testimonial__quote_text_01">
            “Từ khi áp dụng QuickAttend, tôi không còn mất 15 phút đầu mỗi ca
            học để điểm danh 80 sinh viên. Tình trạng đi học hộ chấm dứt hoàn
            toàn nhờ cơ chế khóa máy kết hợp hàng rào Geofence.”
          </p>
          <div className="testimonial__author_box_01">
            <div className="testimonial__avatar_01">QT</div>
            <div className="testimonial__author_info_01">
              <div className="testimonial__author_name_01">
                PGS. TS. Quản Thành Thơ
              </div>
              <div className="testimonial__author_title_01">
                Khoa Khoa Học và Kỹ thuật Máy Tính - Trường Đại học Bách Khoa - ĐHQG-HCM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
