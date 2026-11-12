'use strict';
/* AHADALIFILMS | Azərbaycan / Русский, Netlify static site */
const WORKS = [
  {id:'_UyseScmQWY', tag:{az:'TOY MƏRASİMİ',ru:'СВАДЕБНОЕ ТОРЖЕСТВО'}, title:{az:'Boradigahda toy çəkilişi',ru:'Свадебная съёмка в Борадигахе'}, desc:{az:'Toy gününün əsas anlarının çəkilişi və montajı.',ru:'Видеосъёмка и монтаж главных моментов свадебного дня.'}},
  {id:'Nyrnf3fzpP8', tag:{az:'VİDEO ÇƏKİLİŞİ',ru:'ВИДЕОСЪЁМКА'}, title:{az:'Seçilmiş çəkiliş işi',ru:'Избранная видеоработа'}, desc:{az:'Portfoliomuzdan əlavə video çəkiliş nümunəsi.',ru:'Дополнительная видеоработа из портфолио.'}},
  {id:'NSaQ0EOMd4E', tag:{az:'PORTFOLİO',ru:'ПОРТФОЛИО'}, title:{az:'Çəkiliş və montaj nümunəsi',ru:'Пример съёмки и монтажа'}, desc:{az:'Görüntü və montaj yanaşmamızı təqdim edən video iş.',ru:'Видеоработа, демонстрирующая подход к съёмке и монтажу.'}},
  {id:'lYctCEvOIn0', tag:{az:'YARADICI LAYİHƏ',ru:'ТВОРЧЕСКИЙ ПРОЕКТ'}, title:{az:'Video istehsalından seçilmiş iş',ru:'Избранный проект видеопроизводства'}, desc:{az:'Görülmüş işlərimizdən daha bir video təqdimat.',ru:'Ещё одна работа из нашего видеопортфолио.'}},
  {id:'I5CH23PC7Ww', tag:{az:'PORTFOLİO / YENİ İŞ',ru:'ПОРТФОЛИО / НОВАЯ РАБОТА'}, title:{az:'Çəkiliş və montaj layihəsi',ru:'Проект видеосъёмки и монтажа'}, desc:{az:'YouTube kanalında yayımlanmış video işimiz. Qapağa toxunaraq saytdan izləyə bilərsiniz.',ru:'Опубликованная видеоработа на YouTube. Нажмите на обложку для просмотра на сайте.'}},
  {id:'2vj5O-jU7KI', tag:{az:'SEÇİLMİŞ VİDEO İŞİ',ru:'ИЗБРАННАЯ ВИДЕОРАБОТА'}, title:{az:'Yeni video işi — portfolio',ru:'Новая видеоработа — портфолио'}, desc:{az:'Video çəkilişləri portfoliomuza əlavə edilmiş layihə.',ru:'Дополнительная работа в нашем портфолио видеосъёмок.'}}
];

