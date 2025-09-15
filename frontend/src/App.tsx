import React from 'react';

// アクセストラッキング用のヘルパー
function postTracker(name: string) {
  try {
    const url = 'https://ikeda042.homes/api/v1/time_tracker';
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const data = new Blob([JSON.stringify({ name })], { type: 'application/json' });
      navigator.sendBeacon(url, data);
      return;
    }
    fetch(url, {
      method: 'POST',
      headers: { accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // 何もしない
  }
}

/* =========================
   型定義
========================= */
type CaseItem = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  price: string;
  imageDataUrl: string;
  notes?: string;
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
const makePlaceholder = (label: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#dbeafe'/>
      <stop offset='1' stop-color='#fef3c7'/>
    </linearGradient>
    <linearGradient id='g2' x1='0' y1='1' x2='1' y2='0'>
      <stop offset='0' stop-color='#e2e8f0' stop-opacity='.35'/>
      <stop offset='1' stop-color='#94a3b8' stop-opacity='.35'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='630' fill='url(#g)'/>
  <circle cx='980' cy='-60' r='300' fill='url(#g2)'/>
  <circle cx='-40' cy='580' r='220' fill='url(#g2)'/>
  <g fill='#0f172a' font-family='system-ui,-apple-system,Segoe UI,Roboto,Noto Sans JP,Arial' text-anchor='middle'>
    <text x='600' y='310' font-size='44' font-weight='700'>${label}</text>
    <text x='600' y='360' font-size='20' fill='#475569'>Subnet‑flow Case</text>
  </g>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

/* =========================
   データ
========================= */
const cases: CaseItem[] = [
  {
    id: 'microscope',
    title: '顕微鏡画像解析（細胞ラベリング）',
    summary: '既存の個人PC依存ワークフローをローカルAPI/GUIとして統一。',
    impact: '約60倍 高速化 / 研究員3人分の作業削減',
    price: '年額 240万円（広島大学ラボに導入）',
    imageDataUrl: makePlaceholder('Microscope Labeling'),
    notes: '資料 p.4, p.14'
  },
  {
    id: 'rubifier',
    title: '教育学部：ルビ振りローカルAPI化',
    summary: '本番サーバー負荷を大幅軽減、処理をローカルへ移送。',
    impact: '高速化&安定運用 / プロダクション負荷を大幅軽減',
    price: '月額 16.5万円',
    imageDataUrl: makePlaceholder('Ruby Annotation API'),
    notes: '資料 p.15'
  }
];

/** 例: メンバー情報（差し替え可） */
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

/* =========================
   レイアウト/各セクション
========================= */
/** Header */
const HeaderBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const menuId = 'mobile-menu';

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

  const closeAndScroll = () => setOpen(false);

  const nav = [
    { href: '#problem', label: '課題' },
    { href: '#solution', label: '解決策' },
    { href: '#results', label: '導入効果' },
    { href: '#flow', label: '導入の流れ' },
    { href: '#target', label: '対象研究室' },
    { href: '#pricing', label: '価格' },
    { href: '#tech', label: '技術体制' },
    { href: '#faq', label: 'FAQ' },
    { href: '#team', label: '運営メンバー' },
    { href: '#contact', label: '問い合わせ' },
  ];

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="トップへ">
          <img src="/labsocket.png" alt="Subnet‑flow" className="brand-logo" />
          <span className="brand-text">LabSocket</span>
        </a>

        {/* PC/タブレット: 通常ナビ */}
        <nav className="nav" aria-label="メインナビゲーション">
          {nav.map((n) => (
            <a key={n.href} href={n.href}><b>{n.label}</b></a>
          ))}
        </nav>

        {/* スマホ: ハンバーガー */}
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

      {/* モバイル用のフルスクリーンメニュー */}
      <div
        id={menuId}
        className={`mobile-sheet ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="サイト内メニュー"
      >
        <div className="mobile-sheet-inner container">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={closeAndScroll}>{n.label}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

/** Hero（価値訴求＋CTA） */
const HeroBlock: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <h1 id="hero-heading">研究の「属人化」をなくす。</h1>
        <h4 className="hero-sub">
          ラボ特化型ローカルAPI <b>「Subnet‑flow」</b> — 研究室内の解析作業をローカルサーバーに
          <b> API / GUI</b>として展開。誰でもブラウザから同じ解析を即実行できます。
          <br />
          <span className="eyebrow" style={{marginTop: 6}}>最短即日で提供。PoCから本展開まで迅速に支援。</span>
        </h4>

        <div className="cta-group" style={{marginTop: 14}}>
          <a className="btn-primary" href="#contact" aria-label="無料相談へ">無料相談／PoCのご相談</a>
          <a className="btn-ghost" href="#pricing" aria-label="価格へ">価格を見る</a>
        </div>

        <div className="hero-media">
          <img
            className="hero-img"
            src="toppage3.png"
            alt="Subnet‑flow: 研究室の解析をローカルAPI/GUIに展開するイメージ"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

/** 課題（なぜ必要か） */
const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="section" aria-labelledby="problem-heading">
      <div className="container">
        <h2 id="problem-heading">課題 — なぜ必要か</h2>
        <p className="section-lead">
          解析作業が個人や特定PCに紐づき、<b>環境構築が常にボトルネック</b>。その結果、解析が止まり、知見の共有・継承も進みません。
        </p>
        <ul className="bullets">
          <li>「あのPCで、あの人しか回せない」状態から抜け出せない</li>
          <li>バージョン差異・依存地獄で再現不能、再現性検証に時間がかかる</li>
          <li>新メンバー着任のたびにセットアップからやり直し</li>
        </ul>
      </div>
    </section>
  );
};

/** 解決策（Subnet‑flow） */
const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="promo" aria-labelledby="solution-heading">
      <div className="container promo-inner">
        <div className="promo-copy">
          <span className="eyebrow">解決策</span>
          <h2 id="solution-heading">Subnet‑flow とは</h2>
          <p className="lead">
            ローカルサーバー上に統一の解析環境を構築し、<b>API/GUI</b>として提供。
            研究室全員が<b>ブラウザから同一解析を即実行</b>でき、成果の共有・継承が容易になります。
          </p>
          <ul className="bullets" aria-label="主な特長">
            <li><b>共通環境：</b>解析モジュールをAPI化し、環境差異を吸収</li>
            <li><b>ゼロから実行：</b>PC/OSに依らずブラウザだけで利用可</li>
            <li><b>ネットワーク適合：</b>学内ネットワーク（大学ゾーンC）に合わせて展開、VPNで学外アクセス拡張</li>
            <li><b>スケール容易：</b>解析パイプラインをテンプレ化し、横展開を加速</li>
          </ul>

          <div className="kpis" role="list" aria-label="スタチャレKPI">
            <div className="kpi" role="listitem">
              <div className="kpi-num">20%+</div>
              <div className="kpi-label">研究効率 改善目標</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">30+</div>
              <div className="kpi-label">多様なラボでPoC</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">即日</div>
              <div className="kpi-label">最短提供</div>
            </div>
          </div>
        </div>

        <div className="promo-visual" aria-label="ソリューションイメージ">
          <div className="square">
            <img
              src={makePlaceholder('Unified Local API / GUI')}
              alt="統一解析環境（API/GUI）のイメージ"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/** 導入効果（実績） */
const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="section" aria-labelledby="results-heading">
      <div className="container">
        <h2 id="results-heading">導入効果（実績）</h2>
        <p className="section-lead">実際の研究現場で得られた効果の一例です。</p>
        <div className="grid">
          {cases.map((c) => (
            <article className="card" key={c.id}>
              <img
                src={c.imageDataUrl}
                alt={`${c.title}のイメージ`}
                loading="lazy"
                width={1200}
                height={630}
              />
              <div className="card-body">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.summary}</p>
                <ul className="chip-list">
                  <li className="chip"><b>{c.impact}</b></li>
                  <li className="chip">{c.price}</li>
                </ul>
                {c.notes && <p className="note" style={{marginTop: 6}}>出典：{c.notes}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/** 導入フロー（要点を短く明示） */
const IntroFlow: React.FC = () => {
  return (
    <section id="flow" className="flow" aria-labelledby="flow-heading">
      <div className="container">
        <h2 id="flow-heading">導入の流れ</h2>
        <ol className="flow-steps" aria-label="導入手順">
          <li>
            <h3>1. 課題ヒアリング／要件定義</h3>
            <p>現行フローの確認・目標設定（PoC可）</p>
          </li>
          <li>
            <h3>2. 解析モジュールのAPI化</h3>
            <p>既存スクリプト/モデルをAPI/バッチ化</p>
          </li>
          <li>
            <h3>3. ローカルサーバーに展開</h3>
            <p>学内ネットワークに適合（ゾーンC）</p>
          </li>
          <li>
            <h3>4. ブラウザUI提供</h3>
            <p>誰でも同一解析を即実行</p>
          </li>
          <li>
            <h3>5. Slackで改修対応</h3>
            <p><b>1日以内</b>のバグ/改修対応</p>
          </li>
        </ol>
        <p className="flow-note">必要に応じて大学のゾーンC＋VPNで学外アクセスも可能です。</p>
      </div>
    </section>
  );
};

/** 対象研究室 */
const TargetSection: React.FC = () => {
  return (
    <section id="target" className="section" aria-labelledby="target-heading">
      <div className="container">
        <h2 id="target-heading">対象研究室</h2>
        <p className="section-lead">
          技術支援が不足し、スクリプト化や環境構築に悩む<b>非情報系（教育・医・生物）</b>ラボ。
          特に<b>顕微鏡 × 画像処理</b>タスクで高い効果が見込めます。
        </p>
        <ul className="bullets">
          <li>既存の手元スクリプトをチームで使い回したい</li>
          <li>学生入れ替えで毎年セットアップ地獄になっている</li>
          <li>学外からも安全に使いたい（VPN）</li>
        </ul>
      </div>
    </section>
  );
};

/** 価格 */
const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="promo" aria-labelledby="pricing-heading">
      <div className="container promo-inner">
        <div className="promo-copy">
          <span className="eyebrow">価格</span>
          <h2 id="pricing-heading">10万円／月／研究室</h2>
          <p className="lead">
            ローカルサーバー用PCの準備・要件定義・現地セットアップまで含む月額プラン。
            <b>Slackで1日以内のバグ/改修対応</b>を約束します。
          </p>
          <ul className="bullets">
            <li>含まれるもの：機材セットアップ／API・UI実装／運用サポート</li>
            <li>価格根拠：研究作業員の時給・月給相場、既存クラウド費（8–11万円/月）等を勘案</li>
            <li>大学の経費手続き簡素化のため、<b>分割（月額）</b>を採用</li>
          </ul>

          <div className="kpis" role="list" aria-label="コスト例">
            <div className="kpi" role="listitem">
              <div className="kpi-num">¥25,000</div>
              <div className="kpi-label">Beelink EQ13（実コスト例）</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">¥12,000/月</div>
              <div className="kpi-label">同等クラウド相当</div>
            </div>
            <div className="kpi" role="listitem">
              <div className="kpi-num">2年</div>
              <div className="kpi-label">ローカル一括購入の利用想定</div>
            </div>
          </div>

          <p className="note" style={{marginTop: 8}}>
            ※ 記載の価格・効果は資料時点の事例・試算です。導入規模や要件により変動します。
          </p>
        </div>

        <div className="promo-visual" aria-label="価格比較イメージ">
          <div className="square">
            <img
              src={makePlaceholder('Local server ≪ Cloud')}
              alt="ローカルとクラウドのコスト・運用比較のイメージ"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/** 技術体制（AI従業員） */
const TechSection: React.FC = () => {
  return (
    <section id="tech" className="section" aria-labelledby="tech-heading">
      <div className="container">
        <h2 id="tech-heading">技術体制（AI従業員）</h2>
        <p className="section-lead">
          OpenAI／Claude／Gemini 等の<b>自律型AIエージェント群</b>を
          <b>PM — BE — FE</b>で並列連携。最短即日の提供を実現します。
        </p>
        <div className="grid">
          <article className="card">
            <img src={makePlaceholder('PM Agent')} alt="PM Agent" />
            <div className="card-body">
              <h3 className="card-title">PM Agent</h3>
              <p className="card-desc">要件定義・WBS化・仕様の差分検知でリードタイムを短縮。</p>
            </div>
          </article>
          <article className="card">
            <img src={makePlaceholder('Backend Agent')} alt="Backend Agent" />
            <div className="card-body">
              <h3 className="card-title">Backend Agent</h3>
              <p className="card-desc">API化・バッチ化・モデル推論の最適実装を担当。</p>
            </div>
          </article>
          <article className="card">
            <img src={makePlaceholder('Frontend Agent')} alt="Frontend Agent" />
            <div className="card-body">
              <h3 className="card-title">Frontend Agent</h3>
              <p className="card-desc">ブラウザUIを迅速に構築。アクセシビリティも考慮。</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

/** FAQ（Subnet‑flow版） */
const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading">よくある質問</h2>
        <div className="faq-list">
          <details>
            <summary>Q. 学外から使えますか？</summary>
            <p>A. 大学ネットワークのゾーンCにVPNを張る構成で、学外からの安全なアクセス拡張が可能です。</p>
          </details>
          <details>
            <summary>Q. クラウドと比べてどうですか？</summary>
            <p>A. 同等スペックならローカルの方が安価で、初期設定や維持も簡単です。研究データを学内から出さずに運用できます。</p>
          </details>
          <details>
            <summary>Q. どんな研究室に向いていますか？</summary>
            <p>A. 非情報系分野、特に顕微鏡×画像処理など属人化しやすいタスクに適します。</p>
          </details>
          <details>
            <summary>Q. どれくらい効率化しますか？</summary>
            <p>A. 事例では約60倍の高速化もありますが、まずはPoCで適切な目標（例：研究効率20%以上）を設定して検証します。</p>
          </details>
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
                onClick={() => {
                  if (member.name.includes('池田') && l.label === '経歴') {
                    postTracker('ikeda');
                  } else if (member.name.includes('林') && l.label === '所属研究室') {
                    postTracker('hayashi');
                  } else if (member.name.includes('鶴迫') && l.label === 'ポートフォリオ') {
                    postTracker('tsurusako');
                  }
                }}
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
        <h2 id="team-heading">運営メンバー</h2>
        <p className="section-lead">
          Subnet‑flowの構築・運用を支えるチームです。
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

/** 連絡先（CTA） */
const ContactSection: React.FC = () => {
  const email = 'm242128@hiroshima-u.ac.jp';
  const subject = '【Subnet‑flow】PoC/導入のご相談';
  const bodyStart = `Subnet‑flow 担当者様

広島大学の＿＿（お名前）です。研究室の解析業務に関するPoC/導入について相談を希望します。
以下、簡単な概要と希望事項です。

・研究室名：
・解析タスクの概要：
・既存スクリプト/環境の有無：
・学外アクセスの要否（VPN）：
・希望時期／KPI（例：研究効率20%以上）：

ご確認よろしくお願いいたします。`;

  const [copiedKey, setCopiedKey] = React.useState<null | 'email' | 'subject' | 'body'>(null);

  const copy = async (text: string, key: 'email' | 'subject' | 'body') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1600);
    } catch {
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

  const bodyRef = React.useRef<HTMLTextAreaElement | null>(null);
  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.style.height = '0px';
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">お問い合わせ / PoCのご相談</h2>
        <h4 className="section-lead">下記メールアドレス宛にご連絡ください。ワンクリックでコピーできます。</h4>

        {/* メールアドレス */}
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

        <h4 className="copy-helper">件名と本文の書き始めテンプレもご活用ください。</h4>

        {/* 件名 */}
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

        {/* 本文 */}
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

        <p className="note" style={{marginTop: 10}}>
          ※ 記載の価格・効果は資料時点の事例・試算です。導入規模や要件により変動します。
        </p>
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
        <p>© {year} Subnet‑flow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

/** 追従フッターCTA */
const StickyFooterCTA: React.FC = () => {
  return (
    <div className="sticky-cta" role="region" aria-label="お問い合わせ">
      <div className="container inner">
        <a href="#contact" className="sticky-btn" aria-label="お問い合わせ（PoCのご相談）へ移動">
          無料相談／PoCのご相談
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
      {/* インラインCSS */}
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

          --stickybar-h: 32px;
          --header-h: 64px;

          --brand-fz: 22px;
          --nav-fz: 16px;

          color-scheme: light;
        }

        @media (max-width: 760px) {
          :root {
            --header-h: 56px;
            --brand-fz: 16px;
            --nav-fz: 15px;
            --stickybar-h: 28px;
          }
        }

        * { box-sizing: border-box; }
        html, body, #root { min-height: 100%; }
        html {
          scroll-behavior: smooth;
          scroll-padding-top: var(--header-h);
          background:
            radial-gradient(1400px 600px at 50% -220px, #ede9fe 0, transparent 70%),
            linear-gradient(#ffffff, var(--bg) 70%);
        }
        @media (min-width: 960px) {
          html { zoom: 1.5; }
        }
        body {
          margin: 0;
          background: transparent;
          color: var(--text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans JP",
            "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Yu Gothic", "メイリオ", Arial, sans-serif;
          padding-bottom: calc(var(--stickybar-h) + env(safe-area-inset-bottom, 0px));
        }
        main { padding-top: var(--header-h); }
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
          z-index: 100;
        }
        .header-inner {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0;
          min-height: var(--header-h);
        }

        .brand { display: inline-flex; align-items: center; }
        .brand-logo { height: 50px; }
        .brand-text { margin-left: 8px; font-size: var(--brand-fz); color: #000; font-weight: 600; }
        @media (max-width: 760px) {
          .brand-logo { height: 32px; }
          .brand-text { display: inline; }
        }

        /* デスクトップ用ナビ */
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
        @media (max-width: 760px) { .nav { display: none; } }

        /* モバイルメニューボタン（表示を有効化） */
        .mobile-menu-btn {
          margin-left: auto;
          display: none;
          border: 1px solid var(--border);
          background: #fff;
          border-radius: 10px;
          padding: 8px 10px;
          cursor: pointer;
          box-shadow: var(--shadow-1);
        }
        @media (max-width: 760px) {
          .mobile-menu-btn { display: inline-flex; align-items: center; justify-content: center; }
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
          background: transparent;
          border-bottom: 1px solid var(--border);
        }
        .hero h1 { font-size: clamp(28px, 4vw, 40px); margin: 0 0 12px; letter-spacing: .02em; }
        .hero-sub { max-width: 840px; margin: 0; color: var(--muted); font-size: 16px; white-space: pre-line; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--muted); letter-spacing: .06em; text-transform: uppercase;
        }
        .eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .hero-media { margin-top: 16px; }
        .hero-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-1);
          background: #f5f3ff;
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

        /* 強調ボタン */
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

        /* Promo (広いセクション) */
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
        .free-badge {
          display: inline-block; margin-left: 6px; padding: 2px 8px; font-size: .9em;
          border-radius: 999px; border: 1px solid #e9d5ff; background: #f5f3ff; color: var(--text);
        }
        .lead { color: var(--muted); margin: 0 0 12px; max-width: 720px; }
        .bullets { margin: 12px 0 8px; padding-left: 18px; }
        .bullets li { margin: 6px 0; }
        .note { color: var(--muted); font-size: 12px; margin: 6px 0 16px; }

        .kpis { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; max-width: 680px; }
        @media (max-width: 520px) { .kpis { grid-template-columns: 1fr 1fr; } }
        .kpi { border: 1px dashed var(--border); border-radius: 12px; padding: 10px; background: #fff; }
        .kpi-num { font-weight: 800; font-size: 18px; line-height: 1.2; }
        .kpi-label { color: var(--muted); font-size: 12px; }

        .promo-visual { display: flex; align-items: center; justify-content: center; }
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
        .square img { width: 100%; height: 100%; object-fit: cover; display: block; }

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
          align-items: center;
          flex-wrap: wrap;
        }
        .contact-section .copy-field > * { align-self: center; }
        .contact-section .copy-field:has(textarea) { align-items: flex-start; }
        .contact-section .copy-field:has(textarea) > * { align-self: flex-start; }
        .contact-section .copy-area { align-self: stretch; }
        .contact-section .copy-btn {
          height: 40px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          line-height: 1;
          font-size: 14px;
          margin-top: -2px;
          border-width: 2px;
          border-color: #0f172a;
          color: #0f172a;
          font-weight: 700;
          background: #fff;
        }
        .contact-section .copy-btn:hover {
          background: #f3f4f6;
          border-color: #0f172a;
          color: #0b1220;
        }
        .contact-section input.copy-input {
          height: 40px;
          line-height: normal;
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
        .contact-section .copy-area { overflow: hidden; resize: vertical; }
        .contact-section .copy-btn { flex: 0 0 auto; min-width: 92px; white-space: nowrap; }
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

        /* Footer */
        .footer { border-top: 1px solid var(--border); padding: 28px 0; color: var(--muted); font-size: 13px; background: #fff; }

        /* 追従フッターCTA */
        .sticky-cta {
          position: fixed; left: 0; right: 0; bottom: 0;
          min-height: var(--stickybar-h);
          background: #ffffff99; 
          backdrop-filter: blur(6px);
          border-top: 1px solid var(--border);
          padding: 5px max(16px, env(safe-area-inset-left, 0px)) calc(5px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-right, 0px));
          z-index: 90;
        }
        .sticky-cta .inner { display: flex; align-items: center; justify-content: center; gap: 12px; }
        .sticky-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--primary);
          color: #fff;
          border: 1px solid var(--primary);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 12px;
          box-shadow: var(--shadow-1);
        }
        .sticky-btn:hover { filter: brightness(0.95); text-decoration: none; }
        .sticky-btn:active { transform: translateY(1px); }

        /* セクション到達時のアンカーずれ対策 */
        .section, .promo, .flow, .faq-section { scroll-margin-top: calc(var(--header-h) + 10px); }
      `}</style>

      <HeaderBar />
      <main>
        <HeroBlock />
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <IntroFlow />
        <TargetSection />
        <PricingSection />
        <TechSection />
        <FAQ />
        <TeamSection />
        <ContactSection />
      </main>
      <StickyFooterCTA />
      <FooterBar />
    </>
  );
};

export default App;
