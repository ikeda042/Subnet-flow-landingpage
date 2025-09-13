import React from 'react';

/* =========================
   型定義
========================= */
type Demo = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
};

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  expertise: string[];
  links?: { label: string; href: string }[];
};

/* =========================
   ユーティリティ（プレースホルダー画像/アバター）
========================= */
/** デモ用の簡易プレースホルダー画像（OGP比率） */
// const makePlaceholder = (label: string) => {
//   const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
//   <defs>
//     <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
//       <stop offset='0' stop-color='#dbeafe'/>
//       <stop offset='1' stop-color='#fef3c7'/>
//     </linearGradient>
//     <linearGradient id='g2' x1='0' y1='1' x2='1' y2='0'>
//       <stop offset='0' stop-color='#e2e8f0' stop-opacity='.35'/>
//       <stop offset='1' stop-color='#94a3b8' stop-opacity='.35'/>
//     </linearGradient>
//   </defs>
//   <rect width='1200' height='630' fill='url(#g)'/>
//   <circle cx='980' cy='-60' r='300' fill='url(#g2)'/>
//   <circle cx='-40' cy='580' r='220' fill='url(#g2)'/>
//   <g fill='#0f172a' font-family='system-ui,-apple-system,Segoe UI,Roboto,Noto Sans JP,Arial' text-anchor='middle'>
//     <text x='600' y='310' font-size='46' font-weight='700'>${label}</text>
//     <text x='600' y='360' font-size='20' fill='#475569'>Laboratory Demo</text>
//   </g>
// </svg>`;
//   return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
// };


/* =========================
   ダミーデータ
========================= */
const demoData: Demo[] = [
  {
    id: 'viz',
    title: '温和な雰囲気のホームページ例',
    description: '人文学系の研究室に好まれる柔らかい雰囲気のベースデザインです。。',
    imageUrl: "/humanity_lab/humanity_lab_top.png",
    demoUrl: '/humanity_lab/humanity_lab.html'
  },
  {
    id: 'dashboard',
    title: 'シンプルで無駄がないホームページ例',
    description: '数理生命科学系の研究室に好まれるシンプルなベースデザインです。',
    imageUrl: "/bio_lab2/bio_lab2_top.png",
    demoUrl: '/bio_lab2/bio_lab2.html',
  },
   {
    id: 'papers',
    title: '航空工学系研究室のホームページ例',
    description: '航空工学や宇宙系の研究室に好まれるベースデザインです。',
    imageUrl: "/aerospace_lab/aerospace_lab_top.png",
    demoUrl: '/aerospace_lab/aerospace_lab.html'
  },
   {
    id: 'papers',
    title: '機械工学系研究室のホームページ例',
    description: '機械工学系の研究室に好まれる学術的なベースデザインです。',
    imageUrl: "/maceng_lab/mac_eng_lab_top.png",
    demoUrl: "/maceng_lab/mac_eng_lab.html"
  },
   {
    id: 'papers',
    title: 'データサイエンス系研究室のホームページ例',
    description: 'データサイエンス系の研究室に好まれるモダンかつシンプルなベースデザインです。',
    imageUrl: "/datascience_lab/datascience_lab_top.png",
    demoUrl: '/datascience_lab/datascience_lab.html'
  },
   {
    id: 'papers',
    title: 'モダンなバイオ系研究室のホームページ例',
    description: 'モダンなバイオ系の研究室に好まれるベースデザインです。',
    imageUrl: "/bio_lab3/bio_lab3_top.png",
    demoUrl: '/bio_lab3/bio_lab3.html'
  },
];

/** 例: メンバー情報（差し替え推奨） */
const members: Member[] = [
  {
    id: 'm1',
    name: '池田 有之介',
    role: '広島大学統合生命科学研究科 修士2年',
    bio: '大学・研究機関のDXを得意とし、令和の虎サービスなどのコンシューマ向けシステムの開発も行う。自身の研究室では画像解析ソフトウェアを構築し、研究を効率化している。',
    avatarUrl: "1.jpg",
    expertise: ['日英通訳', '広大8年目', 'スタートアップCEO'],
    links: [
      { label: '経歴', href: 'https://www.wantedly.com/id/yunosuke_ikeda' },
      { label: 'CEO', href: 'https://ellipsys.co.jp/' }
    ]
  },
  {
    id: 'm2',
    name: '林 雅周',
    role: '広島大学統合生命科学研究科 修士1年',
    bio: '広島大学大学院で難培養性微生物の研究を行う傍ら、水球部の主将として仲間を率いる。研究とスポーツを通じて培った粘り強さとリーダーシップで、新たな価値を創造していく。',
    avatarUrl: "2.png",
    expertise: ['広大水球部主将', '体力勝負', '難培養性微生物'],
      links: [
      { label: '所属研究室', href: 'https://aoi-lab.net/' },
    ]
  },
];

