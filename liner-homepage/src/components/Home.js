import React from 'react';

import Recommendation from './Recommendation';
import { tags, fakeDatas } from '../fakeData';

function Home() {
  return (
    <main>
      <section>Home</section>
      <Recommendation page="home" />
    </main>
  );
}

export default Home;
