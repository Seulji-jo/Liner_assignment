import React from 'react';
import '../styles/Recommendation.css';

import RecommendationContainter from './RecContainer';
import { tags, fakeDatas, relevants, newRelevants } from '../fakeData';

function Recommendation({ page }) {
  const renderContents = () => {
    if (page === 'home') {
      return (
        <>
          <RecommendationContainter title="Trending Keywords" tags={tags} />
          <RecommendationContainter
            title="Trending Pages"
            articles={relevants}
          />
        </>
      );
    }
    if (page === 'my highlights') {
      return (
        <>
          <RecommendationContainter
            title="People Also Read"
            articles={fakeDatas}
          />
        </>
      );
    }
    if (page === 'Hldetail') {
      return (
        <RecommendationContainter
          title="People Also Read"
          articles={newRelevants}
        />
      );
    }
    return null;
  };
  return (
    <aside>
      <div className="recommendation">
        <div className="welcome-pkg">
          <h3 className="welcome-pkg-title">Welcome Package</h3>
          <div className="welcome-pkg-description">
            Your <b>72% Discount</b> offer ends in 6 days
          </div>
          <div className="welcome-pkg-icon">Welcome Package icon</div>
          <div className="welcome-pkg-btn">
            <button>Redeem Offer</button>
          </div>
        </div>
        {renderContents()}
      </div>
    </aside>
  );
}

export default Recommendation;
