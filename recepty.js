const recepty = [
  {
    nadpis: 'Ovocný tvarohový dort',
    popis: 'Poslední roky u mě v létě vedl pusinkový dort Pavlova na mnoho a mnoho způsobů, ale letos mám nového favorita. Už jsem zkoušela mnoho verzí a je vždy výborný, lehký i svěží a tak ideální ne jen na léto.',
    hodnoceni: 4.4,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    nadpis: 'Těstoviny s pestem',
    popis: 'Pesto v tomto receptu je připraveno bez sýra – místo něj jsou použity dvě celé palice pečeného česneku. Špagety budou díky tomu skvěle dochucené!',
    hodnoceni: 4.2,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=1350&q=80'
  },
  {
    nadpis: 'Palačinka s medem a oříšky',
    popis: 'Nepomyslil, zničeně, očima zisk ta vina krevních, mě dře praha sám peče šíp čem unaven!',
    hodnoceni: 3.6,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54182d2977056d28bd299799b8428fa6&auto=format&fit=crop&w=634&q=80'
  },
  {
    nadpis: 'Chléb s avokádem a vajíčkem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    nadpis: 'Čokoládové brownie',
    popis: '11 omrzení schůdkách mu i očima o nos rys by šerého. Vodu po obejmout víte, to co haf otiskem přísní, uchu u taška prohrál u kuse lože, už že ví potřeby u chudáku. Vykoná ta o citů mstivě některá tahle z světů či odseděl lupiče?',
    hodnoceni: 4.9,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    nadpis: 'Vajíčková omeleta se špenátem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1494597706938-de2cd7341979?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dc5376ce585ce0df0d44232b9bab53c&auto=format&fit=crop&w=1379&q=80'
  },
  {
    nadpis: 'Kuřecí salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
    nadpis: 'Sýrová pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&s=8695cc99c49c956556f7411faf6df8b0&auto=format&fit=crop&w=1350&q=80'
  },
  {
    nadpis: 'Kuřecí roláda',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.6,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24e11e05a26a3b992c8469426a628a90&auto=format&fit=crop&w=675&q=80'
  },
  {
    nadpis: 'Borůvkovo-tvarohový dezert',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&s=a48ebf1c62105a202c421db95caa3b48&auto=format&fit=crop&w=634&q=80'
  },
  {
    nadpis: 'Hovězí steak',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    nadpis: 'Tiramisu',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1502004960551-dc67f7c24cb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ffa9224ea62436ebb99ebf25c50be60&auto=format&fit=crop&w=1320&q=80'
  },
  {
    nadpis: 'Ceasar salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.9,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1350&q=80'
  },
  {
    nadpis: 'Sladký toast s ovocem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&s=b2f8991c8bfaac59a8d115930d9c12cd&auto=format&fit=crop&w=1350&q=80'
  },
  {
    nadpis: 'Vegetariánská pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516183483970-cedfa98169fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a8ffb099b40dc89c12cec6a7f0a68a&auto=format&fit=crop&w=1350&q=80'
  },
  {
    nadpis: 'Křupavé kuře',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.3,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353c1f4206a931db97274e65329b85d8&auto=format&fit=crop&w=634&q=80'
  },
]

let kontejner = document.querySelector('.kontejner');

for (let i = 0; i < recepty.length; i++) {
  const seznam = document.querySelector('.recepty');

  const recept = document.createElement('div');
  recept.classList.add('recept');

  const receptObrazek = document.createElement('div');
  receptObrazek.classList.add('recept-obrazek');

  const obrazek = document.createElement('img');
  obrazek.src = recepty[i].img;
  obrazek.alt = recepty[i].stitek;

  const receptInfo = document.createElement('div');
  receptInfo.classList.add('recept-info');

  const jmenoReceptu = document.createElement('h3');
  jmenoReceptu.classList.add('h3');
  jmenoReceptu.textContent = recepty[i].nadpis;

  receptObrazek.appendChild(obrazek);
  receptInfo.appendChild(jmenoReceptu)
  recept.appendChild(receptObrazek);
  recept.appendChild(receptInfo);
  seznam.appendChild(recept);
  kontejner.appendChild(seznam);

  recept.setAttribute('data-recept-index', i);
  recept.addEventListener('click', function () { zobrazRecept(i) });
  recept.setAttribute('data-hodnoceni', recepty[i].hodnoceni);
}

