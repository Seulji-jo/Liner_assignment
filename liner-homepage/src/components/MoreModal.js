import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

function MoreModal({ isOpen, close, txt, title }) {
  let [value, setValue] = useState(title);
  const renderTitle = () => {
    if (title) return txt;
    return 'Are You Sure?';
  };
  const renderBody = () => {
    if (txt === 'Edit a title') {
      return (
        <input
          type="text"
          className="modal-description edit-title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    } else if (txt === 'Move 1 page to trash') {
      return (
        <p className="modal-description">You can restore it in the trash.</p>
      );
    }
    return (
      <p className="modal-description">
        Do you
        {txt[0] === 'h' ? ` really want to ${txt}?` : ` want to ${txt}?`}
        <br />
        This action cannot be undone.
      </p>
    );
  };
  const renderButton = () => {
    if (txt === 'Edit a title') {
      return (
        <button className="modal-btn confirm ok" onClick={() => close(false)}>
          Save
        </button>
      );
    } else if (txt === 'Move 1 page to trash') {
      return (
        <button className="modal-btn confirm hide" onClick={() => close(false)}>
          Delete
        </button>
      );
    } else if (txt === 'hide this page') {
      return (
        <button className="modal-btn confirm hide" onClick={() => close(false)}>
          Hide
        </button>
      );
    }
    return (
      <button className="modal-btn confirm ok" onClick={() => close(false)}>
        OK
      </button>
    );
  };
  useEffect(() => {
    if (isOpen) {
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
    };
  });
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="dim" onClick={() => close(false)}></div>
          <div className="modal-dropdown more">
            <div className="modal-txt">
              <div className="modal-header">
                <h2 className="modal-title">{renderTitle()}</h2>
                <button className="btn-close icon" onClick={() => close(false)}>
                  close
                </button>
              </div>
              {renderBody()}
            </div>

            <div className="modal-btn-container">
              <button className="modal-btn cancel" onClick={() => close(false)}>
                Cancel
              </button>
              {renderButton()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoreModal;
