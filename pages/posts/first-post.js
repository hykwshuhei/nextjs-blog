import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../components/layout.module.css'

export default function FirstPost() {
  return (
    <>
    <Layout className={styles.container}>
    <Head>
      <title>最初の投稿</title>
    </Head>
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">
          トップページに戻る
        </Link>
      </h2>
      </Layout>
    </>
  );
}
