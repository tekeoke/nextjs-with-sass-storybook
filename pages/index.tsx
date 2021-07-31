import Link from 'next/link'
import Layout from '../components/Layout'
import LinkButton from '../components/LinkButton'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>ようこそ</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      {' '}
      <Link href="/posts/first-post">
        <a>Posts</a>
      </Link>
      {' '}
      <Link href="/sample">
        <a>Sample</a>
      </Link>
    </p>
    <p>
      <LinkButton />
    </p>
    <p className={styles.scss_test}>
      Scss Test
    </p>
  </Layout>
)

export default IndexPage