const MUSIC = [
  {id:'Mfu_AdxfcmY', tag:{az:'MUSİQİ KLİPİ',ru:'МУЗЫКАЛЬНЫЙ КЛИП'}, title:{az:'Müğənni üçün musiqi klipi',ru:'Музыкальный клип для исполнителя'}, desc:{az:'Musiqi layihəsi üçün çəkiliş və post-istehsal işi.',ru:'Съёмка и постпродакшн музыкального проекта.'}},
  {id:'TyqncRew_IU', tag:{az:'MUSİQİ VƏ PERFORMANS',ru:'МУЗЫКА И ВЫСТУПЛЕНИЕ'}, title:{az:'Musiqi ifasının video təqdimatı',ru:'Видеопроект музыкального исполнения'}, desc:{az:'İfaçı ilə görülən musiqi videosu işi.',ru:'Музыкальная видеоработа для исполнителя.'}},
  {id:'KKvWUKEDWd8', tag:{az:'MUSİQİ KLİPİ',ru:'МУЗЫКАЛЬНЫЙ КЛИП'}, title:{az:'Salam Hüseyn · Seymur Qəzvini · Rüfət Dahi',ru:'Салам Гусейн · Сеймур Газвини · Руфат Дахи'}, desc:{az:'Müğənnilərin iştirakı ilə hazırlanan musiqi video layihəsi.',ru:'Музыкальный видеопроект с участием исполнителей.'}}
];
const TIKTOK_IDS = [
  ['7693403462456872212','video','Şaquli formatda video işi','Видеоработа в вертикальном формате'],
  ['7687750962525588757','photo','Foto paylaşımı və seçilmiş kadrlar','Фотопубликация и избранные кадры'],
  ['7640648271714635029','video','Sosial media üçün çəkiliş','Съёмка для социальных сетей'],
  ['7639887515712785684','video','Qısa video təqdimatı','Короткая видеопрезентация'],
  ['7625257746681646356','video','Portfoliodan qısa görüntülər','Короткие кадры из портфолио'],
  ['7625287640014671125','video','Şaquli video montajı','Монтаж вертикального видео'],
  ['7604825308117601556','video','Yaradıcı video paylaşımı','Творческая видеопубликация'],
  ['7566674275076246802','video','Çəkiliş prosesindən görüntülər','Кадры из процесса съёмки'],
  ['7566460728333372679','video','Sosial platformalar üçün video','Видео для социальных платформ'],
  ['7493837593415585042','video','Seçilmiş qısa formatlı iş','Избранная короткая видеоработа'],
  ['7407847993572986129','video','Video portfoliodan paylaşım','Публикация из видеопортфолио'],
  ['7705913826448903432','video','Sosial media üçün yeni çəkiliş işi','Новая видеоработа для социальных сетей'],
  ['7649178546635623700','video','Qısa formatlı çəkiliş paylaşımı','Видеопубликация в коротком формате'],
  ['7574539372482071826','video','Seçilmiş video çəkilişi','Избранная видеосъёмка']
];
const SHORTS = [
  ...TIKTOK_IDS.map(([id,kind,az,ru],i)=>({id,kind,platform:'tiktok', title:{az,ru},tag:{az:kind==='photo'?'TIKTOK · FOTO':'TIKTOK · QISA VİDEO',ru:kind==='photo'?'TIKTOK · ФОТО':'TIKTOK · КОРОТКОЕ ВИДЕО'}, url:`https://www.tiktok.com/@ahadaliyevv/${kind}/${id}`})),
  {id:'Dde-IaFN0hZ',platform:'instagram',kind:'video',title:{az:'Instagram üçün qısa video',ru:'Короткое видео для Instagram'},tag:{az:'INSTAGRAM · REELS',ru:'INSTAGRAM · REELS'},url:'https://www.instagram.com/reel/Dde-IaFN0hZ/'},
  {id:'DdkLq0iN7pA',platform:'instagram',kind:'video',title:{az:'Reels formatında video paylaşımı',ru:'Видеопубликация в формате Reels'},tag:{az:'INSTAGRAM · REELS',ru:'INSTAGRAM · REELS'},url:'https://www.instagram.com/reel/DdkLq0iN7pA/'},
  {id:'DY8nCD4qwlO',platform:'instagram',kind:'video',title:{az:'Sosial media portfoliodan Reels',ru:'Reels из портфолио для соцсетей'},tag:{az:'INSTAGRAM · REELS',ru:'INSTAGRAM · REELS'},url:'https://www.instagram.com/reel/DY8nCD4qwlO/'}
];
const SERVICES = [
  {az:['Toy və ailə mərasimləri','Toy, nişan, xına, ad günü və digər mərasimlər üçün video çəkilişi və montaj.'],ru:['Свадьбы и семейные торжества','Видеосъёмка и монтаж свадеб, помолвок, хны, дней рождения и других мероприятий.']},
  {az:['Reklam və biznes çəkilişi','Məhsul, məkan və xidmətlərin tanıtımı üçün reklam və təqdimat videoları.'],ru:['Реклама и бизнес','Рекламные и презентационные видеоролики для продуктов, заведений и услуг.']},
  {az:['Musiqi klipləri','Müğənnilər və musiqi layihələri üçün çəkiliş, montaj və rəng korreksiyası.'],ru:['Музыкальные клипы','Съёмка, монтаж и цветокоррекция клипов для исполнителей и музыкальных проектов.']},
  {az:['Dron və hava çəkilişi','DJI Air 3S ilə məkan, tədbir və obyektlərin hava görüntüləri.'],ru:['Съёмка с дрона','Аэросъёмка мероприятий, локаций и объектов с помощью DJI Air 3S.']},
  {az:['Sosial media videoları','TikTok, Instagram Reels və digər platformalar üçün qısa formatlı videolar.'],ru:['Видео для соцсетей','Короткие видео для TikTok, Instagram Reels и других платформ.']},
  {az:['Montaj və AI həlləri','Video montajı, rəng korreksiyası, səsin işlənməsi və uyğun layihələr üçün AI alətləri.'],ru:['Монтаж и AI-решения','Монтаж, цветокоррекция, обработка звука и AI-инструменты для подходящих проектов.']}
];
const I18N = {
 az: {
  skip:'Çəkilişlərimizə keç',navWorks:'Çəkilişlərimiz',navMusic:'Musiqi klipləri',navShorts:'Qısa videolar',navServices:'Xidmətlər',navAbout:'Haqqımda',navContact:'Əlaqə',navBook:'Sifariş göndər ↗',
  heroEyebrow:'2022-ci ildən peşəkar çəkiliş · Azərbaycan',heroTitle1:'İŞİNİZİ VƏ',heroTitle2:'ƏN VACİB ANLARINIZI',heroTitle3:'LENTƏ ALIRIQ.',heroDesc:'Toy və tədbirlər, reklam, musiqi klipləri və sosial media üçün çəkilişlər. Peşəkar kamera, dron və montaj imkanları ilə ideyadan hazır videoya qədər xidmət.',viewWorks:'Çəkilişlərimizə bax ↘',bookShoot:'Çəkiliş üçün müraciət et ↗',heroFact1:'TOY · TƏDBİR · REKLAM',heroFact2:'DRON · KLİP · MONTAJ',heroVisualLeft:'ÇƏKİLİŞ / MONTAJ',heroVisualRight:'VİDEONU İZLƏ ↗',
  stripOne:'TOY VƏ TƏDBİR ÇƏKİLİŞİ',stripTwo:'REKLAM VƏ BİZNES',stripThree:'DRON GÖRÜNTÜLƏRİ',stripFour:'MUSİQİ KLİPLƏRİ',
  worksEyebrow:'PORTFOLİO / ÇƏKİLİŞ LAYİHƏLƏRİ',worksTitle:'SEÇİLMİŞ ÇƏKİLİŞLƏRİMİZ',worksIntro:'Müxtəlif tədbir və layihələrdən görüntülər. Videoya toxunaraq birbaşa saytda izləyə bilərsiniz.',
  musicEyebrow:'MÜĞƏNNİLƏR ÜÇÜN GÖRÜLƏN İŞLƏR',musicTitle:'MUSİQİ KLİPLƏRİ',musicIntro:'Müğənnilər və musiqi layihələri üçün həyata keçirilən çəkiliş və montaj işlərindən nümunələr.',
  shortsEyebrow:'ŞAQULİ FORMAT / SOSİAL MEDİA',shortsTitle:'QISA VİDEOLAR VƏ PAYLAŞIMLAR',shortsIntro:'TikTok və Instagram üçün hazırlanan qısa formatlı işlər. Önizləməyə basdıqda paylaşım sayt daxilində açılır.',filterAll:'Hamısı',
  serviceEyebrow:'ÇƏKİLİŞDƏN YEKUN MONTAJA',servicesTitle:'XİDMƏTLƏR',serviceIntro:'İstəyinizə uyğun çəkiliş planı, müxtəlif rakurslar və səliqəli montaj.',
  gearEyebrow:'ÇƏKİLİŞ İMKANLARI',gearTitle:'HƏR LAYİHƏYƏ UYĞUN AVADANLIQ VƏ YANAŞMA',gearDesc:'Çəkilişin formatına görə əsas kamera, yığcam kamera, dron və post-istehsal alətlərindən istifadə edirəm.',gearSony:'Peşəkar kamera',gearDrone:'Dron çəkilişi',gearPocket:'Hərəkətli, yığcam çəkiliş',gearAi:'Rəng, səs və vizual işləmə',
  since:'2022-Cİ İLDƏN FƏALİYYƏTDƏ',aboutEyebrow:'ƏHƏD ƏLİYEV / VİDEOGRAF',aboutTitle:'HAQQIMDA',aboutOne:'Mən Əhəd Əliyev, AHADALIFILMS adı ilə 2022-ci ildən videografiya sahəsində fəaliyyət göstərirəm. Toy, nişan, xına, müxtəlif tədbirlər, reklam, biznes və musiqi layihələri üçün video çəkilişləri həyata keçirirəm.',aboutTwo:'İş prosesində Sony A7S III, DJI Air 3S dronu və DJI Osmo Pocket kimi avadanlıqlardan istifadə edirəm. Çəkilişdən sonra montaj, rəng korreksiyası, səs işlənməsi və uyğun layihələrdə süni intellekt əsaslı vizual həllər tətbiq edirəm.',aboutThree:'Mənim üçün əsas məqsəd sifarişin tələblərini düzgün başa düşmək, çəkilişi planlı aparmaq və nəticəni vaxtında, keyfiyyətli şəkildə təqdim etməkdir.',aboutChannel:'YouTube kanalımı ziyarət et ↗',aboutStoryTitle:'Videografiyaya necə başladım',aboutStoryDesc:'Bu videoda 2022-ci ildən başlayan iş yolumu süni intellekt vasitəsilə hazırladığım görüntülərlə təqdim edirəm.',aboutStoryYouTube:'YouTube-da aç ↗',
  bookingEyebrow:'SİFARİŞ / MÜRACİƏT',bookingTitle:'ÇƏKİLİŞİNİZİ PLANLAŞDIRAQ.',bookingIntro:'Xidmət, tarix, məkan və əlaqə nömrənizi yazın. Müraciət WhatsApp-da hazır mesaj kimi açılacaq.',stepOne:'MÜRACİƏT',stepTwo:'DETALLAR',stepThree:'ÇƏKİLİŞ',fieldService:'Xidmət növü',fieldSelect:'Xidmət seçin',optionWedding:'Toy və ailə mərasimləri',optionCommercial:'Biznes və reklam',optionMusic:'Musiqi klipi',optionDrone:'Dron çəkilişi',optionShorts:'Sosial media videosu',optionEditing:'Montaj və AI',optionOther:'Digər',fieldDate:'Çəkiliş tarixi',fieldLocation:'Məkan',fieldPhone:'Əlaqə nömrəsi',fieldDetails:'Əlavə məlumat',submit:'WhatsApp-da müraciəti aç ↗',formNotice:'Müraciət yalnız WhatsApp-da göndər düyməsini basdıqdan sonra çatır.',
  contactEyebrow:'ƏLAQƏ',contactTitle:'LAYİHƏNİZİ MÜZAKİRƏ EDƏK.',contactDesc:'Tarixi və çəkilişin növünü yazın. Ətraflı məlumatı dəqiqləşdirib sizə cavab verəcəyəm.',contactWhatsApp:'WhatsApp-da yazın ↗',contactPhone:'TELEFON',locationDesc:'Masallı, Qəzvinoba · Bakı və regionlar üzrə çəkilişlər',rights:'Bütün hüquqlar qorunur.',backTop:'Yuxarı qayıt ↑',
  playOnSite:'Saytda izlə',openOriginal:'Orijinal paylaşımı aç ↗',viewYouTube:'YouTube-da aç ↗',viewTikTok:'TikTok-da aç ↗',viewInstagram:'Instagram-da aç ↗',tiktokHint:'Video açılmırsa, TikTok paylaşımının məxfilik və bölgə məhdudiyyəti ola bilər. Orijinal linkdən istifadə edin.',instagramHint:'Instagram paylaşımı saytda açılmaya bilər. Orijinal paylaşım keçidi həmişə mövcuddur.',youtubeHint:'YouTube müəllifi videonun yerləşdirilməsini məhdudlaşdırıbsa, YouTube-da izləyin.',close:'Bağla',watchHere:'Saytda izləmək üçün aç',uploadNote:'Önizləmə təsviri. Orijinal video oynatmaq üçün toxunun.',navLabel:'Əsas naviqasiya',menuOpen:'Menyunu aç',menuClose:'Menyunu bağla',locationPh:'Masallı, Bakı...',detailsPh:'Çəkiliş barədə qısa məlumat...',bookingMessage:'Salam, AHADALIFILMS. Sayt vasitəsilə çəkiliş sifarişi üçün müraciət edirəm.',bookService:'Xidmət',bookDate:'Tarix',bookPlace:'Məkan',bookPhone:'Əlaqə nömrəsi',bookDetail:'Əlavə məlumat',unspecified:'Dəqiqləşdirilməyib',noDetail:'Qeyd edilməyib'
 },
 ru: {
  skip:'Перейти к съёмкам',navWorks:'Наши съёмки',navMusic:'Музыкальные клипы',navShorts:'Короткие видео',navServices:'Услуги',navAbout:'Обо мне',navContact:'Контакты',navBook:'Оставить заявку ↗',
  heroEyebrow:'Видеосъёмка с 2022 года · Азербайджан',heroTitle1:'СНИМАЕМ ВАШИ',heroTitle2:'ВАЖНЫЕ СОБЫТИЯ',heroTitle3:'И ПРОЕКТЫ.',heroDesc:'Свадьбы и мероприятия, реклама, музыкальные клипы и контент для соцсетей. Съёмка на профессиональные камеры и дрон, монтаж и подготовка готового видео.',viewWorks:'Смотреть наши съёмки ↘',bookShoot:'Заказать съёмку ↗',heroFact1:'СВАДЬБЫ · СОБЫТИЯ · РЕКЛАМА',heroFact2:'ДРОН · КЛИПЫ · МОНТАЖ',heroVisualLeft:'СЪЁМКА / МОНТАЖ',heroVisualRight:'СМОТРЕТЬ ВИДЕО ↗',
  stripOne:'СЪЁМКА СВАДЕБ И МЕРОПРИЯТИЙ',stripTwo:'РЕКЛАМА И БИЗНЕС',stripThree:'АЭРОСЪЁМКА',stripFour:'МУЗЫКАЛЬНЫЕ КЛИПЫ',
  worksEyebrow:'ПОРТФОЛИО / ВИДЕОПРОЕКТЫ',worksTitle:'ИЗБРАННЫЕ СЪЁМКИ',worksIntro:'Видео с мероприятий и различных проектов. Нажмите на обложку, чтобы смотреть прямо на сайте.',
  musicEyebrow:'РАБОТЫ ДЛЯ ИСПОЛНИТЕЛЕЙ',musicTitle:'МУЗЫКАЛЬНЫЕ КЛИПЫ',musicIntro:'Примеры съёмки и монтажа музыкальных клипов и проектов для исполнителей.',
  shortsEyebrow:'ВЕРТИКАЛЬНОЕ ВИДЕО / СОЦСЕТИ',shortsTitle:'КОРОТКИЕ ВИДЕО И ПУБЛИКАЦИИ',shortsIntro:'Короткие работы для TikTok и Instagram. Нажмите на обложку, чтобы открыть публикацию прямо на сайте.',filterAll:'Все',
  serviceEyebrow:'ОТ СЪЁМКИ ДО ФИНАЛЬНОГО МОНТАЖА',servicesTitle:'УСЛУГИ',serviceIntro:'Планирование съёмки, разные ракурсы и качественный монтаж под вашу задачу.',
  gearEyebrow:'ОБОРУДОВАНИЕ',gearTitle:'ОБОРУДОВАНИЕ И ПОДХОД ДЛЯ КАЖДОГО ПРОЕКТА',gearDesc:'В зависимости от формата проекта использую основную камеру, компактную камеру, дрон и инструменты постпродакшна.',gearSony:'Профессиональная камера',gearDrone:'Аэросъёмка',gearPocket:'Компактная динамичная съёмка',gearAi:'Цвет, звук и визуальная обработка',
  since:'РАБОТАЮ С 2022 ГОДА',aboutEyebrow:'ЭХАД АЛИЕВ / ВИДЕОГРАФ',aboutTitle:'ОБО МНЕ',aboutOne:'Меня зовут Эхад Алиев. С 2022 года я занимаюсь видеографией под брендом AHADALIFILMS. Снимаю свадьбы, помолвки, семейные торжества, мероприятия, рекламные, бизнес- и музыкальные проекты.',aboutTwo:'В работе использую Sony A7S III, дрон DJI Air 3S и компактную камеру DJI Osmo Pocket. После съёмки выполняю монтаж, цветокоррекцию, обработку звука и, когда это уместно, применяю AI-инструменты.',aboutThree:'Моя задача — понять запрос клиента, грамотно организовать съёмку и представить качественный результат в согласованные сроки.',aboutChannel:'Перейти на мой YouTube-канал ↗',aboutStoryTitle:'Как я начал заниматься видеосъёмкой',aboutStoryDesc:'В этом видео я рассказываю о своём профессиональном пути с 2022 года с помощью визуальных материалов, созданных мной с использованием искусственного интеллекта.',aboutStoryYouTube:'Открыть на YouTube ↗',
  bookingEyebrow:'ЗАКАЗ / ЗАЯВКА',bookingTitle:'ДАВАЙТЕ СПЛАНИРУЕМ СЪЁМКУ.',bookingIntro:'Укажите услугу, дату, место и контактный номер. Сообщение откроется в WhatsApp, где вы сможете его отправить.',stepOne:'ЗАЯВКА',stepTwo:'ДЕТАЛИ',stepThree:'СЪЁМКА',fieldService:'Вид услуги',fieldSelect:'Выберите услугу',optionWedding:'Свадьбы и семейные торжества',optionCommercial:'Бизнес и реклама',optionMusic:'Музыкальный клип',optionDrone:'Аэросъёмка',optionShorts:'Видео для соцсетей',optionEditing:'Монтаж и AI',optionOther:'Другое',fieldDate:'Дата съёмки',fieldLocation:'Место',fieldPhone:'Контактный номер',fieldDetails:'Дополнительная информация',submit:'Открыть заявку в WhatsApp ↗',formNotice:'Заявка будет получена только после отправки сообщения в WhatsApp.',
  contactEyebrow:'КОНТАКТЫ',contactTitle:'ОБСУДИМ ВАШ ПРОЕКТ.',contactDesc:'Напишите дату и вид съёмки. Я уточню детали и отвечу вам.',contactWhatsApp:'Написать в WhatsApp ↗',contactPhone:'ТЕЛЕФОН',locationDesc:'Масаллы, Газвиноба · съёмки в Баку и регионах',rights:'Все права защищены.',backTop:'Наверх ↑',
  playOnSite:'Смотреть на сайте',openOriginal:'Открыть оригинал ↗',viewYouTube:'Открыть на YouTube ↗',viewTikTok:'Открыть в TikTok ↗',viewInstagram:'Открыть в Instagram ↗',tiktokHint:'Если видео не запускается, возможно, действуют ограничения TikTok по региону или приватности. Используйте ссылку на оригинал.',instagramHint:'Публикация Instagram может быть недоступна для встраивания. Ссылка на оригинал всегда доступна.',youtubeHint:'Если владелец запретил встраивание, откройте видео на YouTube.',close:'Закрыть',watchHere:'Нажмите, чтобы смотреть на сайте',uploadNote:'Обложка-превью. Нажмите для воспроизведения оригинала.',navLabel:'Основная навигация',menuOpen:'Открыть меню',menuClose:'Закрыть меню',locationPh:'Масаллы, Баку...',detailsPh:'Кратко опишите съёмку...',bookingMessage:'Здравствуйте, AHADALIFILMS. Хочу оставить заявку на видеосъёмку с сайта.',bookService:'Услуга',bookDate:'Дата',bookPlace:'Место',bookPhone:'Контактный номер',bookDetail:'Дополнительно',unspecified:'Ещё не определено',noDetail:'Не указано'
 }
};
Object.assign(I18N.az,{
 mapEyebrow:'ÜNVAN / XƏRİTƏ',mapTitle:'BİZİ XƏRİTƏDƏ TAPIN',mapAddress:'AHADALIFILMS · Qəzvinoba, Masallı 4437, Azərbaycan',mapHint:'Ünvanı görmək və marşrut qurmaq üçün xəritəni açın.',mapOpen:'Google Maps-də aç ↗'
});
Object.assign(I18N.ru,{
 mapEyebrow:'АДРЕС / КАРТА',mapTitle:'НАШ АДРЕС НА КАРТЕ',mapAddress:'AHADALIFILMS · Газвиноба, Масаллы 4437, Азербайджан',mapHint:'Откройте карту, чтобы посмотреть адрес и построить маршрут.',mapOpen:'Открыть в Google Maps ↗'
});

