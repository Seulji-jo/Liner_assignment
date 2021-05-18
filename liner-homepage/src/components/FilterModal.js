import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

function FilterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ['Yellow', 'Mint', 'Orange', 'Violet', 'Blue', 'Pink'];
  const type = ['Web', 'PDF'];

  const renderList = (listTopic) => {
    return listTopic.map((list) => (
      <li className="filter-modal-list">
        <div className={`list-color ${list}`}></div>
        <span>{list}</span>
        <div className="check-mark"></div>
      </li>
    ));
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
    <div className="filter-container">
      <button className="hl-filter" onClick={(e) => setIsOpen(!isOpen)}>
        filter
      </button>
      {isOpen && (
        <div className="modal-container">
          <div className="dim" onClick={() => setIsOpen(false)}></div>
          <div className="modal-dropdown filter">
            <div className="modal-txt">
              <div className="modal-header">
                <h2 className="modal-title filter">Filter</h2>
                <button
                  className="btn-close icon"
                  onClick={() => setIsOpen(false)}
                >
                  close
                </button>
              </div>
              <div className="share-body">
                <section className="filter-section">
                  <h5 className="modal-subtitle">Tags</h5>
                  <input
                    type="text"
                    className="modal-search"
                    placeholder="Search tags"
                  />
                </section>
                <section className="filter-section">
                  <h5 className="modal-subtitle">Color Filter</h5>
                  <ul>{renderList(colors)}</ul>
                </section>
                <section className="filter-section">
                  <h5 className="modal-subtitle">Page type</h5>
                  <ul>{renderList(type)}</ul>
                </section>
              </div>
            </div>
            <div className="modal-bottom">
              <button className="modal-btn" onClick={() => setIsOpen(false)}>
                Reset
              </button>
              <button
                className="link-copy modal-btn"
                onClick={() => setIsOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterModal;
