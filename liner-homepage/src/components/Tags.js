import React, { useEffect, useRef, useState } from 'react';

import Page from './Page';
import { fakeDatas } from '../fakeData';

function Tags() {
  const renderPageLists = () => {
    return fakeDatas.map((data) => <Page key={data.id} data={data} />);
  };

  return <div className="page-lists">tags</div>;
}

export default Tags;