const INSTAGRAM_VIDEOS={"Dde-IaFN0hZ":"assets/instagram/Dde-IaFN0hZ-v12.mp4","DY8nCD4qwlO":"assets/instagram/DY8nCD4qwlO-v12.mp4"};
const COVERS={"7693403462456872212":"assets/tiktok-covers/7693403462456872212.webp","7687750962525588757":"assets/tiktok-covers/7687750962525588757.webp","7640648271714635029":"assets/tiktok-covers/7640648271714635029.webp","7639887515712785684":"assets/tiktok-covers/7639887515712785684.webp","7625257746681646356":"assets/tiktok-covers/7625257746681646356.webp","7625287640014671125":"assets/tiktok-covers/7625287640014671125.webp","7604825308117601556":"assets/tiktok-covers/7604825308117601556.webp","7566674275076246802":"assets/tiktok-covers/7566674275076246802.webp","7566460728333372679":"assets/tiktok-covers/7566460728333372679.webp","7407847993572986129":"assets/tiktok-covers/7407847993572986129-v12.webp","7705913826448903432":"assets/tiktok-covers/7705913826448903432.webp","7649178546635623700":"assets/tiktok-covers/7649178546635623700.webp","7493837593415585042":"assets/tiktok-covers/7493837593415585042-v12.webp","7574539372482071826":"assets/tiktok-covers/7574539372482071826-v12.webp"};
let lang=document.documentElement.lang==='ru'?'ru':'az';
const el=id=>document.getElementById(id);
const tr=k=>I18N[lang][k]||I18N.az[k]||k;
const asset=file=>(lang==='ru'?'../':'')+file;
function safe(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const copy={
 az:{loading:'Yüklənir…',retry:'Yenidən cəhd et',failed:'Paylaşım yüklənmədi.',close:'Videonu bağla',phone:'Düzgün telefon nömrəsi daxil edin (məsələn, +994 50 000 00 00).',date:'Keçmiş tarix seçilə bilməz.',results:n=>`${n} paylaşım göstərilir.`},
 ru:{loading:'Загрузка…',retry:'Повторить',failed:'Не удалось загрузить публикацию.',close:'Закрыть видео',phone:'Введите корректный номер телефона (например, +994 50 000 00 00).',date:'Нельзя выбрать прошедшую дату.',results:n=>`Показано публикаций: ${n}.`}
};
function youtubeCard(item){
 const a=item.title[lang];
 return `<article class="video-card"><button type="button" class="video-cover media-play" data-platform="youtube" data-id="${item.id}" data-title="${safe(a)}" aria-label="${safe(tr('playOnSite'))}: ${safe(a)}"><img src="https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg" alt="${safe(a)} — YouTube" width="1280" height="720" loading="lazy" decoding="async"><span class="play-icon" aria-hidden="true">▶</span></button><div class="card-content"><span class="tag">${safe(item.tag[lang])}</span><h3>${safe(a)}</h3><p>${safe(item.desc[lang])}</p><div class="card-footer"><small>${safe(tr('playOnSite'))}</small><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/${item.id}">${safe(tr('viewYouTube'))}</a></div></div></article>`;
}
function shortCard(item){
 const a=item.title[lang],tt=item.platform==='tiktok';
 const preview=tt
  ? `<img class="tiktok-original-poster" src="${asset(COVERS[item.id])}" alt="${safe(a)} — TikTok" width="360" height="640" loading="lazy" decoding="async">`
  : `<img class="instagram-local-poster" src="${asset("assets/instagram/"+item.id+".webp")}" alt="${safe(a)} — Instagram" width="720" height="1280" loading="lazy" decoding="async">`;
 return `<article class="short-card" data-short-platform="${item.platform}" data-short-id="${item.id}"><div class="short-cover original-social-cover social-cover-host"><button type="button" class="short-cover media-play original-social-cover" data-platform="${item.platform}" data-id="${item.id}" data-title="${safe(a)}" data-url="${safe(item.url)}" aria-label="${safe(tr('playOnSite'))}: ${safe(a)}">${preview}<span class="platform-stamp">${tt?'TIKTOK':'REELS'}</span><span class="play-icon" aria-hidden="true">▶</span><span class="short-cover-label">${safe(tr('watchHere'))}</span></button></div><div class="card-content"><span class="tag">${safe(item.tag[lang])}</span><h3>${safe(a)}</h3><div class="card-footer"><small>${safe(tr('playOnSite'))}</small><a target="_blank" rel="noopener noreferrer" href="${safe(item.url)}">${safe(tr(tt?'viewTikTok':'viewInstagram'))}</a></div></div></article>`;
}
function serviceCards(){return SERVICES.map((s,i)=>`<article class="service-card"><span class="service-number">${String(i+1).padStart(2,'0')}</span><h3>${safe(s[lang][0])}</h3><p>${safe(s[lang][1])}</p></article>`).join('');}

// No personal data is sent to an analytics service. Integrations may listen to this event.
function measure(name,platform){
 const detail={name,platform:platform||'site'};
 try{const key='ahadalifilms-events';const counts=JSON.parse(sessionStorage.getItem(key)||'{}');counts[name]=(Number(counts[name])||0)+1;sessionStorage.setItem(key,JSON.stringify(counts));}catch{}
 document.dispatchEvent(new CustomEvent('ahadalifilms:conversion',{detail}));
}
let activeTikTok=null;
function stopTikTok(restoreFocus=false){
 if(!activeTikTok)return;
 const state=activeTikTok;activeTikTok=null;clearTimeout(state.timer);
 state.frame.remove();state.status.remove();state.close.remove();state.button.hidden=false;
 state.host.classList.remove('is-playing');state.host.removeAttribute('aria-busy');
 if(restoreFocus)state.button.focus();
}
function showPlayerError(state){
 if(activeTikTok!==state)return;
 clearTimeout(state.timer);state.frame.remove();state.host.setAttribute('aria-busy','false');
 state.status.replaceChildren();
 const text=document.createElement('p');text.textContent=copy[lang].failed;
 const retry=document.createElement('button');retry.type='button';retry.className='btn btn-gold';retry.textContent=copy[lang].retry;
 retry.addEventListener('click',()=>{stopTikTok();playTikTok(state.button);});
 const link=document.createElement('a');link.href=state.button.dataset.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=tr('viewTikTok');
 state.status.append(text,retry,link);state.status.hidden=false;
 measure('embed_error','tiktok');
}
function playTikTok(button){
 stopTikTok();
 const host=button.parentElement,frame=document.createElement('iframe');
 frame.className='tiktok-direct-iframe';frame.title=button.dataset.title+' — TikTok';
 frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;
 frame.referrerPolicy='strict-origin-when-cross-origin';
 frame.src='https://www.tiktok.com/player/v1/'+encodeURIComponent(button.dataset.id)+'?autoplay=1&controls=1&music_info=0&description=0&rel=0';
 const status=document.createElement('div');status.className='player-status';status.setAttribute('role','status');status.textContent=copy[lang].loading;
 const close=document.createElement('button');close.type='button';close.className='tiktok-inline-close';close.textContent='✕';close.setAttribute('aria-label',copy[lang].close);close.addEventListener('click',()=>stopTikTok(true));
 button.hidden=true;host.classList.add('is-playing');host.setAttribute('aria-busy','true');host.append(frame,status,close);
 const state={host,frame,status,close,button,timer:null};activeTikTok=state;
 state.timer=setTimeout(()=>showPlayerError(state),20000);
 frame.addEventListener('error',()=>showPlayerError(state));close.focus();measure('video_open','tiktok');
}
window.addEventListener('message',event=>{
 const state=activeTikTok;
 if(!state||event.origin!=='https://www.tiktok.com'||event.source!==state.frame.contentWindow)return;
 const data=event.data;if(!data||typeof data!=='object'||data['x-tiktok-player']!==true)return;
 if(data.type==='onPlayerReady'){
  clearTimeout(state.timer);state.status.hidden=true;state.frame.classList.add('is-ready');state.host.setAttribute('aria-busy','false');
 }else if(data.type==='onPlayerError'){
  // A browser may decline autoplay; keep manual playback available in that case.
  if(Number(data.value?.errorCode||data.errorCode)===3002){clearTimeout(state.timer);state.status.hidden=true;state.frame.classList.add('is-ready');state.host.setAttribute('aria-busy','false');}
  else showPlayerError(state);
 }
});
if('IntersectionObserver' in window){
 const playbackObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(activeTikTok&&entry.target===activeTikTok.host&&!entry.isIntersecting)stopTikTok();}},{threshold:0});
 document.querySelectorAll('.social-cover-host').forEach(host=>playbackObserver.observe(host));
}
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTikTok();});
let lastTrigger=null,modalTimer=null;
let inertRecords=[];
function setBackgroundInert(on){
 if(on){inertRecords=Array.from(document.body.children).filter(n=>n!==el('videoModal')&&n.tagName!=='SCRIPT').map(n=>[n,n.inert]);inertRecords.forEach(([n])=>n.inert=true);}
 else{inertRecords.forEach(([n,was])=>n.inert=was);inertRecords=[];}
}
function closeModal(){
 clearTimeout(modalTimer);
 const video=el('modalMedia').querySelector('video');if(video){video.pause();video.removeAttribute('src');video.load();}
 el('modalMedia').replaceChildren();el('videoModal').setAttribute('aria-hidden','true');document.body.style.overflow='';setBackgroundInert(false);
 if(lastTrigger?.isConnected)lastTrigger.focus();lastTrigger=null;
}
function openModal(button){
 stopTikTok();if(el('videoModal').getAttribute('aria-hidden')==='false')closeModal();
 const {platform,id,title,url}=button.dataset;
 lastTrigger=button;el('modalTitle').textContent=title;el('modalPlatform').textContent=platform.toUpperCase();
 el('modalExternal').href=url||'https://youtu.be/'+id;el('modalHint').textContent=tr(platform==='youtube'?'youtubeHint':'instagramHint');
 const media=el('modalMedia');media.className='modal-media '+(platform==='youtube'?'ratio-wide':'ratio-short');media.replaceChildren();
 let frame;
 if(platform==='instagram'&&INSTAGRAM_VIDEOS[id]){
  frame=document.createElement('video');frame.controls=true;frame.playsInline=true;frame.preload='metadata';frame.poster=asset('assets/instagram/'+id+'.webp');frame.src=asset(INSTAGRAM_VIDEOS[id]);frame.setAttribute('aria-label',title);
  frame.addEventListener('error',()=>{el('modalHint').textContent=copy[lang].failed+' '+tr('openOriginal');});
 }else if(platform==='instagram'){
  frame=document.createElement('img');frame.src=asset('assets/instagram/'+id+'.webp');frame.alt=title;
  el('modalHint').textContent=lang==='ru'?'Instagram ограничивает воспроизведение этой публикации на сайте. Откройте оригинал.':'Instagram bu paylaşımın saytda oynadılmasını məhdudlaşdırır. Orijinal paylaşımı açın.';
 }else{
  frame=document.createElement('iframe');frame.title=title;frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
  frame.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0&playsinline=1';
 }
 media.append(frame);el('videoModal').setAttribute('aria-hidden','false');setBackgroundInert(true);document.body.style.overflow='hidden';el('closeModal').focus();
 if(platform==='youtube')modalTimer=setTimeout(()=>{el('modalHint').textContent=tr('youtubeHint')+' '+tr('openOriginal');},18000);
 frame.addEventListener('load',()=>clearTimeout(modalTimer),{once:true});
 frame.addEventListener('error',()=>el('modalHint').textContent=copy[lang].failed+' '+tr('openOriginal'),{once:true});
 if(frame.tagName==='VIDEO'){el('modalHint').textContent=lang==='ru'?'Нажмите кнопку воспроизведения, чтобы посмотреть видео.':'Videonu izləmək üçün oynatma düyməsinə basın.';frame.play().catch(()=>{});}
 measure('video_open',platform);
}
function setFilter(value){
 const filter=['all','tiktok','instagram'].includes(value)?value:'all';
 if(activeTikTok&&filter!=='all'&&filter!=='tiktok')stopTikTok();
 document.querySelectorAll('#shortFilters .filter').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 let count=0;document.querySelectorAll('[data-short-platform]').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.shortPlatform!==filter;if(!card.hidden)count++;});
 el('filterStatus').textContent=copy[lang].results(count);
}
function closeMenu(){el('mainNav').classList.remove('open');el('menuBtn').setAttribute('aria-expanded','false');el('menuBtn').setAttribute('aria-label',tr('menuOpen'));}
function localDate(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function validateBooking(){
 const phone=el('phone'),date=el('date'),raw=phone.value.trim(),digits=raw.replace(/\D/g,'');
 const valid=/^\+?[\d\s().-]+$/.test(raw)&&digits.length>=7&&digits.length<=15&&(!digits.startsWith('994')||digits.length===12)&&(!/^0/.test(digits)||digits.length===10);
 phone.setCustomValidity(valid||!raw?'':copy[lang].phone);date.min=localDate();date.setCustomValidity(date.value&&date.value<date.min?copy[lang].date:'');
}
const draftFields=['service','date','location','phone','details'];
function saveDraft(){try{const values=Object.fromEntries(draftFields.map(id=>[id,el(id).value]));sessionStorage.setItem('ahadalifilms-draft',JSON.stringify({time:Date.now(),values}));}catch{}}
function restoreDraft(){try{const d=JSON.parse(sessionStorage.getItem('ahadalifilms-draft')||'null');if(d&&Date.now()-d.time<2*60*60*1000){draftFields.forEach(id=>{if(typeof d.values?.[id]==='string')el(id).value=d.values[id];});}else sessionStorage.removeItem('ahadalifilms-draft');}catch{}}
function bookOnWhatsapp(e){
 e.preventDefault();validateBooking();if(!el('bookingForm').reportValidity())return;
 saveDraft();const s=el('service');const lines=[tr('bookingMessage'),'',`${tr('bookService')}: ${s.options[s.selectedIndex].text}`,`${tr('bookDate')}: ${el('date').value||tr('unspecified')}`,`${tr('bookPlace')}: ${el('location').value.trim()||tr('unspecified')}`,`${tr('bookPhone')}: ${el('phone').value.trim()}`,`${tr('bookDetail')}: ${el('details').value.trim()||tr('noDetail')}`];
 measure('whatsapp_form_open','whatsapp');window.location.href='https://wa.me/994513387100?text='+encodeURIComponent(lines.join('\n'));
}
function imageFallback(event){
 const img=event.target;if(!(img instanceof HTMLImageElement))return;
 if(img.src.includes('i.ytimg.com/')&&!img.dataset.hq){img.dataset.hq='1';img.src=img.src.replace('/maxresdefault.jpg','/hqdefault.jpg');}
 else if(img.src.includes('i.ytimg.com/'))img.src=asset('assets/video-preview.svg');
 else if(img.classList.contains('tiktok-original-poster'))img.hidden=true;
}
document.addEventListener('error',imageFallback,true);
document.querySelectorAll('img').forEach(img=>{if(img.complete&&img.naturalWidth===0)imageFallback({target:img});});
el('year').textContent=String(new Date().getFullYear());
el('menuBtn').addEventListener('click',()=>{const open=el('mainNav').classList.toggle('open');el('menuBtn').setAttribute('aria-expanded',String(open));el('menuBtn').setAttribute('aria-label',tr(open?'menuClose':'menuOpen'));});
el('mainNav').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();closeMenu();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
document.addEventListener('click',e=>{
 const button=e.target.closest('.media-play');if(button){if(button.dataset.platform==='tiktok')playTikTok(button);else openModal(button);}
 const wa=e.target.closest('a[href^="https://wa.me/"]');if(wa)measure('whatsapp_link_open','whatsapp');
});
el('shortFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)setFilter(b.dataset.filter);});
el('closeModal').addEventListener('click',closeModal);document.querySelector('[data-close]').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){if(el('videoModal').getAttribute('aria-hidden')==='false')closeModal();else if(activeTikTok)stopTikTok(true);else{closeMenu();el('menuBtn').focus();}}
 if(e.key==='Tab'&&el('videoModal').getAttribute('aria-hidden')==='false'){
  const first=el('closeModal'),last=el('modalExternal');
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
document.addEventListener('focusin',e=>{if(el('videoModal').getAttribute('aria-hidden')==='false'&&!el('videoModal').contains(e.target))el('closeModal').focus();});
el('bookingForm').addEventListener('submit',bookOnWhatsapp);
el('bookingForm').addEventListener('input',()=>{validateBooking();saveDraft();});
el('bookingForm').addEventListener('change',()=>{validateBooking();saveDraft();});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();if(b.dataset.lang===lang)return;saveDraft();window.location.href=(b.dataset.lang==='ru'?'ru/':'../')+window.location.hash;}));
restoreDraft();validateBooking();
