import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import noFavicon from '../img/favicon.svg';
import '../styles/Detail.css';

import ShareDropdown from './ShareDropdown';
import ExportModal from './ExportModal';
import MoreModal from './MoreModal';
import Recommendation from './Recommendation';
import Page from './Page';
import { myhighlights, newRelevants } from '../fakeData';

function HlDetail() {
  const { dataId } = useParams();
  const history = useHistory();

  let data = myhighlights.filter((data) => data.id === dataId);

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
      createdAt,
    },
  ] = data;
  const [isModal, setIsModal] = useState(false);
  const [modalTxt, setModalTxt] = useState('');

  const handleClickEvent = () => {
    history.push('/myhighlights');
  };
  const handleModal = (txt) => {
    setIsModal(true);
    setModalTxt(txt);
  };

  return (
    <>
      <main className="detail">
        <div className="main detail">
          <section className="detail-container">
            <div className="detail-header">
              <button className="btn-back icon" onClick={handleClickEvent}>
                back
              </button>
              <div className="page-detail-btns">
                <ShareDropdown link={url} />
                <ExportModal />
                <div
                  className={'dd-item trash'}
                  onClick={() => handleModal('Move 1 page to trash')}
                >
                  <div className="check-mark"></div>
                  <span className="lang trash">Move to trash</span>
                </div>
              </div>
            </div>
            <section>
              <div className="detail-title-container">
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={`${title} img`}
                    className="detail-img"
                  />
                )}
                <h1 className="detail-page-title">{title}</h1>
                <div className="page-tags">
                  <span className="tag-img">tag</span>
                  {tags &&
                    tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  <button className="edit-tag">Edit Tag</button>
                </div>
                <div className="page-link detail">
                  <img
                    src={favicon ? favicon : noFavicon}
                    alt="favicon"
                    className="page-favicon"
                  />
                  <a href={url} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                  <span className="slice">|</span>
                  <span className="created-at">{createdAt}</span>
                </div>
              </div>
              <div className="highlights-container">
                {highlight ? (
                  <>
                    <div className="highlight"></div>
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
              {newRelevants.map((data) => (
                <Page key={data.id} data={data} />
              ))}
            </div>
          </section>
        </div>
        <Recommendation page="Hldetail" />
      </main>
      <MoreModal
        isOpen={isModal}
        close={setIsModal}
        txt={modalTxt}
        title={title}
      />
    </>
  );
}

export default HlDetail;
