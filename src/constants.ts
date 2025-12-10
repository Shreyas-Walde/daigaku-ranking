import { Article, UniversityRank } from './types';

export const RANKING_DATA: UniversityRank[] = [
  {
    tier: 'S',
    color: 'bg-[#d8b4fe] text-purple-900 dark:bg-purple-900 dark:text-purple-100',
    universities: [
      { name: 'University of Tokyo (東京大学)', type: 'National', url: 'https://www.u-tokyo.ac.jp/' },
      { name: 'Kyoto University (京都大学)', type: 'National', url: 'https://www.kyoto-u.ac.jp/' },
      { name: 'Hitotsubashi University (一橋大学)', type: 'National', url: 'https://www.hit-u.ac.jp/' },
      { name: 'Institute of Science Tokyo (東京科学大学)', type: 'National', url: 'https://www.isct.ac.jp/' },
      { name: 'Meteorological College (気象大学校)', type: 'National', url: 'https://www.mc-jma.go.jp/' }
    ],
    description: 'The pinnacle of Japanese academia. Recognized globally as top-tier institutions.'
  },
  {
    tier: 'A',
    color: 'bg-[#fca5a5] text-red-900 dark:bg-red-900 dark:text-red-100',
    universities: [
      { name: 'Osaka University (大阪大学)', type: 'National', url: 'https://www.osaka-u.ac.jp/' },
      { name: 'Nagoya University (名古屋大学)', type: 'National', url: 'https://www.nagoya-u.ac.jp/' },
      { name: 'Tohoku University (東北大学)', type: 'National', url: 'https://www.tohoku.ac.jp/' },
      { name: 'Kobe University (神戸大学)', type: 'National', url: 'https://www.kobe-u.ac.jp/' },
      { name: 'Hokkaido University (北海道大学)', type: 'National', url: 'https://www.hokudai.ac.jp/' },
      { name: 'Kyushu University (九州大学)', type: 'National', url: 'https://www.kyushu-u.ac.jp/' },
      { name: 'Keio University (慶應義塾大学)', type: 'Private', url: 'https://www.keio.ac.jp/' },
      { name: 'Waseda University (早稲田大学)', type: 'Private', url: 'https://www.waseda.jp/' }
    ],
    description: 'Elite national universities and top private institutions.'
  },
  {
    tier: 'B',
    color: 'bg-[#fde047] text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100',
    universities: [
      { name: 'University of Tsukuba (筑波大学)', type: 'National', url: 'https://www.tsukuba.ac.jp/' },
      { name: 'Yokohama National University (横浜国立大学)', type: 'National', url: 'https://www.ynu.ac.jp/' },
      { name: 'Tokyo University of Foreign Studies (東京外国語大学)', type: 'National', url: 'https://www.tufs.ac.jp/' },
      { name: 'Ochanomizu University (お茶の水女子大学)', type: 'National', url: 'https://www.ocha.ac.jp/' },
      { name: 'Chiba University (千葉大学)', type: 'National', url: 'https://www.chiba-u.ac.jp/' },
      { name: 'Nagoya Institute of Technology (名古屋工業大学)', type: 'National', url: 'https://www.nitech.ac.jp/' },
      { name: 'The University of Electro-Communications (電気通信大学)', type: 'National', url: 'https://www.uec.ac.jp/' },
      { name: 'Tokyo University of Agriculture and Technology (東京農工大学)', type: 'National', url: 'https://www.tuat.ac.jp/' },
      { name: 'Kyoto Institute of Technology (京都工芸繊維大学)', type: 'National', url: 'https://www.kit.ac.jp/' },
      { name: 'Hiroshima University (広島大学)', type: 'National', url: 'https://www.hiroshima-u.ac.jp/' },
      { name: 'Okayama University (岡山大学)', type: 'National', url: 'https://www.okayama-u.ac.jp/' },
      { name: 'Kanazawa University (金沢大学)', type: 'National', url: 'https://www.kanazawa-u.ac.jp/' },
      { name: 'Tokyo Gakugei University (東京学芸大学)', type: 'National', url: 'https://www.u-gakugei.ac.jp/' },
      { name: 'Nara Womens University (奈良女子大学)', type: 'National', url: 'https://www.nara-wu.ac.jp/' },
      { name: 'Kumamoto University (熊本大学)', type: 'National', url: 'https://www.kumamoto-u.ac.jp/' },
      { name: 'Kyushu Institute of Technology (九州工業大学)', type: 'National', url: 'https://www.kyutech.ac.jp/' },
      { name: 'International Christian University (国際基督教大学)', type: 'Public', url: 'https://www.icu.ac.jp/' },
      { name: 'Osaka Metropolitan University (大阪公立大学)', type: 'Public', url: 'https://www.omu.ac.jp/' },
      { name: 'Tokyo Metropolitan University (東京都立大学)', type: 'Public', url: 'https://www.tmu.ac.jp/' },
      { name: 'Yokohama City University (横浜市立大学)', type: 'Public', url: 'https://www.yokohama-cu.ac.jp/' },
      { name: 'Nagoya City University (名古屋市立大学)', type: 'Public', url: 'https://www.nagoya-cu.ac.jp/' },
      { name: 'Kyoto Prefectural University (京都府立大学)', type: 'Public', url: 'https://www.kpu.ac.jp/' },
      { name: 'Kobe City University of Foreign Studies (神戸市外国語大学)', type: 'Public', url: 'https://www.kobe-cufs.ac.jp/' },
      { name: 'Sophia University (上智大学)', type: 'Private', url: 'https://www.sophia.ac.jp/' },
      { name: 'Tokyo University of Science (東京理科大学)', type: 'Private', url: 'https://www.tus.ac.jp/' },
      { name: 'Doshisha University (同志社大学)', type: 'Private', url: 'https://www.doshisha.ac.jp/' },
      { name: 'Meiji University (明治大学)', type: 'Private', url: 'https://www.meiji.ac.jp/' },
      { name: 'Aoyama Gakuin University (青山学院大学)', type: 'Private', url: 'https://www.aoyama.ac.jp/' },
      { name: 'Rikkyo University (立教大学)', type: 'Private', url: 'https://www.rikkyo.ac.jp/' },
      { name: 'Toyota Technological Institute (豊田工業大学)', type: 'Private', url: 'https://www.toyota-ti.ac.jp/' },
      { name: 'Chuo University (中央大学)', type: 'Private', url: 'https://www.chuo-u.ac.jp/' },
      { name: 'Hosei University (法政大学)', type: 'Private', url: 'https://www.hosei.ac.jp/' },
      { name: 'Ritsumeikan University (立命館大学)', type: 'Private', url: 'https://www.ritsumei.ac.jp/' },
      { name: 'Gakushuin University (学習院大学)', type: 'Private', url: 'https://www.univ.gakushuin.ac.jp/' },
      { name: 'Kwansei Gakuin University (関西学院大学)', type: 'Private', url: 'https://www.kwansei.ac.jp/' },
      { name: 'Shibaura Institute of Technology (芝浦工業大学)', type: 'Private', url: 'https://www.shibaura-it.ac.jp/' }
    ],
    description: 'Prestigious universities with strong research and employment records.'
  },
  {
    tier: 'C',
    color: 'bg-[#86efac] text-green-900 dark:bg-green-800 dark:text-green-100',
    universities: [
      { name: 'Otaru University of Commerce (小樽商科大学)', type: 'National', url: 'https://www.otaru-uc.ac.jp/' },
      { name: 'Tokyo University of Marine Science and Technology (東京海洋大学)', type: 'National', url: 'https://www.kaiyodai.ac.jp/' },
      { name: 'Saitama University (埼玉大学)', type: 'National', url: 'https://www.saitama-u.ac.jp/' },
      { name: 'Niigata University (新潟大学)', type: 'National', url: 'https://www.niigata-u.ac.jp/' },
      { name: 'Shinshu University (信州大学)', type: 'National', url: 'https://www.shinshu-u.ac.jp/' },
      { name: 'Shizuoka University (静岡大学)', type: 'National', url: 'https://www.shizuoka.ac.jp/' },
      { name: 'Shiga University (滋賀大学)', type: 'National', url: 'https://www.shiga-u.ac.jp/' },
      { name: 'Gifu University (岐阜大学)', type: 'National', url: 'https://www.gifu-u.ac.jp/' },
      { name: 'Mie University (三重大学)', type: 'National', url: 'https://www.mie-u.ac.jp/' },
      { name: 'Utsunomiya University (宇都宮大学)', type: 'National', url: 'https://www.utsunomiya-u.ac.jp/' },
      { name: 'Gunma University (群馬大学)', type: 'National', url: 'https://www.gunma-u.ac.jp/' },
      { name: 'Ibaraki University (茨城大学)', type: 'National', url: 'https://www.ibaraki.ac.jp/' },
      { name: 'Wakayama University (和歌山大学)', type: 'National', url: 'https://www.wakayama-u.ac.jp/' },
      { name: 'Tokushima University (徳島大学)', type: 'National', url: 'https://www.tokushima-u.ac.jp/' },
      { name: 'Nagasaki University (長崎大学)', type: 'National', url: 'https://www.nagasaki-u.ac.jp/' },
      { name: 'Yamagata University (山形大学)', type: 'National', url: 'https://www.yamagata-u.ac.jp/' },
      { name: 'University of Toyama (富山大学)', type: 'National', url: 'https://www.u-toyama.ac.jp/' },
      { name: 'University of Yamanashi (山梨大学)', type: 'National', url: 'https://www.yamanashi.ac.jp/' },
      { name: 'Yamaguchi University (山口大学)', type: 'National', url: 'https://www.yamaguchi-u.ac.jp/' },
      { name: 'Iwate University (岩手大学)', type: 'National', url: 'https://www.iwate-u.ac.jp/' },
      { name: 'Akita University (秋田大学)', type: 'National', url: 'https://www.akita-u.ac.jp/' },
      { name: 'Miyagi University of Education (宮城教育大学)', type: 'National', url: 'https://www.miyakyo-u.ac.jp/' },
      { name: 'Fukushima University (福島大学)', type: 'National', url: 'https://www.fukushima-u.ac.jp/' },
      { name: 'University of Fukui (福井大学)', type: 'National', url: 'https://www.u-fukui.ac.jp/' },
      { name: 'Aichi University of Education (愛知教育大学)', type: 'National', url: 'https://www.aichi-edu.ac.jp/' },
      { name: 'Kyoto University of Education (京都教育大学)', type: 'National', url: 'https://www.kyokyo-u.ac.jp/' },
      { name: 'Osaka Kyoiku University (大阪教育大学)', type: 'National', url: 'https://osaka-kyoiku.ac.jp/' },
      { name: 'Kagawa University (香川大学)', type: 'National', url: 'https://www.kagawa-u.ac.jp/' },
      { name: 'Ehime University (愛媛大学)', type: 'National', url: 'https://www.ehime-u.ac.jp/' },
      { name: 'Tottori University (鳥取大学)', type: 'National', url: 'https://www.tottori-u.ac.jp/' },
      { name: 'Kagoshima University (鹿児島大学)', type: 'National', url: 'https://www.kagoshima-u.ac.jp/' },
      { name: 'Toyohashi University of Technology (豊橋技術科学大学)', type: 'National', url: 'https://www.tut.ac.jp/' },
      { name: 'Nagaoka University of Technology (長岡技術科学大学)', type: 'National', url: 'https://www.nagaokaut.ac.jp/' },
      { name: 'University of Hyogo (兵庫県立大学)', type: 'Public', url: 'https://www.u-hyogo.ac.jp/' },
      { name: 'Takasaki City University of Economics (高崎経済大学)', type: 'Public', url: 'https://www.tcue.ac.jp/' },
      { name: 'Tsuru University (都留文科大学)', type: 'Public', url: 'https://www.tsuru.ac.jp/' },
      { name: 'Kansai University (関西大学)', type: 'Private', url: 'https://www.kansai-u.ac.jp/' },
      { name: 'Seikei University (成蹊大学)', type: 'Private', url: 'https://www.seikei.ac.jp/' },
      { name: 'Tsuda University (津田塾大学)', type: 'Private', url: 'https://www.tsuda.ac.jp/' },
      { name: 'Seijo University (成城大学)', type: 'Private', url: 'https://www.seijo.ac.jp/' },
      { name: 'Tokyo Denki University (東京電機大学)', type: 'Private', url: 'https://www.dendai.ac.jp/' },
      { name: 'Tokyo City University (東京都市大学)', type: 'Private', url: 'https://www.tcu.ac.jp/' },
      { name: 'Kogakuin University (工学院大学)', type: 'Private', url: 'https://www.kogakuin.ac.jp/' },
      { name: 'Nanzan University (南山大学)', type: 'Private', url: 'https://www.nanzan-u.ac.jp/' },
      { name: 'Meiji Gakuin University (明治学院大学)', type: 'Private', url: 'https://www.meijigakuin.ac.jp/' },
      { name: 'Tokyo Womans Christian University (東京女子大学)', type: 'Private', url: 'https://www.twcu.ac.jp/' },
      { name: 'Japan Womens University (日本女子大学)', type: 'Private', url: 'https://www.jwu.ac.jp/' },
      { name: 'Seinan Gakuin University (西南学院大学)', type: 'Private', url: 'https://www.seinan-gu.ac.jp/' },
      { name: 'Kokugakuin University (國學院大学)', type: 'Private', url: 'https://www.kokugakuin.ac.jp/' },
      { name: 'Musashi University (武蔵大学)', type: 'Private', url: 'https://www.musashi.ac.jp/' },
      { name: 'Kindai University (近畿大学)', type: 'Private', url: 'https://www.kindai.ac.jp/' }
    ],
    description: 'Top-tier regional national universities and prestigious private universities.'
  },
  {
    tier: 'D',
    color: 'bg-[#059669] text-white dark:bg-emerald-900 dark:text-emerald-100',
    universities: [
      { name: 'Saga University (佐賀大学)', type: 'National', url: 'https://www.saga-u.ac.jp/' },
      { name: 'Shimane University (島根大学)', type: 'National', url: 'https://www.shimane-u.ac.jp/' },
      { name: 'Hokkaido University of Education (北海道教育大学)', type: 'National', url: 'https://www.hokkyodai.ac.jp/' },
      { name: 'Muroran Institute of Technology (室蘭工業大学)', type: 'National', url: 'https://muroran-it.ac.jp/' },
      { name: 'Kitami Institute of Technology (北見工業大学)', type: 'National', url: 'https://www.kitami-it.ac.jp/' },
      { name: 'Hirosaki University (弘前大学)', type: 'National', url: 'https://www.hirosaki-u.ac.jp/' },
      { name: 'Nara University of Education (奈良教育大学)', type: 'National', url: 'https://www.nara-edu.ac.jp/' },
      { name: 'Kochi University (高知大学)', type: 'National', url: 'https://www.kochi-u.ac.jp/' },
      { name: 'Fukuoka University of Education (福岡教育大学)', type: 'National', url: 'https://www.fukuoka-edu.ac.jp/' },
      { name: 'Oita University (大分大学)', type: 'National', url: 'https://www.oita-u.ac.jp/' },
      { name: 'University of Miyazaki (宮崎大学)', type: 'National', url: 'https://www.miyazaki-u.ac.jp/' },
      { name: 'University of the Ryukyus (琉球大学)', type: 'National', url: 'https://www.u-ryukyu.ac.jp/' },
      { name: 'Obihiro University of Agriculture and Veterinary Medicine (帯広畜産大学)', type: 'National', url: 'https://www.obihiro.ac.jp/' },
      { name: 'Joetsu University of Education (上越教育大学)', type: 'National', url: 'https://www.juen.ac.jp/' },
      { name: 'Hyogo University of Teacher Education (兵庫教育大学)', type: 'National', url: 'https://www.hyogo-u.ac.jp/' },
      { name: 'Naruto University of Education (鳴門教育大学)', type: 'National', url: 'https://www.naruto-u.ac.jp/' },
      { name: 'National Fisheries University (水産大学校)', type: 'National', url: 'https://www.fish-u.ac.jp/' },
      { name: 'Tsukuba University of Technology (筑波技術大学)', type: 'National', url: 'https://www.tsukuba-tech.ac.jp/' },
      { name: 'Future University Hakodate (公立はこだて未来大学)', type: 'Public', url: 'https://www.fun.ac.jp/' },
      { name: 'Akita Prefectural University (秋田県立大学)', type: 'Public', url: 'https://www.akita-pu.ac.jp/' },
      { name: 'The University of Aizu (会津大学)', type: 'Public', url: 'https://u-aizu.ac.jp/' },
      { name: 'Gunma Prefectural Womens University (群馬県立女子大学)', type: 'Public', url: 'https://www.gpwu.ac.jp/' },
      { name: 'Maebashi Institute of Technology (前橋工科大学)', type: 'Public', url: 'https://www.maebashi-it.ac.jp/' },
      { name: 'Niigata Prefectural University (新潟県立大学)', type: 'Public', url: 'https://www.unii.ac.jp/' },
      { name: 'Ishikawa Prefectural University (石川県立大学)', type: 'Public', url: 'https://www.ishikawa-pu.ac.jp/' },
      { name: 'University of Fukui Prefectural (福井県立大学)', type: 'Public', url: 'https://www.fpu.ac.jp/' },
      { name: 'Shizuoka Prefectural University group (静岡県立)', type: 'Public', url: 'https://www.u-shizuoka-ken.ac.jp/' },
      { name: 'University of Shiga Prefecture (滋賀県立大学)', type: 'Public', url: 'https://www.usp.ac.jp/' },
      { name: 'Prefectural University of Hiroshima (県立広島大学)', type: 'Public', url: 'https://www.pu-hiroshima.ac.jp/' },
      { name: 'Hiroshima City University (広島市立大学)', type: 'Public', url: 'https://www.hiroshima-cu.ac.jp/' },
      { name: 'Kochi University of Technology (高知工科大学)', type: 'Public', url: 'https://www.kochi-tech.ac.jp/' },
      { name: 'The University of Kitakyushu (北九州市立大学)', type: 'Public', url: 'https://www.kitakyu-u.ac.jp/' },
      { name: 'Fukuoka Womens University (福岡女子大学)', type: 'Public', url: 'https://www.fwu.ac.jp/' },
      { name: 'Prefectural University of Kumamoto (熊本県立大学)', type: 'Public', url: 'https://www.pu-kumamoto.ac.jp/' },
      { name: 'Miyagi University (宮城大学)', type: 'Public', url: 'https://www.myu.ac.jp/' },
      { name: 'Iwate Prefectural University (岩手県立大学)', type: 'Public', url: 'https://www.iwate-pu.ac.jp/' },
      { name: 'University of Yamanashi Prefectural (山梨県立大学)', type: 'Public', url: 'https://www.yamanashi-ken.ac.jp/' },
      { name: 'Toyama Prefectural University (富山県立大学)', type: 'Public', url: 'https://www.pu-toyama.ac.jp/' },
      { name: 'Dokkyo University (獨協大学)', type: 'Private', url: 'https://www.dokkyo.ac.jp/' },
      { name: 'Tokyo University of Agriculture (東京農業大学)', type: 'Private', url: 'https://www.nodai.ac.jp/' },
      { name: 'Kitasato University (北里大学)', type: 'Private', url: 'https://www.kitasato-u.ac.jp/' },
      { name: 'Toho University (東邦大学)', type: 'Private', url: 'https://www.toho-u.ac.jp/' },
      { name: 'Toyo University (東洋大学)', type: 'Private', url: 'https://www.toyo.ac.jp/' },
      { name: 'Nihon University (日本大学)', type: 'Private', url: 'https://www.nihon-u.ac.jp/' },
      { name: 'Meijo University (名城大学)', type: 'Private', url: 'https://www.meijo-u.ac.jp/' },
      { name: 'Ritsumeikan Asia Pacific University (立命館アジア太平洋大学)', type: 'Private', url: 'https://www.apu.ac.jp/' },
      { name: 'Komazawa University (駒澤大学)', type: 'Private', url: 'https://www.komazawa-u.ac.jp/' },
      { name: 'Senshu University (専修大学)', type: 'Private', url: 'https://www.senshu-u.ac.jp/' },
      { name: 'Bunkyo University (文教大学)', type: 'Private', url: 'https://www.bunkyo.ac.jp/' },
      { name: 'Aichi University (愛知大学)', type: 'Private', url: 'https://www.aichi-u.ac.jp/' },
      { name: 'Chukyo University (中京大学)', type: 'Private', url: 'https://www.chukyo-u.ac.jp/' },
      { name: 'Kanazawa Institute of Technology (金沢工業大学)', type: 'Private', url: 'https://www.kanazawa-it.ac.jp/' },
      { name: 'Kyoto Sangyo University (京都産業大学)', type: 'Private', url: 'https://www.kyoto-su.ac.jp/' },
      { name: 'Konan University (甲南大学)', type: 'Private', url: 'https://www.konan-u.ac.jp/' },
      { name: 'Ryukoku University (龍谷大学)', type: 'Private', url: 'https://www.ryukoku.ac.jp/' },
      { name: 'Osaka Institute of Technology (大阪工業大学)', type: 'Private', url: 'https://www.oit.ac.jp/' },
      { name: 'Kanagawa University (神奈川大学)', type: 'Private', url: 'https://www.kanagawa-u.ac.jp/' },
      { name: 'Chiba Institute of Technology (千葉工業大学)', type: 'Private', url: 'https://www.it-chiba.ac.jp/' },
      { name: 'Fukuoka University (福岡大学)', type: 'Private', url: 'https://www.fukuoka-u.ac.jp/' }
    ],
    description: 'Established universities with solid regional reputation and employment strength.'
  },
  {
    tier: 'E',
    color: 'bg-[#7dd3fc] text-blue-900 dark:bg-sky-800 dark:text-sky-100',
    universities: [
      { name: 'Daito Bunka University (大東文化大学)', type: 'Private', url: 'https://www.daito.ac.jp/' },
      { name: 'Asia University (亜細亜大学)', type: 'Private', url: 'https://www.asia-u.ac.jp/' },
      { name: 'Teikyo University (帝京大学)', type: 'Private', url: 'https://www.teikyo-u.ac.jp/' },
      { name: 'Kokushikan University (国士舘大学)', type: 'Private', url: 'https://www.kokushikan.ac.jp/' },
      { name: 'Setsunan University (摂南大学)', type: 'Private', url: 'https://www.setsunan.ac.jp/' },
      { name: 'Kobe Gakuin University (神戸学院大学)', type: 'Private', url: 'https://www.kobegakuin.ac.jp/' },
      { name: 'Otemon Gakuin University (追手門学院大学)', type: 'Private', url: 'https://www.otemon.ac.jp/' },
      { name: 'Momoyama Gakuin University (桃山学院大学)', type: 'Private', url: 'https://www.andrew.ac.jp/' },
      { name: 'Hokusei Gakuen University (北星学園大学)', type: 'Private', url: 'https://www.hokusei.ac.jp/' },
      { name: 'Tohoku Fukushi University (東北福祉大学)', type: 'Private', url: 'https://www.tfu.ac.jp/' },
      { name: 'Musashino University (武蔵野大学)', type: 'Private', url: 'https://www.musashino-u.ac.jp/' },
      { name: 'Takushoku University (拓殖大学)', type: 'Private', url: 'https://www.takushoku-u.ac.jp/' },
      { name: 'Tokyo University of Technology (東京工科大学)', type: 'Private', url: 'https://www.teu.ac.jp/' },
      { name: 'Meisei University (明星大学)', type: 'Private', url: 'https://www.meisei-u.ac.jp/' },
      { name: 'J. F. Oberlin University (桜美林大学)', type: 'Private', url: 'https://www.obirin.ac.jp/' },
      { name: 'Kanto Gakuin University (関東学院大学)', type: 'Private', url: 'https://univ.kanto-gakuin.ac.jp/' },
      { name: 'Aichi Gakuin University (愛知学院大学)', type: 'Private', url: 'https://www.agu.ac.jp/' },
      { name: 'Chubu University (中部大学)', type: 'Private', url: 'https://www.chubu.ac.jp/' },
      { name: 'Kyoto Tachibana University (京都橘大学)', type: 'Private', url: 'https://www.tachibana-u.ac.jp/' },
      { name: 'Hiroshima Shudo University (広島修道大学)', type: 'Private', url: 'https://www.shudo-u.ac.jp/' },
      { name: 'Hiroshima Institute of Technology (広島工業大学)', type: 'Private', url: 'https://www.it-hiroshima.ac.jp/' },
      { name: 'Matsuyama University (松山大学)', type: 'Private', url: 'https://www.matsuyama-u.ac.jp/' },
      { name: 'Kurume University (久留米大学)', type: 'Private', url: 'https://www.kurume-u.ac.jp/' },
      { name: 'Fukuoka Institute of Technology (福岡工業大学)', type: 'Private', url: 'https://www.fit.ac.jp/' },
      { name: 'Kumamoto Gakuen University (熊本学園大学)', type: 'Private', url: 'https://www.kumagaku.ac.jp/' }
    ],
    description: 'Standard private universities providing widely accessible higher education.'
  },
  {
    tier: 'F',
    color: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300',
    universities: [
      { name: 'F-rank universities (Fランク大学)', type: 'Private' },
      { name: 'Junior colleges, Vocational schools, etc.', type: 'Private' }
    ],
    description: 'Universities facing enrollment challenges or non-university institutions.'
  }
];

