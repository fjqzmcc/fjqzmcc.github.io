// ==================== MergeDoku 官网本地化 ====================
// 5 种语言：中文 / English / 日本語 / Deutsch / 한국어
// 与游戏内 i18n.js 的语言与措辞保持一致。
(function () {
  'use strict';

  var STORE_KEY = 'mcc-lang';
  var ORDER = ['zh', 'en', 'ja', 'de', 'ko'];
  var LABELS = { zh: '中文', en: 'English', ja: '日本語', de: 'Deutsch', ko: '한국어' };

  var DICT = {
    zh: {
      // ---- 导航 / 通用 ----
      'nav.home': '首页',
      'nav.privacy': '隐私政策',
      'nav.terms': '服务条款',
      'nav.support': '技术支持',
      'backHome': '← 返回首页',
      'langLabel': '语言',
      // ---- 首页 Hero ----
      'badge': '数独 × 合成 · 全新解谜体验',
      'tagline': '物品合并数独 — 解谜 × 合成 × 爬塔',
      'heroDesc': '拖动数字方块到合适的位置，让相同方块合并升级，在不断叠加的谜题中层层爬塔。一款融合了数独逻辑与物品合成玩法的轻松益智游戏。',
      'storeSmallGoogle': 'Google Play',
      'storeSmallApple': 'App Store',
      'storeComing': '即将上线',
      // ---- 试玩区 ----
      'demoTitle': '立即试玩',
      'demoSub': '不用下载，直接在网页上体验合并数独',
      // ---- 特色 ----
      'featuresTitle': '游戏特色',
      'featuresSub': '轻松上手，越玩越上头的合成解谜',
      'feat1Title': '数独逻辑',
      'feat1Desc': '在经典数独规则的基础上，加入了空间与顺序的思考，每一步都需要巧妙规划。',
      'feat2Title': '合成升级',
      'feat2Desc': '相同方块合并进化成更高级的物品，体验不断升级的满足感。',
      'feat3Title': '层层爬塔',
      'feat3Desc': '随着关卡推进，难度逐步攀升，挑战你的策略极限。',
      'feat4Title': '离线畅玩',
      'feat4Desc': '无需联网即可随时随地游玩，进度保存在本地设备，隐私无忧。',
      // ---- 怎么玩 ----
      'howTitle': '怎么玩',
      'howSub': '三步上手，立即开玩',
      'step1Title': '拖动方块',
      'step1Desc': '从底部候选区选择一个数字方块。',
      'step2Title': '放入棋盘',
      'step2Desc': '将方块放入格子中，遵循数独规则。',
      'step3Title': '合并升级',
      'step3Desc': '相同方块相邻时合并成更高级物品，冲击更高塔层。',
      // ---- CTA / 页脚 ----
      'ctaTitle': '准备好开玩了吗？',
      'ctaDesc': 'MergeDoku 即将登陆 Google Play 与 App Store，敬请期待。',
      'footerCopy': '© 2026 MergeDoku · 保留所有权利',
      // ---- 首页 SEO ----
      'indexTitle': 'MergeDoku · 物品合并数独 — 解谜 × 合成 × 爬塔',
      'indexDesc': 'MergeDoku 是一款融合了数独逻辑与物品合成的休闲解谜游戏。拖动方块、合并升级、层层爬塔。支持 Android 与 iOS，离线畅玩。',
      // ---- 隐私政策 ----
      'privacyTitle': 'MergeDoku 隐私政策',
      'privacyDesc': 'MergeDoku 隐私政策。我们如何处理您的数据：本地存储、不收集个人信息、不含广告。',
      'privacyUpdated': '最后更新：2026 年 8 月 18 日',
      'privacyIntro': 'MergeDoku（下称「本游戏」）重视您的隐私。本政策说明我们如何处理您的数据。',
      'privacyH1Store': '我们存储什么',
      'privacyPStore': '游戏进度（关卡、分数、物品、设置偏好），仅存储在您的设备本地。我们不会将这些数据上传到任何服务器。',
      'privacyH1NoCollect': '我们不收集什么',
      'privacyPNo1': '我们不收集个人身份信息（姓名、邮箱、位置、通讯录、照片等）。',
      'privacyPNo2': '我们不使用分析工具或追踪 SDK。',
      'privacyPNo3': '我们不会向任何第三方出售、分享或披露您的数据。',
      'privacyH1GameCenter': 'Game Center / 排行榜',
      'privacyPGameCenter': '若您使用排行榜功能，您的 Game Center 昵称和分数将提交至 Apple 服务，受 Apple 隐私政策约束。',
      'privacyH1Children': '儿童隐私',
      'privacyPChildren': '本游戏面向全年龄段，不包含任何不适合儿童的内容。我们不会有意收集 13 岁以下儿童的个人信息。',
      'privacyH1Ads': '广告',
      'privacyPAds': '本应用通过 Google AdMob 展示广告（激励视频、横幅）。AdMob 及其合作伙伴可能收集设备广告标识符、IP 地址、设备与网络信息、大致位置、应用使用数据等，用于投放广告与频次控制。您可在设备设置中退出个性化广告。',
      'privacyH1Delete': '数据删除',
      'privacyPDelete': '删除本应用即可永久清除所有本地数据。',
      'privacyH1Contact': '联系我们',
      'contactIntro': '如需帮助或有任何疑问，请联系：',
      // ---- 服务条款 ----
      'termsTitle': 'MergeDoku 服务条款',
      'termsDesc': 'MergeDoku 服务条款：使用许可、知识产权、免责声明与责任限制。',
      'termsUpdated': '最后更新：2026 年 8 月 18 日',
      'termsIntro': '欢迎使用 MergeDoku。下载、安装或使用本游戏，即表示您同意遵守以下条款。',
      'termsH1License': '使用许可',
      'termsPLicense': '我们授予您一项有限的、非独占的、不可转让的许可，用于在您个人拥有的设备上安装并使用本游戏，且仅用于个人、非商业用途。',
      'termsH1Restrictions': '使用限制',
      'termsPRestrictions': '您不得对本游戏进行反向工程、反编译、篡改或修改；不得将本游戏用于任何违法用途；不得干扰本游戏的正常运行。',
      'termsH1IP': '知识产权',
      'termsPIP': '本游戏及其全部内容（包括但不限于代码、图形、音乐、文本、名称、标识）的知识产权归开发者所有，受相关法律保护。',
      'termsH1Disclaimer': '免责声明',
      'termsPDisclaimer': '本游戏按「现状」提供，不作任何明示或默示的担保。我们不对因使用或无法使用本游戏而产生的任何损失承担责任，法律另有规定的除外。',
      'termsH1Liability': '责任限制',
      'termsPLiability': '在适用法律允许的最大范围内，我们对任何间接、附带、特殊或后果性损害不承担责任。',
      'termsH1Changes': '条款变更',
      'termsPChanges': '我们可能不时更新本条款。更新后的条款将在本页面公布，继续使用本游戏即视为接受更新后的条款。',
      'termsH1Contact': '联系我们',
      // ---- 技术支持 ----
      'supportTitle': 'MergeDoku 技术支持',
      'supportDesc': 'MergeDoku 技术支持与联系我们。如有问题、建议或 Bug 反馈，欢迎发邮件。',
      'supportIntro': '如有任何问题、建议或 Bug 反馈，请发送邮件至：',
      'supportFaq': '常见问题',
      'supportQ1': '游戏进度会丢失吗？',
      'supportQ1A': '进度保存在您的设备本地，卸载应用会清除数据。',
      'supportQ2': '需要联网吗？',
      'supportQ2A': '游戏可完全离线游玩，无需网络连接。',
      'supportQ3': '包含广告或内购吗？',
      'supportQ3A': '不包含，本作为一次性付费完整游戏。',
      // ---- 404 ----
      'notFoundTitle': '页面未找到 - MergeDoku',
      'notFoundBody': '抱歉，您访问的页面不存在。',
      'notFoundHome': '返回首页',
      // ---- 试玩 play.html ----
      'demo.level': '第 {} 关 · {}×{}',
      'demo.score': '{} 分',
      'demo.hintPlace': '单击<b>划叉</b>规划，双击<b>放置</b>糖果（还差 {} 个）',
      'demo.hintMerge': '拖动一个物品到<b>同等级</b>物品上合并升级',
      'demo.hintDone': '✨ 合并完成！点「下一关」继续爬塔',
      'demo.next': '下一关 ▶',
      'demo.rule1': '一种颜色一个物品',
      'demo.rule2': '同行同列各一个',
      'demo.rule3': '相邻格子不能同时放',
      'demo.progress': '{} / {}'
    },

    en: {
      'nav.home': 'Home',
      'nav.privacy': 'Privacy Policy',
      'nav.terms': 'Terms of Service',
      'nav.support': 'Support',
      'backHome': '← Back to Home',
      'langLabel': 'Language',
      'badge': 'Sudoku × Merge · A brand-new puzzle',
      'tagline': 'Item-merge Sudoku — Solve × Merge × Climb',
      'heroDesc': 'Drag tiles into place, merge identical items to level up, and climb the tower through ever-growing puzzles. A light puzzle game that blends Sudoku logic with item-merging fun.',
      'storeSmallGoogle': 'Google Play',
      'storeSmallApple': 'App Store',
      'storeComing': 'Coming soon',
      'demoTitle': 'Play Now',
      'demoSub': 'No download — try Merge Sudoku right in your browser',
      'featuresTitle': 'Features',
      'featuresSub': 'Easy to learn, hard to put down',
      'feat1Title': 'Sudoku Logic',
      'feat1Desc': 'Classic Sudoku rules, with extra spatial and ordering thinking. Every move needs smart planning.',
      'feat2Title': 'Merge & Evolve',
      'feat2Desc': 'Merge identical tiles into higher-tier items and enjoy the satisfaction of leveling up.',
      'feat3Title': 'Climb the Tower',
      'feat3Desc': 'Difficulty rises with each level, pushing your strategy to the limit.',
      'feat4Title': 'Play Offline',
      'feat4Desc': 'Play anywhere with no internet. Progress stays on your device, private and worry-free.',
      'howTitle': 'How to Play',
      'howSub': 'Three steps to start',
      'step1Title': 'Drag a tile',
      'step1Desc': 'Pick a tile from the candidate area at the bottom.',
      'step2Title': 'Place on the board',
      'step2Desc': 'Place tiles on the grid following the Sudoku rules.',
      'step3Title': 'Merge to level up',
      'step3Desc': 'Merge identical items into higher-tier items and reach higher floors.',
      'ctaTitle': 'Ready to play?',
      'ctaDesc': 'MergeDoku is coming soon to Google Play and the App Store.',
      'footerCopy': '© 2026 MergeDoku · All rights reserved',
      'indexTitle': 'MergeDoku · Item-Merge Sudoku — Solve × Merge × Climb',
      'indexDesc': 'MergeDoku is a casual puzzle game that blends Sudoku logic with item merging. Drag tiles, merge to level up, and climb the tower. Available on Android and iOS, fully playable offline.',
      'privacyTitle': 'MergeDoku Privacy Policy',
      'privacyDesc': 'MergeDoku privacy policy: local storage only, no personal data collected, no ads.',
      'privacyUpdated': 'Last updated: August 18, 2026',
      'privacyIntro': 'MergeDoku ("the Game") values your privacy. This policy explains how we handle your data.',
      'privacyH1Store': 'What we store',
      'privacyPStore': 'Game progress (levels, scores, items, preferences), stored locally on your device only. No data is uploaded to any server.',
      'privacyH1NoCollect': 'What we do NOT collect',
      'privacyPNo1': 'We do not collect personally identifiable information (name, email, location, contacts, photos, etc.).',
      'privacyPNo2': 'We do not use analytics tools or tracking SDKs.',
      'privacyPNo3': 'We do not sell, share, or disclose your data to any third party.',
      'privacyH1GameCenter': 'Game Center / Leaderboards',
      'privacyPGameCenter': "If you use the leaderboard, your Game Center nickname and score will be submitted to Apple services, subject to Apple's privacy policy.",
      'privacyH1Children': "Children's Privacy",
      'privacyPChildren': 'This game is suitable for all ages and does not contain inappropriate content. We do not knowingly collect personal information from children under 13.',
      'privacyH1Ads': 'Ads',
      'privacyPAds': 'This app displays ads via Google AdMob (rewarded videos and banners). AdMob and its partners may collect device advertising identifiers, IP address, device and network information, approximate location, and app usage data to serve ads and control frequency. You can opt out of personalized ads in your device settings.',
      'privacyH1Delete': 'Data Deletion',
      'privacyPDelete': 'Deleting this app permanently removes all local data.',
      'privacyH1Contact': 'Contact',
      'contactIntro': 'Questions? Contact us:',
      'termsTitle': 'MergeDoku Terms of Service',
      'termsDesc': 'MergeDoku terms of service: license, intellectual property, disclaimer, and limitation of liability.',
      'termsUpdated': 'Last updated: August 18, 2026',
      'termsIntro': 'Welcome to MergeDoku. By downloading, installing, or using the Game, you agree to the following terms.',
      'termsH1License': 'License',
      'termsPLicense': 'We grant you a limited, non-exclusive, non-transferable license to install and use the Game on devices you own, for personal, non-commercial use only.',
      'termsH1Restrictions': 'Restrictions',
      'termsPRestrictions': 'You may not reverse engineer, decompile, tamper with, or modify the Game; use it for any unlawful purpose; or interfere with its normal operation.',
      'termsH1IP': 'Intellectual Property',
      'termsPIP': 'All intellectual property rights in the Game and its content (including code, graphics, music, text, names, and logos) belong to the developer and are protected by law.',
      'termsH1Disclaimer': 'Disclaimer',
      'termsPDisclaimer': 'The Game is provided "as is" without warranty of any kind, express or implied. We are not liable for any loss arising from the use of or inability to use the Game, except as required by law.',
      'termsH1Liability': 'Limitation of Liability',
      'termsPLiability': 'To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages.',
      'termsH1Changes': 'Changes',
      'termsPChanges': 'We may update these terms from time to time. Updated terms will be posted on this page, and continued use of the Game constitutes acceptance.',
      'termsH1Contact': 'Contact',
      'supportTitle': 'MergeDoku Support',
      'supportDesc': 'MergeDoku support and contact. Questions, suggestions, or bug reports welcome by email.',
      'supportIntro': 'For questions, suggestions, or bug reports, please contact:',
      'supportFaq': 'FAQ',
      'supportQ1': 'Will I lose my progress?',
      'supportQ1A': 'Progress is stored locally on your device; uninstalling the app clears the data.',
      'supportQ2': 'Does it require internet?',
      'supportQ2A': 'The game is fully playable offline.',
      'supportQ3': 'Does it contain ads or purchases?',
      'supportQ3A': 'No — this is a one-time purchase, complete game.',
      'notFoundTitle': 'Page Not Found - MergeDoku',
      'notFoundBody': 'Sorry, the page you are looking for does not exist.',
      'notFoundHome': 'Back to Home',
      'demo.level': 'Level {} · {}×{}',
      'demo.score': '{} pts',
      'demo.hintPlace': 'Tap to <b>mark an X</b> and plan, double-tap to <b>place</b> a candy ({} left)',
      'demo.hintMerge': 'Drag an item onto a <b>same-level</b> item to merge',
      'demo.hintDone': '✨ Merge complete! Tap “Next” to keep climbing',
      'demo.next': 'Next ▶',
      'demo.rule1': 'One per color',
      'demo.rule2': 'One per row & column',
      'demo.rule3': 'No adjacent items',
      'demo.progress': '{} / {}'
    },

    ja: {
      'nav.home': 'ホーム',
      'nav.privacy': 'プライバシーポリシー',
      'nav.terms': '利用規約',
      'nav.support': 'サポート',
      'backHome': '← ホームに戻る',
      'langLabel': '言語',
      'badge': '数独 × 合成・まったく新しいパズル',
      'tagline': 'アイテム合成数独 — 解く × 合成 × タワー攻略',
      'heroDesc': 'ブロックを正しい場所へドラッグし、同じものを合成してレベルアップ。重なり合うパズルを解きながら、タワーをどんどん登っていこう。数独のロジックとアイテム合成を組み合わせた、手軽に楽しめるパズルゲーム。',
      'storeSmallGoogle': 'Google Play',
      'storeSmallApple': 'App Store',
      'storeComing': '近日公開',
      'demoTitle': 'いますぐプレイ',
      'demoSub': 'ダウンロード不要、ブラウザで直接プレイ',
      'featuresTitle': '特徴',
      'featuresSub': '簡単に始められて、やみつきになる',
      'feat1Title': '数独ロジック',
      'feat1Desc': '定番の数独ルールに、空間と順序の思考をプラス。一手一手に工夫が必要です。',
      'feat2Title': '合成アップグレード',
      'feat2Desc': '同じブロックを合成して上位アイテムへ進化。レベルアップの達成感を味わえます。',
      'feat3Title': 'タワーを登る',
      'feat3Desc': 'レベルが進むほど難易度が上昇。戦略の限界に挑みましょう。',
      'feat4Title': 'オフラインで遊べる',
      'feat4Desc': 'ネット不要でいつでもどこでもプレイ。データは端末に保存され、プライバシーも安心。',
      'howTitle': '遊び方',
      'howSub': '3ステップですぐに遊べる',
      'step1Title': 'ブロックをドラッグ',
      'step1Desc': '下の候補エリアから数字ブロックを選びます。',
      'step2Title': '盤面に置く',
      'step2Desc': '数独のルールに従ってブロックをマスに配置します。',
      'step3Title': '合成してアップグレード',
      'step3Desc': '同じブロックを合成して上位アイテムにし、より高いフロアを目指します。',
      'ctaTitle': '遊ぶ準備はできましたか？',
      'ctaDesc': 'MergeDoku は近日 Google Play と App Store に登場します。',
      'footerCopy': '© 2026 MergeDoku · 無断転載を禁じます',
      'indexTitle': 'MergeDoku · アイテム合成数独 — 解く × 合成 × タワー攻略',
      'indexDesc': 'MergeDoku は数独のロジックとアイテム合成を組み合わせたカジュアルパズルゲーム。ブロックをドラッグして合成し、タワーを登りましょう。Android / iOS 対応、オフラインで遊べます。',
      'privacyTitle': 'MergeDoku プライバシーポリシー',
      'privacyDesc': 'MergeDoku のプライバシーポリシー：ローカル保存のみ、個人情報の収集なし、広告なし。',
      'privacyUpdated': '最終更新：2026年8月18日',
      'privacyIntro': 'MergeDoku（以下「本ゲーム」）は、お客様のプライバシーを尊重します。本ポリシーは、データの取り扱いについて説明するものです。',
      'privacyH1Store': '保存するもの',
      'privacyPStore': 'ゲームの進行状況（レベル、スコア、アイテム、設定）は、お客様の端末内にのみ保存されます。データがサーバーにアップロードされることはありません。',
      'privacyH1NoCollect': '収集しないもの',
      'privacyPNo1': '個人を特定できる情報（氏名、メールアドレス、位置情報、連絡先、写真など）は収集しません。',
      'privacyPNo2': '分析ツールやトラッキングSDKは使用していません。',
      'privacyPNo3': 'お客様のデータを第三者に販売・共有・開示することはありません。',
      'privacyH1GameCenter': 'Game Center / ランキング',
      'privacyPGameCenter': 'ランキング機能をご利用の場合、Game Center のニックネームとスコアが Apple のサービスに送信され、Apple のプライバシーポリシーが適用されます。',
      'privacyH1Children': 'お子様のプライバシー',
      'privacyPChildren': '本ゲームは全年齢向けで、お子様に不適切な内容は含まれていません。13歳未満の個人情報を意図的に収集することはありません。',
      'privacyH1Ads': '広告',
      'privacyPAds': '本アプリはGoogle AdMobを通じて広告（リワード動画、バナー）を表示します。AdMobおよびそのパートナーは、広告配信と頻度制御のために、デバイス広告識別子、IPアドレス、デバイス・ネットワーク情報、おおよその位置情報、アプリ使用データなどを収集する場合があります。パーソナライズ広告はデバイス設定でオプトアウトできます。',
      'privacyH1Delete': 'データの削除',
      'privacyPDelete': 'アプリを削除すると、端末内のすべてのデータが完全に消去されます。',
      'privacyH1Contact': 'お問い合わせ',
      'contactIntro': 'ご不明な点がございましたら、こちらまで：',
      'termsTitle': 'MergeDoku 利用規約',
      'termsDesc': 'MergeDoku 利用規約：利用許諾、知的財産、免責事項、責任の制限。',
      'termsUpdated': '最終更新：2026年8月18日',
      'termsIntro': 'MergeDoku へようこそ。本ゲームをダウンロード、インストール、または使用することで、以下の規約に同意したものとみなされます。',
      'termsH1License': '利用許諾',
      'termsPLicense': '当社は、お客様が所有する端末に本ゲームをインストールして使用するための、限定的かつ非独占的で譲渡不能なライセンスを、個人的・非商業的な目的に限り付与します。',
      'termsH1Restrictions': '使用制限',
      'termsPRestrictions': '本ゲームのリバースエンジニアリング、逆コンパイル、改ざん、改変、違法な目的での使用、正常な動作の妨害は禁止します。',
      'termsH1IP': '知的財産',
      'termsPIP': '本ゲームおよびそのすべてのコンテンツ（コード、グラフィック、音楽、テキスト、名称、ロゴを含む）の知的財産権は開発者に帰属し、法律で保護されています。',
      'termsH1Disclaimer': '免責事項',
      'termsPDisclaimer': '本ゲームは「現状有姿」で提供され、明示・黙示を問わずいかなる保証も行いません。法律で別途定めがある場合を除き、本ゲームの使用または使用不能に起因する損害について責任を負いません。',
      'termsH1Liability': '責任の制限',
      'termsPLiability': '適用される法律で認められる最大限の範囲において、当社は間接的、付随的、特別、または結果的な損害について責任を負いません。',
      'termsH1Changes': '規約の変更',
      'termsPChanges': '当社は本規約を随時更新することがあります。更新後の規約は本ページに掲載され、継続して本ゲームを使用することで更新後の規約に同意したものとみなされます。',
      'termsH1Contact': 'お問い合わせ',
      'supportTitle': 'MergeDoku サポート',
      'supportDesc': 'MergeDoku のサポート・お問い合わせ。質問やご意見、不具合の報告はメールでお寄せください。',
      'supportIntro': '質問、ご意見、不具合の報告は、以下のメールまでお送りください：',
      'supportFaq': 'よくある質問',
      'supportQ1': '進行状況は失われますか？',
      'supportQ1A': '進行状況は端末内に保存され、アプリをアンインストールすると消去されます。',
      'supportQ2': 'インターネット接続は必要ですか？',
      'supportQ2A': 'ゲームは完全にオフラインでプレイできます。',
      'supportQ3': '広告や課金はありますか？',
      'supportQ3A': 'ありません。買い切りの完全版ゲームです。',
      'notFoundTitle': 'ページが見つかりません - MergeDoku',
      'notFoundBody': '申し訳ありません。お探しのページは存在しません。',
      'notFoundHome': 'ホームに戻る',
      'demo.level': '第 {} 関 · {}×{}',
      'demo.score': '{} 点',
      'demo.hintPlace': 'タップで<b>×印</b>を付けて計画、ダブルタップで<b>配置</b>（残り {} 個）',
      'demo.hintMerge': 'アイテムを<b>同じレベル</b>のアイテムにドラッグして合成',
      'demo.hintDone': '✨ 合成完了！「次へ」でタワーを登ろう',
      'demo.next': '次へ ▶',
      'demo.rule1': '同じ色は1つ',
      'demo.rule2': '同じ行・列は1つ',
      'demo.rule3': '隣り合うマスは不可',
      'demo.progress': '{} / {}'
    },

    de: {
      'nav.home': 'Startseite',
      'nav.privacy': 'Datenschutz',
      'nav.terms': 'Nutzungsbedingungen',
      'nav.support': 'Support',
      'backHome': '← Zur Startseite',
      'langLabel': 'Sprache',
      'badge': 'Sudoku × Merge · Ein brandneues Puzzle',
      'tagline': 'Item-Merge-Sudoku — Lösen × Mergen × Klettern',
      'heroDesc': 'Ziehe Steine an die richtige Stelle, merge identische Gegenstände zum Aufsteigen und klettere den Turm durch immer größere Rätsel hinauf. Ein leichtes Puzzlespiel, das Sudoku-Logik mit Item-Merging verbindet.',
      'storeSmallGoogle': 'Google Play',
      'storeSmallApple': 'App Store',
      'storeComing': 'Bald verfügbar',
      'demoTitle': 'Jetzt spielen',
      'demoSub': 'Kein Download — Merge-Sudoku direkt im Browser ausprobieren',
      'featuresTitle': 'Funktionen',
      'featuresSub': 'Leicht zu lernen, schwer wegzulegen',
      'feat1Title': 'Sudoku-Logik',
      'feat1Desc': 'Klassische Sudoku-Regeln, ergänzt um räumliches und logisches Denken. Jeder Zug braucht kluge Planung.',
      'feat2Title': 'Mergen & Entwickeln',
      'feat2Desc': 'Merge gleiche Steine zu höherstufigen Gegenständen und genieße die Befriedigung des Aufsteigens.',
      'feat3Title': 'Turm erklimmen',
      'feat3Desc': 'Mit jedem Level steigt die Schwierigkeit und fordert deine Strategie heraus.',
      'feat4Title': 'Offline spielen',
      'feat4Desc': 'Spiele überall ohne Internet. Der Fortschritt bleibt auf deinem Gerät — privat und sorgenfrei.',
      'howTitle': 'So spielt man',
      'howSub': 'Drei Schritte zum Loslegen',
      'step1Title': 'Ziehe einen Stein',
      'step1Desc': 'Wähle einen Stein aus dem Kandidatenbereich unten.',
      'step2Title': 'Aufs Brett legen',
      'step2Desc': 'Platziere Steine nach den Sudoku-Regeln auf dem Raster.',
      'step3Title': 'Mergen zum Aufsteigen',
      'step3Desc': 'Merge gleiche Gegenstände zu höheren und erreiche höhere Ebenen.',
      'ctaTitle': 'Bereit zu spielen?',
      'ctaDesc': 'MergeDoku erscheint bald im Google Play und im App Store.',
      'footerCopy': '© 2026 MergeDoku · Alle Rechte vorbehalten',
      'indexTitle': 'MergeDoku · Item-Merge-Sudoku — Lösen × Mergen × Klettern',
      'indexDesc': 'MergeDoku ist ein entspanntes Puzzlespiel, das Sudoku-Logik mit Item-Merging verbindet. Ziehe Steine, merge zum Aufsteigen und klettere den Turm. Verfügbar für Android und iOS, vollständig offline spielbar.',
      'privacyTitle': 'MergeDoku Datenschutzerklärung',
      'privacyDesc': 'MergeDoku-Datenschutz: nur lokale Speicherung, keine personenbezogenen Daten, keine Werbung.',
      'privacyUpdated': 'Zuletzt aktualisiert: 18. August 2026',
      'privacyIntro': 'MergeDoku („das Spiel“) respektiert deine Privatsphäre. Diese Erklärung beschreibt, wie wir mit deinen Daten umgehen.',
      'privacyH1Store': 'Was wir speichern',
      'privacyPStore': 'Spielfortschritt (Level, Punkte, Gegenstände, Einstellungen) wird ausschließlich lokal auf deinem Gerät gespeichert. Es werden keine Daten auf einen Server hochgeladen.',
      'privacyH1NoCollect': 'Was wir NICHT erfassen',
      'privacyPNo1': 'Wir erfassen keine personenbezogenen Daten (Name, E-Mail, Standort, Kontakte, Fotos usw.).',
      'privacyPNo2': 'Wir verwenden keine Analyse-Tools oder Tracking-SDKs.',
      'privacyPNo3': 'Wir verkaufen, teilen oder offenbaren deine Daten nicht an Dritte.',
      'privacyH1GameCenter': 'Game Center / Bestenlisten',
      'privacyPGameCenter': 'Wenn du die Bestenliste nutzt, werden dein Game-Center-Name und deine Punktzahl an Apple-Dienste übermittelt und unterliegen der Datenschutzrichtlinie von Apple.',
      'privacyH1Children': 'Privatsphäre von Kindern',
      'privacyPChildren': 'Dieses Spiel ist für alle Altersgruppen geeignet und enthält keine ungeeigneten Inhalte. Wir erfassen wissentlich keine persönlichen Daten von Kindern unter 13 Jahren.',
      'privacyH1Ads': 'Werbung',
      'privacyPAds': 'Diese App zeigt Werbung über Google AdMob (Belohnungsvideos und Banner). AdMob und seine Partner können Geräte-Werbe-IDs, IP-Adresse, Geräte- und Netzwerkinformationen, ungefähren Standort und Nutzungsdaten erheben, um Anzeigen auszuliefern und die Häufigkeit zu steuern. Du kannst personalisierte Werbung in den Geräteeinstellungen deaktivieren.',
      'privacyH1Delete': 'Datenlöschung',
      'privacyPDelete': 'Das Löschen dieser App entfernt dauerhaft alle lokalen Daten.',
      'privacyH1Contact': 'Kontakt',
      'contactIntro': 'Fragen? Kontaktiere uns:',
      'termsTitle': 'MergeDoku Nutzungsbedingungen',
      'termsDesc': 'MergeDoku-Nutzungsbedingungen: Lizenz, geistiges Eigentum, Haftungsausschluss und Haftungsbeschränkung.',
      'termsUpdated': 'Zuletzt aktualisiert: 18. August 2026',
      'termsIntro': 'Willkommen bei MergeDoku. Durch Herunterladen, Installieren oder Verwenden des Spiels stimmst du den folgenden Bedingungen zu.',
      'termsH1License': 'Lizenz',
      'termsPLicense': 'Wir gewähren dir eine begrenzte, nicht exklusive, nicht übertragbare Lizenz, das Spiel auf Geräten zu installieren und zu verwenden, die du besitzt — ausschließlich für private, nicht kommerzielle Zwecke.',
      'termsH1Restrictions': 'Einschränkungen',
      'termsPRestrictions': 'Du darfst das Spiel nicht zurückentwickeln, dekompilieren, manipulieren oder verändern, es nicht für rechtswidrige Zwecke nutzen und seinen normalen Betrieb nicht stören.',
      'termsH1IP': 'Geistiges Eigentum',
      'termsPIP': 'Alle Rechte am geistigen Eigentum des Spiels und seiner Inhalte (einschließlich Code, Grafik, Musik, Text, Namen und Logos) gehören dem Entwickler und sind gesetzlich geschützt.',
      'termsH1Disclaimer': 'Haftungsausschluss',
      'termsPDisclaimer': 'Das Spiel wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Garantie bereitgestellt. Wir haften nicht für Verluste aus der Nutzung oder Nichtnutzbarkeit des Spiels, soweit gesetzlich nichts anderes bestimmt ist.',
      'termsH1Liability': 'Haftungsbeschränkung',
      'termsPLiability': 'Im gesetzlich zulässigen Umfang haften wir nicht für indirekte, zufällige, besondere oder Folgeschäden.',
      'termsH1Changes': 'Änderungen',
      'termsPChanges': 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Aktualisierte Bedingungen werden auf dieser Seite veröffentlicht; die weitere Nutzung des Spiels gilt als Zustimmung.',
      'termsH1Contact': 'Kontakt',
      'supportTitle': 'MergeDoku Support',
      'supportDesc': 'MergeDoku-Support und Kontakt. Fragen, Vorschläge oder Fehlerberichte gerne per E-Mail.',
      'supportIntro': 'Für Fragen, Vorschläge oder Fehlerberichte kontaktiere uns bitte:',
      'supportFaq': 'Häufige Fragen',
      'supportQ1': 'Verliere ich meinen Fortschritt?',
      'supportQ1A': 'Der Fortschritt wird lokal auf deinem Gerät gespeichert; eine Deinstallation löscht die Daten.',
      'supportQ2': 'Ist Internet erforderlich?',
      'supportQ2A': 'Das Spiel ist vollständig offline spielbar.',
      'supportQ3': 'Enthält es Werbung oder Käufe?',
      'supportQ3A': 'Nein — dies ist ein einmalig zu erwerbendes, vollständiges Spiel.',
      'notFoundTitle': 'Seite nicht gefunden - MergeDoku',
      'notFoundBody': 'Entschuldigung, die gesuchte Seite existiert nicht.',
      'notFoundHome': 'Zur Startseite',
      'demo.level': 'Level {} · {}×{}',
      'demo.score': '{} Punkte',
      'demo.hintPlace': 'Tippen zum <b>Markieren</b>, doppeltippen zum <b>Platzieren</b> (noch {})',
      'demo.hintMerge': 'Ziehe ein Objekt auf ein <b>gleichstufiges</b> Objekt zum Mergen',
      'demo.hintDone': '✨ Fertig! Tippe auf „Weiter“, um weiterzuklettern',
      'demo.next': 'Weiter ▶',
      'demo.rule1': 'Einer pro Farbe',
      'demo.rule2': 'Einer pro Zeile & Spalte',
      'demo.rule3': 'Nicht nebeneinander',
      'demo.progress': '{} / {}'
    },

    ko: {
      'nav.home': '홈',
      'nav.privacy': '개인정보 처리방침',
      'nav.terms': '서비스 약관',
      'nav.support': '지원',
      'backHome': '← 홈으로 돌아가기',
      'langLabel': '언어',
      'badge': '스도쿠 × 합성 · 새로운 퍼즐',
      'tagline': '아이템 합성 스도쿠 — 퍼즐 × 합성 × 타워',
      'heroDesc': '블록을 알맞은 위치로 드래그하고, 같은 블록을 합성해 레벨업하세요. 점점 커지는 퍼즐을 풀며 타워를 올라가는, 스도쿠 로직과 아이템 합성을 결합한 가벼운 퍼즐 게임입니다.',
      'storeSmallGoogle': 'Google Play',
      'storeSmallApple': 'App Store',
      'storeComing': '곧 출시',
      'demoTitle': '지금 플레이',
      'demoSub': '다운로드 없이 브라우저에서 바로 체험',
      'featuresTitle': '특징',
      'featuresSub': '쉽게 시작하고, 계속 빠져드는',
      'feat1Title': '스도쿠 로직',
      'feat1Desc': '고전 스도쿠 규칙에 공간과 순서에 대한 사고를 더했습니다. 매 수가 치밀한 계획을 필요로 합니다.',
      'feat2Title': '합성 업그레이드',
      'feat2Desc': '같은 블록을 합성해 상위 아이템으로 진화시키고, 레벨업의 성취감을 느껴보세요.',
      'feat3Title': '타워 등반',
      'feat3Desc': '레벨이 오를수록 난이도가 상승하며 당신의 전략을 시험합니다.',
      'feat4Title': '오프라인 플레이',
      'feat4Desc': '인터넷 없이 언제 어디서나 플레이. 진행 상황은 기기에 저장되어 사생활도 안심.',
      'howTitle': '플레이 방법',
      'howSub': '세 단계로 바로 시작',
      'step1Title': '블록 드래그',
      'step1Desc': '하단 후보 영역에서 숫자 블록을 선택하세요.',
      'step2Title': '보드에 배치',
      'step2Desc': '스도쿠 규칙에 따라 칸에 블록을 배치하세요.',
      'step3Title': '합성하여 업그레이드',
      'step3Desc': '같은 블록을 합성해 상위 아이템으로 만들고 더 높은 층을 노리세요.',
      'ctaTitle': '플레이할 준비 되셨나요?',
      'ctaDesc': 'MergeDoku가 곧 Google Play와 App Store에 출시됩니다.',
      'footerCopy': '© 2026 MergeDoku · 모든 권리 보유',
      'indexTitle': 'MergeDoku · 아이템 합성 스도쿠 — 퍼즐 × 합성 × 타워',
      'indexDesc': 'MergeDoku는 스도쿠 로직과 아이템 합성을 결합한 캐주얼 퍼즐 게임입니다. 블록을 드래그하고 합성해 타워를 올라가세요. Android와 iOS 지원, 오프라인으로 즐길 수 있습니다.',
      'privacyTitle': 'MergeDoku 개인정보 처리방침',
      'privacyDesc': 'MergeDoku 개인정보 처리방침: 로컬 저장만, 개인정보 미수집, 광고 없음.',
      'privacyUpdated': '최종 업데이트: 2026년 8월 18일',
      'privacyIntro': 'MergeDoku(이하 “본 게임”)는 이용자의 개인정보를 소중히 여깁니다. 본 방침은 데이터 처리 방식을 설명합니다.',
      'privacyH1Store': '저장하는 항목',
      'privacyPStore': '게임 진행 상황(레벨, 점수, 아이템, 설정)은 이용자의 기기에만 로컬 저장됩니다. 데이터가 서버로 업로드되지 않습니다.',
      'privacyH1NoCollect': '수집하지 않는 항목',
      'privacyPNo1': '개인 식별 정보(이름, 이메일, 위치, 연락처, 사진 등)를 수집하지 않습니다.',
      'privacyPNo2': '분석 도구나 추적 SDK를 사용하지 않습니다.',
      'privacyPNo3': '이용자의 데이터를 제3자에게 판매·공유·공개하지 않습니다.',
      'privacyH1GameCenter': 'Game Center / 순위표',
      'privacyPGameCenter': '순위표 기능을 사용하는 경우 Game Center 닉네임과 점수가 Apple 서비스에 제출되며 Apple의 개인정보 처리방침이 적용됩니다.',
      'privacyH1Children': '아동 개인정보',
      'privacyPChildren': '본 게임은 모든 연령 대상이며 아동에게 부적절한 콘텐츠를 포함하지 않습니다. 13세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.',
      'privacyH1Ads': '광고',
      'privacyPAds': '본 앱은 Google AdMob을 통해 광고(보상형 동영상, 배너)를 표시합니다. AdMob 및 파트너는 광고 게재와 빈도 제어를 위해 기기 광고 식별자, IP 주소, 기기 및 네트워크 정보, 대략적 위치, 앱 사용 데이터 등을 수집할 수 있습니다. 기기 설정에서 맞춤 광고를 거부할 수 있습니다.',
      'privacyH1Delete': '데이터 삭제',
      'privacyPDelete': '앱을 삭제하면 기기의 모든 로컬 데이터가 영구적으로 삭제됩니다.',
      'privacyH1Contact': '문의',
      'contactIntro': '문의 사항이 있으시면 아래로 연락해 주세요:',
      'termsTitle': 'MergeDoku 서비스 약관',
      'termsDesc': 'MergeDoku 서비스 약관: 사용 허가, 지식재산권, 면책, 책임 제한.',
      'termsUpdated': '최종 업데이트: 2026년 8월 18일',
      'termsIntro': 'MergeDoku에 오신 것을 환영합니다. 본 게임을 다운로드, 설치 또는 사용함으로써 다음 약관에 동의하게 됩니다.',
      'termsH1License': '사용 허가',
      'termsPLicense': '당사는 귀하가 소유한 기기에 본 게임을 설치·사용할 수 있는 제한적이고 비독점적이며 양도 불가능한 라이선스를 개인적·비상업적 용도에 한해 부여합니다.',
      'termsH1Restrictions': '사용 제한',
      'termsPRestrictions': '본 게임을 역공학, 디컴파일, 변조 또는 개조하거나 불법적인 목적으로 사용하거나 정상적인 작동을 방해해서는 안 됩니다.',
      'termsH1IP': '지식재산권',
      'termsPIP': '본 게임 및 모든 콘텐츠(코드, 그래픽, 음악, 텍스트, 명칭, 로고 포함)의 지식재산권은 개발자에게 귀속되며 법률의 보호를 받습니다.',
      'termsH1Disclaimer': '면책',
      'termsPDisclaimer': '본 게임은 “있는 그대로” 제공되며 명시적·묵시적 어떠한 보증도 하지 않습니다. 법률이 달리 정하는 경우를 제외하고, 게임 사용 또는 사용 불가로 인한 손실에 대해 책임지지 않습니다.',
      'termsH1Liability': '책임 제한',
      'termsPLiability': '관련 법률이 허용하는 최대 범위에서 당사는 간접적·부수적·특별·결과적 손해에 대해 책임지지 않습니다.',
      'termsH1Changes': '약관 변경',
      'termsPChanges': '당사는 본 약관을 수시로 업데이트할 수 있습니다. 업데이트된 약관은 본 페이지에 게시되며, 게임을 계속 사용하면 업데이트된 약관에 동의한 것으로 간주됩니다.',
      'termsH1Contact': '문의',
      'supportTitle': 'MergeDoku 지원',
      'supportDesc': 'MergeDoku 지원 및 문의. 질문, 제안, 버그 신고를 이메일로 보내주세요.',
      'supportIntro': '질문, 제안 또는 버그 신고는 아래 이메일로 보내주세요:',
      'supportFaq': '자주 묻는 질문',
      'supportQ1': '진행 상황이 사라지나요?',
      'supportQ1A': '진행 상황은 기기에 로컬 저장되며, 앱을 삭제하면 데이터가 지워집니다.',
      'supportQ2': '인터넷이 필요한가요?',
      'supportQ2A': '게임은 완전히 오프라인으로 플레이할 수 있습니다.',
      'supportQ3': '광고나 인앱 구매가 있나요?',
      'supportQ3A': '없습니다. 일회성 구매의 완전판 게임입니다.',
      'notFoundTitle': '페이지를 찾을 수 없음 - MergeDoku',
      'notFoundBody': '죄송합니다. 찾으시는 페이지가 존재하지 않습니다.',
      'notFoundHome': '홈으로 돌아가기',
      'demo.level': '제 {} 관 · {}×{}',
      'demo.score': '{} 점',
      'demo.hintPlace': '탭하여 <b>×표시</b>로 계획하고, 더블 탭하여 <b>배치</b> (남은 {}개)',
      'demo.hintMerge': '아이템을 <b>같은 레벨</b> 아이템으로 드래그하여 합성',
      'demo.hintDone': '✨ 합성 완료! “다음”을 눌러 계속 올라가세요',
      'demo.next': '다음 ▶',
      'demo.rule1': '색상당 1개',
      'demo.rule2': '행·열당 1개',
      'demo.rule3': '인접 칸은 불가',
      'demo.progress': '{} / {}'
    }
  };

  // ---- 运行时 ----
  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && DICT[saved]) return saved;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.indexOf('zh') === 0) return 'zh';
    if (nav.indexOf('ja') === 0) return 'ja';
    if (nav.indexOf('de') === 0) return 'de';
    if (nav.indexOf('ko') === 0) return 'ko';
    if (nav.indexOf('en') === 0) return 'en';
    return 'zh';
  }

  function t(key, lang) {
    lang = lang || getLang();
    var dict = DICT[lang] || DICT.zh;
    var s = dict[key];
    if (s == null) s = (DICT.zh[key] != null) ? DICT.zh[key] : key;
    // 占位符 {} 替换
    if (arguments.length > 2) {
      var args = Array.prototype.slice.call(arguments, 2);
      args.forEach(function (v) { s = s.replace('{}', v); });
    }
    return s;
  }

  function applyLang(lang) {
    lang = DICT[lang] ? lang : 'zh';
    var dict = DICT[lang];
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr').split(':');
      var attr = spec[0], key = spec[1];
      if (dict[key] != null) el.setAttribute(attr, dict[key]);
    });
    document.querySelectorAll('.lang-switch select').forEach(function (s) {
      if (DICT[s.value] !== false && s.options) s.value = lang;
    });
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: lang } }));
  }

  function buildSwitcher() {
    document.querySelectorAll('.lang-switch').forEach(function (container) {
      var sel = document.createElement('select');
      sel.setAttribute('aria-label', 'Language');
      ORDER.forEach(function (code) {
        var opt = document.createElement('option');
        opt.value = code;
        opt.textContent = LABELS[code];
        sel.appendChild(opt);
      });
      sel.addEventListener('change', function () {
        try { localStorage.setItem(STORE_KEY, sel.value); } catch (e) {}
        applyLang(sel.value);
        // 同步到同页 iframe：storage 事件在 file:// 等场景不可靠，直接 postMessage
        try {
          document.querySelectorAll('iframe').forEach(function (f) {
            if (f.contentWindow) f.contentWindow.postMessage({ __mccLang: sel.value }, '*');
          });
        } catch (e) {}
      });
      container.appendChild(sel);
    });
  }

  // 跨文档同步：同源其它标签页 / iframe 切换语言时自动跟随
  window.addEventListener('storage', function (e) {
    if (e.key === STORE_KEY && e.newValue && DICT[e.newValue]) {
      applyLang(e.newValue);
    }
  });

  // 接收父页面（或同页 iframe）postMessage 来的语言切换
  window.addEventListener('message', function (e) {
    if (e.data && e.data.__mccLang && DICT[e.data.__mccLang]) {
      applyLang(e.data.__mccLang);
    }
  });

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    buildSwitcher();
    applyLang(getLang());
  });

  // 暴露给其它脚本（含 iframe 内 play.html）
  window.SITE_I18N = { DICT: DICT, t: t, getLang: getLang, applyLang: applyLang, buildSwitcher: buildSwitcher };
})();