// /** 例: 活動実績（差し替え推奨） — ※このデータ構造（dateベース）を「参考サイトのカード表示」にマッピングします */
// const achievementsData: Activity[] = [
//   {
//     id: 'a2025-bestpaper',
//     date: '2025-07-16',
//     title: '国際会議にてBest Paper (例)',
//     description: 'UIとアクセシビリティの両立に関する取り組みを発表し、評価を受けました。',
//     tags: ['award', 'paper'],
//     link: 'https://example.com/paper-2025'
//   },
//   {
//     id: 'a2025-release',
//     date: '2025-05-30',
//     title: '研究室サイトテンプレート v2 を公開',
//     description: '静的サイト + 大学ドメイン申請支援のテンプレを刷新。高速化とアクセシビリティを強化。',
//     tags: ['release']
//   },
//   {
//     id: 'a2024-collab',
//     date: '2024-12-10',
//     title: '学内プロジェクトでの共同研究サイトを構築',
//     description: '3研究室の横断プロジェクトの広報サイトを整備し、情報更新のワークフローを標準化。',
//     tags: ['collab']
//   },
//   {
//     id: 'a2024-media',
//     date: '2024-09-01',
//     title: '教育系メディアに事例掲載 (例)',
//     description: '「学生主体で進める研究室サイト運用」の特集記事に採用。',
//     tags: ['media'],
//     link: 'https://example.com/media-2024'
//   },
//   {
//     id: 'a2024-grant',
//     date: '2024-04-15',
//     title: '学内助成による情報発信支援を開始',
//     description: '研究成果公開のデータ整備・OGP最適化の取り組みを拡大。',
//     tags: ['grant']
//   }
// ];