function zobrazRecept(receptIndex) {
  const element = document.querySelector('.recept-detail');
  element.remove();

  let receptDetail = document.createElement('div');
  receptDetail.classList.add('recept-detail');
  let receptDetailObrazek = document.createElement('div');
  receptDetailObrazek.classList.add('recept-detail-obrazek');
  let receptDetailInfo = document.createElement('div');
  receptDetailInfo.classList.add('recept-detail-info');
  let receptFoto = document.createElement('img');
  receptFoto.id = 'recept-foto';
  let receptKategorie = document.createElement('div');
  receptKategorie.classList.add('recept-kategorie');
  let receptHodnoceni = document.createElement('div');
  receptHodnoceni.classList.add('recept-hodnoceni');
  let receptNazev = document.createElement('h1');
  receptNazev.id = 'recept-nazev';
  let receptPopis = document.createElement('p');
  receptPopis.id = 'recept-popis';
  let hlavicka = document.createElement('header');

  receptDetailObrazek.appendChild(receptFoto);
  receptDetail.appendChild(receptDetailObrazek);
  hlavicka.appendChild(receptKategorie);
  hlavicka.appendChild(receptHodnoceni);
  receptDetailInfo.appendChild(hlavicka);
  receptDetailInfo.appendChild(receptNazev);
  receptDetailInfo.appendChild(receptPopis);
  receptDetail.appendChild(receptDetailInfo);
  kontejner.appendChild(receptDetail);

  receptFoto.src = recepty[receptIndex].img;
  receptKategorie.textContent = recepty[receptIndex].kategorie;
  receptHodnoceni.textContent = recepty[receptIndex].hodnoceni;
  receptNazev.textContent = recepty[receptIndex].nadpis;
  receptPopis.textContent = recepty[receptIndex].popis;

  localStorage.ulozenyRecept = JSON.stringify(recepty[receptIndex]);
  let ulozenyRecept = localStorage.ulozenyRecept;
}

function nactiRecept() {
  let ulozenyRecept = localStorage.ulozenyRecept;
  if (ulozenyRecept === null || ulozenyRecept === undefined) {
    return;
  } else {
    JSON.parse(ulozenyRecept);

    let receptDetail = document.createElement('div');
    receptDetail.classList.add('recept-detail');
    let receptDetailObrazek = document.createElement('div');
    receptDetailObrazek.classList.add('recept-detail-obrazek');
    let receptDetailInfo = document.createElement('div');
    receptDetailInfo.classList.add('recept-detail-info');
    let receptFoto = document.createElement('img');
    receptFoto.id = 'recept-foto';
    let receptKategorie = document.createElement('div');
    receptKategorie.classList.add('recept-kategorie');
    let receptHodnoceni = document.createElement('div');
    receptHodnoceni.classList.add('recept-hodnoceni');
    let receptNazev = document.createElement('h1');
    receptNazev.id = 'recept-nazev';
    let receptPopis = document.createElement('p');
    receptPopis.id = 'recept-popis';
    let hlavicka = document.createElement('header');

    receptDetailObrazek.appendChild(receptFoto);
    receptDetail.appendChild(receptDetailObrazek);
    hlavicka.appendChild(receptKategorie);
    hlavicka.appendChild(receptHodnoceni);
    receptDetailInfo.appendChild(hlavicka);
    receptDetailInfo.appendChild(receptNazev);
    receptDetailInfo.appendChild(receptPopis);
    receptDetail.appendChild(receptDetailInfo);
    kontejner.appendChild(receptDetail);

    receptFoto.src = JSON.parse(ulozenyRecept).img;
    receptKategorie.textContent = JSON.parse(ulozenyRecept).kategorie;
    receptHodnoceni.textContent = JSON.parse(ulozenyRecept).hodnoceni;
    receptNazev.textContent = JSON.parse(ulozenyRecept).nadpis;
    receptPopis.textContent = JSON.parse(ulozenyRecept).popis;
  }
}

function vyberKategorii() {
  let schovaneReceptyId = [];
  let kategorie = document.getElementById('kategorie').value;
  for (let i = 0; i < recepty.length; i++) {
    if (kategorie === '') {
      schovaneReceptyId.push(false);
    } else if (kategorie != recepty[i].kategorie) {
      schovaneReceptyId.push(true);
    } else {
      schovaneReceptyId.push(false);
    }
  }
  const receptyKategorie = document.querySelectorAll('.recept');
  for (let i = 0; i < receptyKategorie.length; i++) {
    if (schovaneReceptyId[i]) {
      receptyKategorie[i].style.display = 'none';
    } else {
      receptyKategorie[i].style.display = 'flex';
    }
  }
}

function comparator(a, b) {
  if (a.dataset.hodnoceni < b.dataset.hodnoceni)
    return -1;
  if (a.dataset.hodnoceni > b.dataset.hodnoceni)
    return 1;
  return 0;
}

function serad() {
  let razeni = document.getElementById('razeni').value;

  let indexes = document.querySelectorAll("[data-hodnoceni]");
  let indexesArray = Array.from(indexes);
  let sorted = indexesArray.sort(comparator);

  if (razeni === '2') {
    sorted.forEach(element =>
      document.querySelector(".recepty").appendChild(element));
  } else if (razeni === '1') {
    sorted.reverse();
    sorted.forEach(element =>
      document.querySelector(".recepty").appendChild(element));
  }
}

function hledej() {
  let hledani = document.querySelector('#hledat').value;
  const receptyHledej = document.querySelectorAll('.recept');
  recepty_matched = recepty.filter(element => element.nadpis.toLowerCase().includes(hledani.toLowerCase()));
  recepty_indexes_show = recepty_matched.map(e => recepty.indexOf(e));

  for (let i = 0; i < recepty.length; i++) {
    if (recepty_indexes_show.includes(i)) {
      receptyHledej[i].style.display = 'flex';
    } else {
      receptyHledej[i].style.display = 'none';
    }
  }
}

let logo = document.querySelector('.logo');
logo.addEventListener('click', obnov);

function obnov() {
  location.reload();
}