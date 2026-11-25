import React, { useState } from 'react';
import { X, Save, Link2, CheckCircle2 } from 'lucide-react';

interface LinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  figmaUrl: string;
  behanceUrl: string;
  wikiUrl: string;
  onSave: (figma: string, behance: string, wiki: string) => void;
}

export const LinkModal: React.FC<LinkModalProps> = ({
  isOpen,
  onClose,
  figmaUrl,
  behanceUrl,
  wikiUrl,
  onSave,
}) => {
  const [tempFigma, setTempFigma] = useState(figmaUrl);
  const [tempBehance, setTempBehance] = useState(behanceUrl);
  const [tempWiki, setTempWiki] = useState(wikiUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(tempFigma.trim(), tempBehance.trim(), tempWiki.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="link-modal__backdrop_01" onClick={onClose} data-component="LinkModal">
      <div
        className="link-modal__dialog_01"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="link-modal__header_01">
          <div className="link-modal__header_left_01">
            <Link2 size={20} className="link-modal__header_icon_01" />
            <h3 id="modal-title" className="link-modal__title_01">
              Gắn Link Nộp Bài (Figma, Behance & GitHub Wiki)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="link-modal__close_btn_01"
            aria-label="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        <p className="link-modal__desc_01">
          Quản lý và cập nhật liên kết nộp bài đồ án <strong>QuickAttend</strong> (CO3043). Các thay đổi sẽ có hiệu lực ngay lập tức trên toàn bộ các nút CTA trên trang web.
        </p>

        <form onSubmit={handleSubmit} className="link-modal__form_01">
          <div className="link-modal__field_01">
            <label htmlFor="figma-input" className="link-modal__label_01">
              1. Link Figma Prototype (Public)
            </label>
            <input
              id="figma-input"
              type="url"
              value={tempFigma}
              onChange={(e) => setTempFigma(e.target.value)}
              placeholder="https://www.figma.com/proto/..."
              className="link-modal__input_01"
              required
            />
          </div>

          <div className="link-modal__field_01">
            <label htmlFor="behance-input" className="link-modal__label_01">
              2. Link Behance Case Study (Public)
            </label>
            <input
              id="behance-input"
              type="url"
              value={tempBehance}
              onChange={(e) => setTempBehance(e.target.value)}
              placeholder="https://www.behance.net/..."
              className="link-modal__input_01"
              required
            />
          </div>

          <div className="link-modal__field_01">
            <label htmlFor="wiki-input" className="link-modal__label_01">
              3. Link GitHub Wiki (Báo cáo & Kiến trúc đồ án)
            </label>
            <input
              id="wiki-input"
              type="url"
              value={tempWiki}
              onChange={(e) => setTempWiki(e.target.value)}
              placeholder="https://github.com/QuickAttend-Team/QuickAttend/wiki"
              className="link-modal__input_01"
              required
            />
          </div>

          <div className="link-modal__actions_01">
            <button
              type="button"
              onClick={onClose}
              className="link-modal__btn_cancel_01"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="link-modal__btn_submit_01"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Đã lưu thành công!</span>
                </>
              ) : (
                <>
                  <Save size={16} />
                  <span>Cập nhật liên kết</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
