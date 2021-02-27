import React from 'react';

import Layout from '../layout';
import { Pager } from '../lib';
import BrandGuideLines from '../components/BrandGuideLines';

function FoodsPage() {
  return (
    <Layout>
      <Pager>
        <BrandGuideLines />
      </Pager>
    </Layout>
  );
}

export default FoodsPage;