/* =========================
   レイアウト/各セクション
========================= */
/** Header */
const HeaderBar: React.FC = () => {
  // ▼ モバイル用メニュー開閉
  const [open, setOpen] = React.useState(false);
  const menuId = 'mobile-menu';

  // 背景スクロール抑止 & Escapeで閉じる
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeAndScroll = () => {
    setOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        {/* ▼ モバイルでは文字を出さず、マークのみ表示 */}
        <a href="/" className="brand" aria-label="トップへ">
          <img src="/headerlogo.png" alt="LabPage" className="brand-logo" />
          <span className="brand-text">LabPage</span>
        </a>

        {/* PC/タブレット: 通常ナビ */}
        <nav className="nav" aria-label="メインナビゲーション">
          <a href="#service"><b>サービス</b></a>
          <a href="#flow"><b>導入フロー</b></a>
          <a href="#demos"><b>作成例</b></a>
          <a href="#contact"><b>作成依頼</b></a>
          <a href="#faq"><b>よくある質問</b></a>
          <a href="#team"><b>運営メンバー</b></a>
        </nav>

        {/* スマホ: ハンバーガー（テキスト無し） */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`icon-burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
      </div>

      {/* スマホ用のフルスクリーンメニュー（大きめのタップ領域） */}
      <div
        id={menuId}
        className={`mobile-sheet ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="サイト内メニュー"
      >
        <div className="mobile-sheet-inner container">
          <a href="#service" onClick={closeAndScroll}>サービス</a>
          <a href="#flow" onClick={closeAndScroll}>導入フロー</a>
          <a href="#demos" onClick={closeAndScroll}>作成例</a>
          <a href="#contact" onClick={closeAndScroll}>作成依頼</a>
          <a href="#faq" onClick={closeAndScroll}>よくある質問</a>
          <a href="#team" onClick={closeAndScroll}>運営メンバー</a>
        </div>
      </div>
    </header>
  );
};

/** Hero（製品の要約） */
const HeroBlock: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <h1 id="hero-heading">研究室ホームページを最短即日公開</h1>
        <h4 className="hero-sub">
          {`LabPageは広島大学出身者が運営するサービスで、母校への貢献活動として無料でサービスを提供しています。
業務が忙しくホームページに時間を割けないという研究室でもご安心ください。
LabPageなら、必要な情報を最小限の聞き取りで迅速にサイトを作成し、研究成果やメンバー紹介、学部生へ向けた発信などを安全かつスピーディに発信できます。`}
        </h4>
        <div className="hero-media">
          <img
            className="hero-img"
            src="toppage3.png"
            alt="LabPage トップページのプレビュー画像"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

/** 個別デモカード */
const DemoCard: React.FC<{ demo: Demo }> = ({ demo }) => {
  return (
    <article className="card">
      <img
        src={demo.imageUrl}
        alt={`${demo.title}のプレビュー画像`}
        loading="lazy"
        width={1200}
        height={630}
      />
      <div className="card-body">
        <h3 className="card-title">{demo.title}</h3>
        <p className="card-desc">{demo.description}</p>
        <a
          className="btn"
          href={demo.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${demo.title} のデモを新しいタブで開く`}
          title="新しいタブで開く"
        >
         <b>実際のサイトを見る</b>  <span className="ext" aria-hidden="true">↗</span>
          <span className="visually-hidden">（新しいタブ）</span>
        </a>
      </div>
    </article>
  );
};

/** デモグリッド（6つのデモへの入口） */
const DemoGrid: React.FC = () => {
  return (
    <section id="demos" className="section" aria-labelledby="demos-heading">
      <div className="container">
        <h2 id="demos-heading">作成例</h2>
        <h4 className="section-lead">
        下記の作成例をベースに、研究室の特色に合わせたカスタマイズが可能です。(その他のデザインも１から対応可能です。)
        </h4>
        <div className="grid">
          {demoData.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </div>
    </section>
  );
};

/** サービス紹介（右カラム：squareで image1.png を表示） */
const ServiceIntro: React.FC = () => {
  return (
    <section id="service" className="promo" aria-labelledby="service-heading">
      <div className="container promo-inner">
        <div className="promo-copy">
          <h3 >研究室向けホームページ作成サービス</h3>
          <h2 id="service-heading">
            初期費用・管理費用も<span className="free-badge">完全無料</span>。<br />
            依頼から<span className="price-inline"></span>最短30分で公開可能。
          </h2>
          <ul className="bullets" aria-label="主な特長">
            <li><strong>高速展開：</strong>ベーステンプレート使用の場合は依頼から最短30分で公開可能</li>
            <li><strong>更新対応：</strong>情報の更新依頼はメールで対応受付</li>
            <li><strong>安心運用：</strong>広島大学の学生/出身者が運営</li>
            <li><strong>完全無料：</strong>固定ドメインを使用する場合は料金発生箇所がゼロ</li>
            <li><strong>拡張可能：</strong>論文一覧・メンバー・ニュース・イベントなど柔軟に導入可能</li>
            <li><strong>大学ドメインを使用可能：</strong>ac.jpドメインでホームページを公開可能<sup>*1</sup></li>
          </ul>
          
          <div className="kpis" role="list" aria-label="ポイント">
            <div className="kpi" role="listitem">
              <div className="kpi-num">0円</div>
              <div className="kpi-label">初期/管理コスト</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">0円/回</div>
              <div className="kpi-label">データ更新費用</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">0円<sup>*1</sup></div>
              <div className="kpi-label">ホスティング</div>
            </div>
          </div>
          <h4 className="note"><sup>*1</sup>大学のドメインを使用する場合、広島大学のホスティングサービスの申請が必要です(300円/月)。</h4>
          <h4 className="note"><sup>*1</sup>固定ドメインを使用する場合は無料です。</h4>

        </div>

        {/* ▼ 右カラム：square で image1.png を表示（旧 pricing セクションは削除） */}
        <div className="promo-visual" aria-label="サービスイメージ">
          <div className="square">
            <img
              src="image2.png"
              alt="サービスイメージ（image1.png）"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/** メンバー紹介 */
const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <article className="member-card">
      <img
        className="avatar"
        src={member.avatarUrl}
        alt={`${member.name}の顔写真`}
        loading="lazy"
        width={160}
        height={160}
      />
      <div className="member-body">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
        {member.expertise?.length > 0 && (
          <ul className="chips" aria-label="専門分野">
            {member.expertise.map((t) => (
              <li className="chip" key={t}>{t}</li>
            ))}
          </ul>
        )}
        {member.links?.length ? (
          <div className="member-links" aria-label="関連リンク">
            {member.links.map((l) => (
              <a
                key={l.href}
                className="member-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`${l.label} を新しいタブで開く`}
                aria-label={`${member.name}の${l.label}を新しいタブで開く`}
              >
                {l.label} <span className="ext" aria-hidden="true">↗</span>
                <span className="visually-hidden">（新しいタブ）</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section team" aria-labelledby="team-heading">
      <div className="container">
        <h2 id="team-heading">メンバー紹介</h2>
        <p className="section-lead">
          LabPageの構築・運用を支えるチームです。
        </p>
        <div className="member-grid" role="list" aria-label="メンバー一覧">
          {members.map((m) => (
            <div role="listitem" key={m.id}>
              <MemberCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================
   活動実績（カードグリッド版）
========================================================== */
// const yearFromDate = (iso: string) => {
//   const d = new Date(iso);
//   return Number.isNaN(d.getTime()) ? '' : String(d.getFullYear());
// };

// const AchievementsSection: React.FC = () => {
//   // 新しい順に並べ替え（date の降順）
//   const data = [...achievementsData].sort((a, b) => (a.date < b.date ? 1 : -1));

//   return (
//     <section id="achievements" className="section achievements" aria-labelledby="achievements-heading">
//       <div className="container">
//         <h2 id="achievements-heading">活動実績</h2>
//         <p className="section-lead">
//           受賞、共同研究、OSS、メディア掲載など、チームの主な実績をご紹介します。
//         </p>

//         <div className="achv-grid">
//           {data.map((item) => {
//             const year = yearFromDate(item.date);
//             // サムネイルがない場合はタイトルでプレースホルダー生成
//             const thumb = makePlaceholder(item.title);
//             return (
//               <article className="achv-card" key={item.id}>
//                 <img
//                   className="achv-thumb"
//                   src={thumb}
//                   alt={`${item.title}のイメージ`}
//                   width={800}
//                   height={420}
//                   loading="lazy"
//                 />
//                 <div className="achv-body">
//                   {year && <div className="achv-year" aria-label="年度">{year}</div>}
//                   <h3 className="achv-title">{item.title}</h3>
//                   {item.description && <p className="achv-desc">{item.description}</p>}
//                   {(item.tags?.length ?? 0) > 0 && (
//                     <ul className="chip-list" aria-label="タグ">
//                       {item.tags!.map((t) => (
//                         <li key={t} className="chip">{t}</li>
//                       ))}
//                     </ul>
//                   )}
//                   {item.link && (
//                     <a
//                       className="btn btn-sm"
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`${item.title} の詳細を新しいタブで開く`}
//                       title="新しいタブで開く"
//                     >
//                       詳細を見る <span className="ext" aria-hidden="true">↗</span>
//                       <span className="visually-hidden">（新しいタブ）</span>
//                     </a>
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

/** 導入フロー（要点を短く明示） */
const IntroFlow: React.FC = () => {
  return (
    <section id="flow" className="flow" aria-labelledby="flow-heading">
      <div className="container">
        <h2 id="flow-heading">導入フロー</h2>
        <ol className="flow-steps" aria-label="導入手順">
          <li>
            <h3>1. 無料相談</h3>
            <p>要件のヒアリング(メール)</p>
          </li>
          <li>
            <h3>2. 情報提供</h3>
            <p>ロゴ/研究内容/メンバー/論文等をご共有</p>
          </li>
          <li>
            <h3>3. ドメイン取得サポート</h3>
            <p>広大公式ドメイン取得のサポート</p>
          </li>
          <li>
            <h3>4. 公開</h3>
            <p>ヒアリング結果をもとに最短即日公開</p>
          </li>
          <li>
            <h3>5. 運用（無料）</h3>
            <p>日常の運用コストは0円<sup>*2</sup></p>
          </li>
          <li>
            <h3>6. 更新（無料）</h3>
            <p>ニュース/メンバー/論文の追加・修正</p>
          </li>
        </ol>
        <p className="flow-note"><sup>*2</sup>広島大学公式のホスティングサービス利用料（300円/月）のみかかります。固定ドメインの場合は、無料で対応可能です。</p>
      </div>
    </section>
  );
};

/** 依頼および連絡先（導入フローの下に追加） */
const ContactSection: React.FC = () => {
  const email = 'm242128@hiroshima-u.ac.jp';
  const subject = '【広島大学】研究室ホームページ作成の相談に関して';
  const bodyStart = `LabPage担当者様、広島大学の＿＿（お名前）です。
研究室ホームページの作成について、相談を希望します。
以下、簡単な概要と希望事項です。

・研究室名：
・公開希望時期：
・既存サイトの有無：
・掲載したい主な内容:

ご確認よろしくお願いします。`;

  const [copiedKey, setCopiedKey] = React.useState<null | 'email' | 'subject' | 'body'>(null);

  const copy = async (text: string, key: 'email' | 'subject' | 'body') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1600);
    } catch {
      // フォールバック
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(null), 1600);
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  // ▼ 追加: 本文 textarea を内容に合わせて自動リサイズ
  const bodyRef = React.useRef<HTMLTextAreaElement | null>(null);
  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    // 初期描画後に高さを内容にフィット
    el.style.height = '0px';
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">依頼および連絡先</h2>
        <h4 className="section-lead">下記メールアドレス宛にご連絡ください。ワンクリックでコピーできます。</h4>

        {/* メールアドレス行 */}
        <div className="copy-row">
          <div className="copy-col">
            <div className="copy-label">メールアドレス</div>
            <div className="copy-field">
              <code className="email-code">{email}</code>
              <button
                className="btn btn-sm copy-btn"
                onClick={() => copy(email, 'email')}
                aria-label="メールアドレスをコピー"
              >
                <b>{copiedKey === 'email' ? 'コピー済み ✓' : 'コピー'}</b>
              </button>
            </div>
          </div>
        </div>

        <h4 className="copy-helper">メール送信の手間を減らすため件名と文の書き始めをコピーしてご活用ください。</h4>

        {/* 件名テンプレ */}
        <div className="copy-row">
          <div className="copy-col">
            <div className="copy-label">件名（例）</div>
            <div className="copy-field">
              <input
                className="copy-input"
                type="text"
                readOnly
                value={subject}
                aria-label="件名テンプレート"
                onFocus={(e) => e.currentTarget.select()}
              />
              <button
                className="btn btn-sm copy-btn"
                onClick={() => copy(subject, 'subject')}
                aria-label="件名をコピー"
              >
                {copiedKey === 'subject' ? 'コピー済み ✓' : 'コピー'}
              </button>
            </div>
          </div>
        </div>

        {/* 本文書き始めテンプレ */}
        <div className="copy-row">
          <div className="copy-col">
            <div className="copy-label">本文書き始め（例）</div>
            <div className="copy-field">
              <textarea
                ref={bodyRef}
                className="copy-input copy-area"
                readOnly
                value={bodyStart}
                aria-label="本文書き始めテンプレート"
                onFocus={(e) => e.currentTarget.select()}
              />
              <button
                className="btn btn-sm copy-btn"
                onClick={() => copy(bodyStart, 'body')}
                aria-label="本文書き始めをコピー"
              >
                {copiedKey === 'body' ? 'コピー済み ✓' : 'コピー'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** FAQ（簡易） */
const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading">よくある質問</h2>
        <div className="faq-list">
          <details>
            <summary>Q: なぜ無料なのですか? </summary>
            <p>A: 広島大学工学部出身者が主催しており、母校への貢献活動の一環として行っています。さらに、ホームページ作成に数十万円という法外な値段を請求している会社が多く、そのような状況を変える必要があると思ったからです。</p>
          </details>
          <details>
            <summary>Q: サーバーなども用意する必要がありませんか？</summary>
            <p>A: こちらでPaaSを基盤にした展開インフラを構築しているため不要です。CDN経由でサイトを最速で配信できます。</p>
          </details>
          <details>
            <summary>Q: 繁忙期で公開が遅れることはありますか？</summary>
            <p>A: 学会発表前や実験データが足りない場合は実験している可能性があります。その場合でも最も遅くとも１週間以内には対応可能です。</p>
          </details>
          <details>
            <summary>Q: 更新依頼はどのように行えば良いですか？</summary>
            <p>A: メールで情報をいただければ、最短30分以内に更新します。少なくとも数日以内には更新できます。</p>
          </details>
          <details>
            <summary>Q: 更新回数に制限はありますか？</summary>
            <p>A: 制限はありません。研究成果やメンバー紹介など、必要に応じてご依頼ください。</p>
          </details>
          <details>
            <summary>Q: 本当に無料で使えるのですか？</summary>
            <p>A: 初期費用・管理費用から開発費用まですべて無料です。大学公式ドメインで公開する場合は、利用時のホスティング費用（300円/月）がかかりますが、本サービスについては料金は一切徴収いたしません。</p>
          </details>
          <details>
            <summary>Q: 大学ドメインを使わない場合はどうしますか？</summary>
            <p>A: こちらで固定ドメインを用意し、<b>任意の名前.labpage.info</b>というサイトURLになります。(この場合ドメインは無料です。)</p>
          </details>
          <details>
            <summary>Q: サイトのセキュリティ対策はどうなっていますか？</summary>
            <p>A: SSL証明書を導入し、HTTPSで暗号化通信を行います。大学公式ドメインでのホスティングや独自ドメインにも対応可能です。</p>
          </details>
          <details>
            <summary>Q: 既存サイトから移行できますか？</summary>
            <p>A: 現行サイトを確認のうえ、情報設計を整理して静的サイトへ移行します。リダイレクト設計も対応可能です（こちらも無料です）。ただし、wordpressなどを使われている場合は、移行できない可能性があります。</p>
          </details>
          <details>
            <summary>Q: ベーステンプレート以外の任意のデザインも作成可能ですか？</summary>
            <p>A: はい。仕様をメールでお聞きして、数回のやり取りでご希望のデザインのページを公開します。</p>
          </details>
          <details>
            <summary>Q: カスタムフォームなどを掲載した動的サイトも可能ですか？</summary>
            <p>A: 基本的には静的サイトがやりやすいですが、どうしてもの場合は相談ください。</p>
          </details>
          <details>
            <summary>Q: 公開までどれくらい時間がかかりますか？</summary>
            <p>A: 必要な情報が揃えば依頼から最短30分以内に公開できます。遅くとも数日以内に対応可能なため、新学期や研究室配属時期直前にも研究室PRにご活用いただけます。。</p>
          </details>
          <details>
            <summary>Q: いつまで更新対応などできますか？</summary>
            <p>A: 代表池田は本学の博士課程に進む予定のため、少なくとも向こう４年はサポート可能です。その後も、引き継ぎなど誠意を持って行います。</p>
          </details>
          <details>
            <summary>Q: 学会やイベント専用など複数サイトの作成も依頼できますか？</summary>
            <p>A: 可能です。その場合は詳しい仕様などをご相談ください。</p>
          </details>
          <details>
            <summary>Q: オンライン完結で行えますか?</summary>
            <p>A: はい、メールのやり取りで全て完結できます。必要に応じてZoomなどを通して詳しいお話をお聞きすることも可能です。</p>
          </details>
        </div>
      </div>
    </section>
  );
};

/** Footer */
const FooterBar: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>© {year} LabPage. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

/** 追従フッターCTA（常時表示のお問い合わせボタン） */
const StickyFooterCTA: React.FC = () => {
  return (
    <div className="sticky-cta" role="region" aria-label="お問い合わせ">
      <div className="container inner">
        <a href="#contact" className="sticky-btn" aria-label="お問い合わせ（作成依頼）へ移動">
          お問い合わせ（作成依頼）
        </a>
      </div>
    </div>
  );
};

/* =========================
   アプリ本体
========================= */
const App: React.FC = () => {
  return (
    <>
      {/* インラインCSS（スマホ時はヘッダーの文字を非表示＆ハンバーガーに） */}
      <style>{`
        :root {
          --bg: #f9fafb;
          --text: #0f172a;
          --muted: #475569;

          /* ▼ 紫系テーマカラー */
          --primary: #7c3aed; /* Violet 600 */
          --accent: #a78bfa;  /* Violet 400 */

          --border: #e5e7eb;
          --card: #ffffff;
          --radius: 12px;
          --container: 1120px;
          --shadow-1: 0 4px 16px rgba(15, 23, 42, 0.04);
          --shadow-2: 0 8px 24px rgba(15, 23, 42, 0.08);

          /* 追従フッターの高さ（約半分に） */
          --stickybar-h: 32px;

          /* ヘッダー高さ（スマホではさらに低く） */
          --header-h: 64px;

          /* 可変サイズ */
          --brand-fz: 22px;
          --nav-fz: 16px;

          color-scheme: light;
        }

        /* 狭い画面の最適化：ヘッダーは低く、文字は非表示に */
        @media (max-width: 760px) {
          :root {
            --header-h: 56px;    /* 以前より低くしてコンテンツを広く */
            --brand-fz: 16px;    /* モバイルでもブランドテキストを表示 */
            --nav-fz: 15px;
            --stickybar-h: 28px; /* モバイルの追従フッター高さ（約半分に） */
          }
        }

        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; }
        html {
          scroll-behavior: smooth;
          scroll-padding-top: var(--header-h);
          /* Hero背景と同じグラデーションを適用し、オーバースクロール時に背景の断切れが見えないようにする */
          background:
            radial-gradient(1400px 600px at 50% -220px, #ede9fe 0, transparent 70%),
            linear-gradient(#ffffff, var(--bg) 70%);
        }
        /* 初期表示をやや大きめに（デスクトップ想定） */
        @media (min-width: 960px) {
          html { zoom: 1.5; }
        }
        body {
          margin: 0;
          /* html に適用した Hero と同じグラデーションを透過で見せる */
          background: transparent;
          color: var(--text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans JP",
            "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Yu Gothic", "メイリオ", Arial, sans-serif;
          padding-bottom: calc(var(--stickybar-h) + env(safe-area-inset-bottom, 0px));
        }
        main { padding-top: var(--header-h); } /* 固定ヘッダー分の余白 */
        a { color: var(--primary); text-decoration: none; }
        a:hover { opacity: 0.92; }
        a:focus-visible, button:focus-visible, summary:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 8px;
        }

        .container { width: min(100%, var(--container)); margin: 0 auto; padding: 0 20px; }

        /* Header（常時固定） */
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: color-mix(in oklab, white 0%, transparent);
          backdrop-filter: saturate(180%) blur(6px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
        }
        .header-inner {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0;
          min-height: var(--header-h);
        }

        /* ブランドロゴ */
        .brand {
          display: inline-flex;
          align-items: center;
        }
        .brand-logo { height: 40px; }
        .brand-text {
          margin-left: 8px;
          font-size: var(--brand-fz);
          color: #000;
          font-weight: 600;
        }
        @media (max-width: 760px) {
          .brand-logo { height: 32px; }
          .brand-text { display: inline; }
        }

        /* デスクトップ用ナビ（スマホでは非表示） */
        .nav {
          margin-left: auto; display: flex; gap: 14px; row-gap: 6px; flex-wrap: wrap;
        }
        .nav a {
          font-size: var(--nav-fz);
          color: var(--muted);
          padding: 8px 6px;
          line-height: 1.2;
          border-radius: 8px;
        }
        .nav a:hover { color: var(--text); }
        @media (max-width: 760px) {
          .nav { display: none; }                 /* ← スマホではヘッダーのナビ文字を隠す */
        }

        /* モバイルメニューボタン（アイコンのみ） */
        .mobile-menu-btn {
          margin-left: auto;
          display: none; /* レスポンシブでも表示しない */
          border: 1px solid var(--border);
          background: #fff;
          border-radius: 10px;
          padding: 8px 10px;
          cursor: pointer;
          box-shadow: var(--shadow-1);
        }
        @media (max-width: 760px) {
          .mobile-menu-btn { display: none; }
        }
        .icon-burger, .icon-burger::before, .icon-burger::after {
          display: block;
          width: 20px; height: 2px;
          background: var(--text);
          border-radius: 2px;
          position: relative;
          transition: transform .2s ease, opacity .2s ease;
          content: "";
        }
        .icon-burger::before, .icon-burger::after { position: absolute; left: 0; }
        .icon-burger::before { top: -6px; }
        .icon-burger::after  { top:  6px; }
        .icon-burger.is-open { background: transparent; }
        .icon-burger.is-open::before { transform: translateY(6px) rotate(45deg); }
        .icon-burger.is-open::after  { transform: translateY(-6px) rotate(-45deg); }

        /* モバイル用フルスクリーンメニュー */
        .mobile-sheet {
          position: fixed;
          top: var(--header-h); left: 0; right: 0; bottom: 0;
          background: #ffffff;
          border-top: 1px solid var(--border);
          transform: translateY(6px);
          opacity: 0;
          pointer-events: none;
          transition: transform .2s ease, opacity .2s ease;
          z-index: 99;
        }
        .mobile-sheet.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-sheet-inner {
          display: grid;
          padding: 16px 20px 24px;
          gap: 10px;
        }
        .mobile-sheet-inner a {
          display: block;
          padding: 14px 12px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: #fff;
          color: var(--text);
          font-size: 16px;
          box-shadow: var(--shadow-1);
        }
        .mobile-sheet-inner a:active { transform: translateY(1px); }

        /* Hero */
        .hero {
          padding: 72px 0 56px;
          /* ルート(html)に敷いたグラデーションを透過して見せ、連続性を担保 */
          background: transparent;
          border-bottom: 1px solid var(--border);
        }
        .hero h1 { font-size: clamp(28px, 4vw, 40px); margin: 0 0 12px; letter-spacing: .02em; }
        .hero-sub { max-width: 840px; margin: 0; color: var(--muted); font-size: 16px; white-space: pre-line; }
        .hero-media { margin-top: 16px; }
        .hero-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-1);
          background: #f5f3ff;
          filter: blur(0px); 
        }

        /* Section & Grid */
        .section { padding: 40px 0 56px; }
        .section h2 { font-size: 22px; margin: 0 0 10px; letter-spacing: .02em; }
        .section-lead { margin: 0 0 16px; color: var(--muted); }
        .grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 680px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        /* Card */
        .card {
          display: flex; flex-direction: column;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-1);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: var(--shadow-2); }
        .card img { width: 100%; height: 180px; object-fit: cover; background: #eef2f7; }
        .card-body { padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 10px; }
        .card-title { font-size: 16px; margin: 0; }
        .card-desc { margin: 0; color: var(--muted); font-size: 14px; }

        .btn {
          align-self: flex-start;
          margin-top: 6px;
          font-size: 14px;
          border: 1px solid var(--border);
          padding: 8px 12px;
          border-radius: 10px;
          background: #fff;
          color: var(--primary);
          transition: background .2s, border-color .2s, color .2s, transform .1s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .btn:hover { border-color: var(--primary); background: #f5f3ff; }
        .btn:active { transform: translateY(1px); }
        .btn-sm { font-size: 13px; padding: 6px 10px; border-radius: 8px; }
        .ext { font-size: 1.05em; line-height: 1; }

        /* より強調したデモ閲覧ボタン（カード内のみ適用） */
        .card .btn {
          border-width: 2px;
          border-color: #0f172a; /* 黒に近い濃い文字色 */
          color: #0f172a;        /* テキストを黒系に */
          font-weight: 700;      /* 視認性アップ */
          padding: 10px 14px;    /* やや大きめに */
        }
        .card .btn:hover {
          background: #f3f4f6;   /* 薄いグレーのホバー */
          border-color: #0f172a;
          color: #0b1220;        /* さらにわずかに濃く */
        }

        /* CTA */
        .cta-group { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-top: 12px; }
        .btn-primary, .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px; padding: 10px 14px;
          border-radius: 10px; text-decoration: none; transition: background .2s, border-color .2s, color .2s, transform .1s;
        }
        .btn-primary { background: var(--primary); color: #fff; border: 1px solid var(--primary); }
        .btn-primary:hover { filter: brightness(0.95); }
        .btn-primary:active { transform: translateY(1px); }
        .btn-ghost { background: #fff; color: var(--primary); border: 1px solid var(--border); }
        .btn-ghost:hover { border-color: var(--primary); background: #f5f3ff; }
        .btn-ghost:active { transform: translateY(1px); }

        /* Promo (サービス紹介) */
        .promo {
          padding: 56px 0;
          background:
            radial-gradient(1200px 420px at 90% -120px, #f3e8ff 0, transparent 60%),
            linear-gradient(#ffffff, #f8fafc);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .promo-inner { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 960px) { .promo-inner { grid-template-columns: 1.2fr .8fr; } }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--muted); letter-spacing: .06em; text-transform: uppercase;
        }
        .eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .promo h2 { margin: 8px 0 10px; font-size: clamp(22px, 3.6vw, 30px); letter-spacing: .02em; }
        .free-badge {
          display: inline-block; margin-left: 6px; padding: 2px 8px; font-size: .9em;
          border-radius: 999px; border: 1px solid #e9d5ff; background: #f5f3ff; color: var(--text);
        }
        .price-inline { font-weight: 800; }
        .lead { color: var(--muted); margin: 0 0 12px; max-width: 720px; }
        .bullets { margin: 12px 0 8px; padding-left: 18px; }
        .bullets li { margin: 6px 0; }
        .note { color: var(--muted); font-size: 12px; margin: 6px 0 16px; }

        .kpis { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; max-width: 640px; }
        @media (max-width: 520px) { .kpis { grid-template-columns: 1fr 1fr; } }
        .kpi { border: 1px dashed var(--border); border-radius: 12px; padding: 10px; background: #fff; }
        .kpi-num { font-weight: 800; font-size: 18px; line-height: 1.2; }
        .kpi-label { color: var(--muted); font-size: 12px; }

        /* 右カラムの square 画像 */
        .promo-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .square {
          width: 100%;
          max-width: 520px;
          aspect-ratio: 1 / 1;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          background: #f5f3ff;
          box-shadow: var(--shadow-1);
        }
        .square img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Team */
        .team .section-lead { max-width: 760px; }
        .member-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 780px) { .member-grid { grid-template-columns: 1fr 1fr; } }
        .member-card {
          display: grid; grid-template-columns: 72px 1fr; gap: 12px;
          background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 12px; box-shadow: var(--shadow-1);
          align-items: start;
        }
        @media (min-width: 520px) { .member-card { grid-template-columns: 96px 1fr; } }
        .avatar {
          width: 72px; height: 72px; border-radius: 50%; object-fit: cover; background: #eef2f7;
          border: 1px solid var(--border);
        }
        @media (min-width: 520px) { .avatar { width: 96px; height: 96px; } }
        .member-body { display: grid; gap: 6px; }
        .member-name { margin: 0; font-size: 16px; }
        .member-role { margin: 0; font-size: 13px; color: var(--muted); }
        .member-bio { margin: 4px 0 0; font-size: 14px; color: var(--muted); }

        .member-links {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;
        }
        .member-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #f8fafc;
          border: 1px solid var(--border);
          color: var(--text);
          text-decoration: none;
          box-shadow: var(--shadow-1);
          transition: background .2s, border-color .2s, transform .1s;
        }
        .member-link:hover { border-color: var(--primary); background: #faf5ff; }
        .member-link:active { transform: translateY(1px); }
        .member-link .ext { font-size: 1em; line-height: 1; }

        .chips {
          display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0 0; padding: 0;
          list-style: none;
        }
        .chip {
          font-size: 12px; padding: 4px 8px; border: 1px solid var(--border);
          border-radius: 999px; background: #fff; color: var(--muted);
        }

        /* Achievements（カードグリッドUI） */
        .achievements .section-lead { max-width: 760px; }
        .achv-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 720px) { .achv-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1120px) { .achv-grid { grid-template-columns: repeat(3, 1fr); } }
        .achv-card {
          background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
          overflow: hidden; box-shadow: var(--shadow-1); display: flex; flex-direction: column;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .achv-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-2); }
        .achv-thumb { width: 100%; height: 140px; object-fit: cover; background: #eef2f7; }
        .achv-body { padding: 12px; display: flex; flex-direction: column; gap: 8px; }
        .achv-year {
          display: inline-flex; align-self: flex-start; padding: 2px 8px; font-size: 12px;
          border: 1px solid var(--border); border-radius: 999px; background: #fff; color: var(--muted);
        }
        .achv-title { margin: 0; font-size: 16px; letter-spacing: .01em; }
        .achv-desc { margin: 0; color: var(--muted); font-size: 13px; }

        /* Flow */
        .flow { padding: 36px 0 44px; }
        .flow h2 { margin: 0 0 12px; font-size: 22px; }
        .flow-steps {
          counter-reset: step;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        @media (max-width: 900px) { .flow-steps { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 580px) { .flow-steps { grid-template-columns: 1fr; } }
        .flow-steps li {
          list-style: none; background: var(--card); border: 1px solid var(--border);
          border-radius: 12px; padding: 12px; box-shadow: var(--shadow-1);
        }
        .flow-steps h3 { margin: 0 0 6px; font-size: 16px; }
        .flow-steps p { margin: 0; color: var(--muted); font-size: 14px; }
        .flow-note { color: var(--muted); font-size: 12px; margin-top: 10px; }

        /* Contact */
        .contact-section .copy-row {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px;
          box-shadow: var(--shadow-1);
        }
        .contact-section .copy-row + .copy-row { margin-top: 10px; }
        .contact-section .copy-col { display: grid; gap: 6px; }
        .contact-section .copy-label { font-size: 12px; color: var(--muted); }
        .contact-section .copy-field {
          display: flex;
          gap: 10px;
          align-items: center; /* 垂直中央で整列（単一行の行に最適） */
          flex-wrap: wrap;
        }
        .contact-section .copy-field > * { align-self: center; }
        /* テキストエリアを含む行は上揃えにして自然に */
        .contact-section .copy-field:has(textarea) {
          align-items: flex-start;
        }
        .contact-section .copy-field:has(textarea) > * { align-self: flex-start; }
        /* テキストエリアは幅を保ちつつ高さに合わせる */
        .contact-section .copy-area {
          align-self: stretch;
        }
        /* 高さを統一して縦位置ズレを解消 */
        .contact-section .copy-btn {
          height: 40px;
          padding: 0 12px; /* 高さ固定時は上下パディングを0に */
          display: inline-flex;
          align-items: center;
          line-height: 1;
          font-size: 14px; /* 入力やコードと揃える */
          margin-top: -2px; /* 最終1-2pxのズレを吸収 */
        }
        .contact-section input.copy-input {
          height: 40px;
          line-height: normal; /* ブラウザ標準に合わせて中央に */
          font-size: 14px;
        }
        .contact-section .email-code {
          height: 40px;
          display: inline-flex;
          align-items: center;
          line-height: 1;
          font-size: 14px;
        }
        .contact-section .email-code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          background: #f8fafc; border: 1px dashed var(--border); border-radius: 8px; padding: 6px 10px;
          color: var(--text);
        }
        .contact-section .copy-input {
          flex: 1 1 260px;
          width: 100%;
          font-size: 14px;
          padding: 10px;
          border: 1px dashed var(--border);
          border-radius: 8px;
          background: #fff;
          color: var(--text);
        }
        .contact-section .copy-area {
          overflow: hidden;
          resize: vertical;
        }
        .contact-section .copy-btn {
          flex: 0 0 auto;
          min-width: 92px;
          white-space: nowrap;
        }
        .contact-section .copy-helper { margin: 10px 0; color: var(--muted); font-size: 13px; }

        /* FAQ */
        .faq-section { padding: 10px 0 24px; }
        .faq-section h2 { font-size: 22px; margin: 0 0 8px; }
        .faq-list details {
          border: 1px solid var(--border); border-radius: 10px; padding: 10px 12px; background: #fff;
        }
        .faq-list details + details { margin-top: 8px; }
        .faq-list summary { cursor: pointer; font-weight: 600; }
        .faq-list p { margin: 8px 0 0; color: var(--muted); }

        /* セクション到達時のアンカーずれ対策 */
        .section, .promo, .flow, .faq-section { scroll-margin-top: calc(var(--header-h) + 10px); }

        /* Footer */
        .footer { border-top: 1px solid var(--border); padding: 28px 0; color: var(--muted); font-size: 13px; background: #fff; }

        /* 追従フッターCTA */
        .sticky-cta {
          position: fixed; left: 0; right: 0; bottom: 0;
          min-height: var(--stickybar-h);
          background: #ffffff99; 
          backdrop-filter:  blur(6px);
          border-top: 1px solid var(--border);
          /* バーの高さを抑えるため上下パディングも縮小 */
          padding: 5px max(16px, env(safe-area-inset-left, 0px)) calc(5px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-right, 0px));
          z-index: 90;
        }
        .sticky-cta .inner { display: flex; align-items: center; justify-content: center; gap: 12px; }
        .sticky-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--primary);
          color: #fff;
          border: 1px solid var(--primary);
          /* ボタンサイズも約半分に */
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 12px;
          box-shadow: var(--shadow-1);
        }
        .sticky-btn:hover { filter: brightness(0.95); text-decoration: none; }
        .sticky-btn:active { transform: translateY(1px); }

        /* Utility */
        .chip-list { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
        .visually-hidden {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
        }
      `}</style>
      <HeaderBar />
      <main>
        <HeroBlock />
        <ServiceIntro />
        <IntroFlow />
        <DemoGrid />
        <ContactSection />
        <FAQ />
        <TeamSection />
        {/* <AchievementsSection /> */}
      </main>
      <StickyFooterCTA />
      <FooterBar />
    </>
  );
};

export default App;
