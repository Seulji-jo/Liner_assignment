import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import noFavicon from '../img/favicon.svg';
import '../styles/Detail.css';

import AddTagsDropdown from './AddTagsDropdown';
import ShareModal from './ShareModal';

import MoreDropdown from './MoreDropdown';
import Recommendation from './Recommendation';
import Page from './Page';
import { fakeDatas, relevants } from '../fakeData';

function Detail() {
  const { dataId } = useParams();
  const history = useHistory();

  let data = fakeDatas.filter((data) => data.id === dataId);

  const [
    {
      tags,
      title,
      link,
      url,
      highlight,
      description,
      authors,
      imgSrc,
      favicon,
    },
  ] = data;
  const [onSaved, setOnSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickEvent = () => {
    history.push('/');
  };
  return (
    <main className="detail">
      <div className="main detail">
        <section className="detail-container">
          <div className="detail-header">
            <button className="btn-back icon" onClick={handleClickEvent}>
              back
            </button>
            <div className="page-detail-btns">
              <div className="saved-container">
                {onSaved && <AddTagsDropdown />}
                <button
                  className={
                    onSaved
                      ? 'btn-save page-btn icon active'
                      : 'btn-save page-btn icon'
                  }
                  onClick={() => setOnSaved(!onSaved)}
                >
                  saved
                </button>
              </div>
              <div className="share-container">
                <button
                  className="btn-share page-btn icon"
                  onClick={(e) => setIsOpen(!isOpen)}
                >
                  share
                </button>
                <ShareModal
                  link={url}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  title="Share Original Page"
                />
              </div>
              <MoreDropdown />
            </div>
          </div>
          <section>
            <div className="detail-title-container">
              {imgSrc && (
                <img src={imgSrc} alt={`${title} img`} className="detail-img" />
              )}
              <div className="detail-tag-container">
                {tags &&
                  tags.map((tag, i) => (
                    <span key={i} className="detail-tag">
                      #{tag}
                    </span>
                  ))}
              </div>
              <h1 className="detail-page-title">{title}</h1>
              <div className="page-link detail">
                <img
                  src={favicon ? favicon : noFavicon}
                  alt="favicon"
                  className="page-favicon"
                />
                <a href={url} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </div>
            </div>
            <div className="highlights-container">
              {highlight ? (
                <>
                  <div className="highlight detail"></div>
                  <p className="page-highlight">
                    {highlight}
                    <div className="page-highlight-by">
                      Highlighted by LINER
                    </div>
                  </p>
                </>
              ) : (
                <div className="no-highlight">No Highlights</div>
              )}
            </div>
            <div className="view-original-container">
              <a
                className="view-original"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                View Original
              </a>
            </div>
            <div className="detail-buttom">
              {description && (
                <div className="description-container buttom-container">
                  <h5 className="description-title buttom-title">
                    Description
                  </h5>
                  <p className="description bottom-text">{description}</p>
                </div>
              )}
              {authors && (
                <div className="author-container buttom-container">
                  <h5 className="author-title buttom-title">Authors</h5>
                  <p className="author bottom-text">{authors}</p>
                </div>
              )}
            </div>
          </section>
        </section>
        <section className="Relevant">
          <h2 className="relevant-title">More Like This</h2>
          <div className="page-lists detail">
            {relevants.map((data) => (
              <Page key={data.id} data={data} />
            ))}
          </div>
        </section>
      </div>
      <Recommendation page="my highlights" />
    </main>
  );
}

export default Detail;
