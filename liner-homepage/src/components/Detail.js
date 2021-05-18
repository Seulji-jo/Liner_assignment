import React from 'react';
import { useParams } from 'react-router';

function Detail() {
  let { dataId } = useParams();
  console.log(dataId);
  return (
    <main>
      detail
      <section>hey</section>
    </main>
  );
}

export default Detail;
