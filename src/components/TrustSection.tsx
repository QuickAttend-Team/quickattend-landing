import React from 'react';

interface UniversityLogo {
  id: string;
  code: string;
  name: string;
  fullName: string;
  file: string;
}

const VNU_UNIVERSITIES: UniversityLogo[] = [
  {
    id: 'vnu',
    code: 'VNU-HCM',
    name: 'Đại học Quốc gia TP.HCM',
    fullName: 'Đại học Quốc gia Thành phố Hồ Chí Minh',
    file: 'vnu.svg',
  },
  {
    id: 'hcmut',
    code: 'HCMUT',
    name: 'Trường Đại học Bách khoa',
    fullName: 'Trường Đại học Bách khoa — ĐHQG-HCM',
    file: 'hcmut.svg',
  },
  {
    id: 'hcmus',
    code: 'HCMUS',
    name: 'Trường Đại học Khoa học Tự nhiên',
    fullName: 'Trường Đại học Khoa học Tự nhiên — ĐHQG-HCM',
    file: 'hcmus.svg',
  },
  {
    id: 'uit',
    code: 'UIT',
    name: 'Trường Đại học Công nghệ Thông tin',
    fullName: 'Trường Đại học Công nghệ Thông tin — ĐHQG-HCM',
    file: 'uit.svg',
  },
  {
    id: 'uel',
    code: 'UEL',
    name: 'Trường Đại học Kinh tế – Luật',
    fullName: 'Trường Đại học Kinh tế – Luật — ĐHQG-HCM',
    file: 'uel.png',
  },
  {
    id: 'iu',
    code: 'HCMIU',
    name: 'Trường Đại học Quốc tế',
    fullName: 'Trường Đại học Quốc tế — ĐHQG-HCM',
    file: 'iu.png',
  },
  {
    id: 'ussh',
    code: 'HCMUSSH',
    name: 'Trường Đại học Khoa học Xã hội và Nhân văn',
    fullName: 'Trường Đại học Khoa học Xã hội và Nhân văn — ĐHQG-HCM',
    file: 'ussh.svg',
  },
  {
    id: 'agu',
    code: 'AGU',
    name: 'Trường Đại học An Giang',
    fullName: 'Trường Đại học An Giang — ĐHQG-HCM',
    file: 'agu.svg',
  },
];

export const TrustSection: React.FC = () => {
  // Nhân bản danh sách 3 lần để hiệu ứng cuộn ngang liên tục tuyệt đối, không có điểm gãy
  const marqueeList = [...VNU_UNIVERSITIES, ...VNU_UNIVERSITIES, ...VNU_UNIVERSITIES];

  return (
    <section className="trust__section_01" data-component="TrustSection">
      <div className="trust__container_01">
        <h2 className="trust__title_01">
          Hệ thống được thiết kế cho giảng đường các trường thuộc khối ĐHQG-HCM
        </h2>

        {/* Infinite Horizontal Scrolling Marquee */}
        <div className="trust__marquee_container_01" aria-label="Danh sách trường ĐHQG-HCM cuộn liên tục">
          <div className="trust__marquee_track_01">
            {marqueeList.map((uni, idx) => {
              const logoSrc = `${import.meta.env.BASE_URL}logos/${uni.file}`;
              return (
                <div
                  key={`${uni.id}-${idx}`}
                  className="trust__marquee_item_01"
                  title={uni.fullName}
                >
                  <div className="trust__logo_wrap_01">
                    <img
                      src={logoSrc}
                      alt={`Logo ${uni.name}`}
                      className="trust__logo_img_01"
                      loading="lazy"
                    />
                  </div>
                  <div className="trust__info_wrap_01">
                    <span className="trust__name_01">{uni.name}</span>
                    <span className="trust__code_01">{uni.code}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
