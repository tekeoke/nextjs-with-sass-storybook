import Image from 'next/image'
import styles from './sample.module.scss'

interface ImagePathProps {
  path: string
}

const SampleImage: React.FC<ImagePathProps> = ({path}) => (
  <Image className={styles.thumb_img} src={path} width={128} height={128} alt="" />
)

const SamplePage = () => (
  <body id={styles.top}>
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>フロントエンドエンジニアのための「Sass」講座</h1>
        <h2 className={styles.sub_title}>〜基礎から実践まで〜</h2>
      </header>
      <nav className={styles.g_navi}>
        <ul>
          <li><a href="">概要</a></li>
          <li><a href="">カリキュラム</a></li>
          <li><a href="">Q&amp;A</a></li>
          <li><a href="">お知らせ</a></li>
        </ul>
      </nav>
      <div className={styles.contents}>
        <main className={styles.main_area}>
          <section>
            <h3>このコースについて</h3>
            <div className={styles.thumb_img}>
              <Image src="/images/img_001.jpg" width={128} height={128} alt="" />
            </div>
            <p className={styles.left_thumb_para}>登場してから10年余り、制作現場にも導入が進み、Web開発の現場では必須の技術となりつつある「Sass」。実務レベルで使えるSassを基礎から身につけよう！</p>
            <div className={styles.read_more}><a href="">もっと見る</a></div>
          </section>
          <section>
            <h3>講座内容</h3>
            <div className={styles.thumb_img}>
              <Image src="/images/img_002.jpg" width={128} height={128} alt="" />
            </div>
            <p className={styles.left_thumb_para}>
SassはCSSを拡張したメタ言語、CSSプリプロセッサであり、コードの再利用、変数、演算、関数、条件分岐などプログラミング要素をCSSに導入し、効率的で柔軟なコーディングを可能にした強力な言語です。</p>
            <p className={styles.left_thumb_para}>Sassが誕生してから10年余りが経ち、ある調査では開発者の60%以上がSassを使用しているという調査結果があるほど普及が進みました。この傾向は今後Sassを超える画期的な言語が開発されて普及するまで続くでしょう。CSSを生のまま書く現場は減っていき、当たり前のようにSassの技術が求められる時代になっています。</p>
            <div className={styles.read_more}><a href="">もっと見る</a></div>
          </section>
          <section>
            <h3>学習内容</h3>
            <ul>
              <li>Sassの基礎技術を身に付けることができます。</li>
              <li>Sassの開発環境を用意し、Sassを使ったWebサイト制作が行えるようになります。</li>
              <li>CSSを効率的に書くことができ、生産性を向上することができます。</li>
              <li>CSSの品質管理、保守が楽になります。</li>
              <li>モダンなWeb開発を行なっている現場で働くための技術が身につきます。</li>
            </ul>
          </section>
          <section>
            <h3>受講対象</h3>
            <ul>
              <li>CSSは書けるが、Sassは初めてで興味のある方</li>
              <li>実際のサイト制作で使える、実務レベルのSassの技術を身に付けたい方</li>
              <li>Sassをプロジェクトに導入したいと考えているフロントエンドエンジニアの方</li>
              <li>就職、転職の際に有利なスキルとして技術を身につけたい学生、社会人の方</li>
              <li>仕事でSassの技術を求められているデザイナー、コーダー、エンジニアの方</li>
            </ul>
          </section>
        </main>
        <aside className={styles.side_area}>
          <div className={styles.search_area}>
            <h3>Search</h3>
            <form action="./" method="post">
              <input type="text" name="keyword" placeholder="キーワード" />
              <button type="submit">検索</button>
            </form>
          </div>
          <div className={styles.category_area}>
            <h3>Category</h3>
            <ul className={styles.category_list}>
              <li><a href="">ネスト</a></li>
              <li><a href="">変数</a></li>
              <li><a href="">関数</a></li>
              <li><a href="">ミックスイン</a></li>
              <li><a href="">継承</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <footer className={styles.footer}>&copy; 2017 Aire Project</footer>
    </div>
  </body>
)

export default SamplePage