export const NEW_ARTICLES: Article[] = [
  {
    id: '1',
    title: '【Reference】 Science Department Ranking Ver.2025',
    thumbnail: 'https://picsum.photos/seed/science/150/100',
    date: '2024.11.01'
  },
  {
    id: '2',
    title: '【Reference】 Humanities Department Ranking Ver.2025',
    thumbnail: 'https://picsum.photos/seed/humanities/150/100',
    date: '2024.10.25'
  },
  {
    id: '3',
    title: 'What it means to "Boast about Credentials" (Academic Snobbery)',
    thumbnail: 'https://picsum.photos/seed/snobbery/150/100',
    date: '2024.10.15'
  },
  {
    id: '4',
    title: 'Former Imperial Universities (Old Teidai)',
    thumbnail: 'https://picsum.photos/seed/teidai/150/100',
    date: '2024.09.30'
  },
  {
    id: '5',
    title: 'About the change in 2025 History Curriculum',
    thumbnail: 'https://picsum.photos/seed/history/150/100',
    date: '2024.09.10'
  }
];

export const POPULAR_ARTICLES: Article[] = [
  {
    id: 'p1',
    title: 'Academic Rank Pyramid (Main Chart)',
    thumbnail: 'https://picsum.photos/seed/pyramid/150/100'
  },
  {
    id: 'p2',
    title: 'Science Department Prestige Ranking',
    thumbnail: 'https://picsum.photos/seed/science_pop/150/100'
  },
  {
    id: 'p3',
    title: 'Humanities Department Prestige Ranking',
    thumbnail: 'https://picsum.photos/seed/human_pop/150/100'
  },
  {
    id: 'p4',
    title: 'Average Income Ranking by University',
    thumbnail: 'https://picsum.photos/seed/money/150/100'
  }
];
