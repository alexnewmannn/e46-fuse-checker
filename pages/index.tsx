import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import FuseList from '../components/fuse-list';

const Home: NextPage = () => {
  return (
    <Layout>
      <FuseList />
    </Layout>
  );
};

export default Home;
