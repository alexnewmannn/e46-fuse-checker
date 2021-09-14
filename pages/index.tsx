import type { NextPage } from 'next';
import Layout from '../components/layout';
import FuseList from '../components/fuse-list';
import SearchFuses from '../components/search';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>e46 Fuse Checker</h1>
      <p>
        Use the search input below or click any of the fuse buttons to see
        equipment items that share a fuse within BMW e46's.
      </p>
      <SearchFuses />
      <FuseList groupSize={10} />
    </Layout>
  );
};

export default Home;
