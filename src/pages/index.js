import React from 'react';

import Layout from '../layout';
import { Pager } from '../lib';
import BrandGuideLines from '../components/BrandGuideLines';

const Home = () => {
  return (
    <Layout>
      <Pager>
        <BrandGuideLines />
      </Pager>
    </Layout>
  );
};

export default Home;
