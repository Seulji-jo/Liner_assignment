import React from 'react';

import HighlightPage from './HlPage';
import { myhighlights } from '../fakeData';

function Highlights() {
  const renderPageLists = () => {
    return myhighlights
      .map((data) => <HighlightPage key={data.id} data={data} />)
      .reverse();
  };

  return <div className="page-lists highlights">{renderPageLists()}</div>;
}

export default Highlights;
