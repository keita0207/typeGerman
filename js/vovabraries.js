const hamburgermenu = document.querySelector('.hamburgermenu');
const list = document.querySelector('.list');
const field = document.getElementById('field');
const words = {'auf':'~上に','teur':'高価な','immer':'常に','gleich':'直ぐに','best':'ベスト','circa':'約~','doktor':'医者','dame':'女性','eltern':'両親',
               'lachen':'笑う','kino':'~映画館','wollen':'~を欲しがる','teil':'部分','preis':'価格','prospekt':'見込み','möbel':'家具','gut':'良い','über':'約~','klasse':'クラス',
               'gruß':'大きい','also':'~なので','haus':'家','lange':'長い','hilfe':'助け','hoch':'高い','schön':'美しい','dein':'君の','küche':'~','sehen':'キッチン','wein':'ワイン'};

const wordsTwo = {'reiseführer':'旅行ガイド','schwimmbad':'水泳','straßenbahn':'トラム','telefonieren':'電話をする','unterschreiben':'見分ける','ausgegehen':'行く','ausgesprachen':'話す',
               'windersehen':'再び合う','verheiratet':'結婚する','überweissen':'移動させる','speisekarte':'メニュー','pünktlich':'時間通り','geöffnet':'開ける','reisebüro':'旅行業者','schmecken':'匂いを嗅ぐ',
               'einladen':'招待する','frühstücken':'朝食を食べる','familiename':'姓名','einzelzimmer':'一人部屋','großmutter':'祖母','diskutieren':'議論する','anfrubeantworter':'曖昧な言葉',
               'Lebensmiffel':'食品','mitmachen':'参加する','geburtsort':'出生地','glückwunsch':'祝い','hausaufgabe':'宿題','international':'国際的な','jugendliche':'若い','kennenlernen':'知る'};
let storeWords = ''
let storeWordsTwo = ''

hamburgermenu.addEventListener('click',()=>{
    list.classList.toggle('active');
    hamburgermenu.classList.toggle('active');
})
