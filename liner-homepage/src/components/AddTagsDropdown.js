import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dropdown.css';
import { myTags } from '../fakeData';

function AddTagsDropdown() {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (!isOpen && (!node.current || !node.current.contains(e.target)))
      setIsOpen(false);
  };

  const renderTags = () => {
    return myTags.map((tag, i) => {
      return (
        <li className="dd-item add-mytag" key={i}>
          <span className="lang">{tag}</span>
          <div className="edit icon"></div>
        </li>
      );
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="addTag-container" ref={node}>
      <button className="add-tag" onClick={() => setIsOpen(!isOpen)}>
        + Add tags
      </button>
      {isOpen && (
        <div className="dd-container">
          <div className="dd-dropdown add-mytag">
            <div className="search-tag-container">
              <input
                type="text"
                className="search-tag"
                placeholder="Search tags"
              />
            </div>
            <ul>
              <li className="dd-title-container add-mytag">
                <h5 className="my-tag">My Tags</h5>
              </li>
              {renderTags()}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTagsDropdown;
