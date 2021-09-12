import type { NextPage } from 'next';
import Layout from '../components/layout';
import FuseList from '../components/fuse-list';

const Home: NextPage = () => {
  return (
    <Layout>
      <FuseList groupSize={10} />
    </Layout>
  );
};

export default Home;
