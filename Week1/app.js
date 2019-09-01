'use strict';

{
  const bookCollection = [
    // Replace with your own book titles
    'born_a_crime',
    'fiker_eske_mekabir',
    'gracha_kacheloch',
    'I_am_zlatan_ibrahimovic',
    'the_watch_man',
    'my_decade_in_the_premier_league',
    'land_of_fire',
    'tower_in_the_sky',
    'yesenebet_kelemat',
    'yetekolefebet_kulf',
  ];

  // Replace with your own code
  console.log(bookCollection);

  const bookInfo = {
    born_a_crime: {
      title: 'Born a Crime',
      language: 'English',
      year: '2016',
    },
    fiker_eske_mekabir: {
      title: 'Fiker eske Mekabir',
      language: 'Amharic',
      year: '1968',
    },
    gracha_kacheloch: {
      title: 'Gracha Kacheloch',
      language: 'Amharic',
      year: '2015',
    },
    I_am_zlatan_ibrahimovic: {
      title: 'I am Zlatan Ibrahimovic',
      language: 'English',
      year: '2011',
    },
    the_watch_man: {
      title: 'The Watch Man',
      language: 'English',
      year: '1986',
    },
    my_decade_in_the_premier_league: {
      title: 'My Decade in the premier league',
      language: 'English',
      year: '2012',
    },
    land_of_fire: {
      title: 'Land of Fire',
      language: 'English',
      year: '2017',
    },
    tower_in_the_sky: {
      title: 'Tower in the sky',
      language: 'English',
      year: '2012',
    },
    yesenebet_kelemat: {
      title: 'Yesenebet Kelemat',
      language: 'Amharic',
      year: '2016',
    },
    yetekolefebet_kulf: {
      title: 'Yetekolefebet Kulf',
      language: 'Amharic',
      year: '2013',
    },
  };

  const bookCover = {
    born_a_crime: 'images/img1.jpg',
    fiker_eske_mekabir: 'images/img2.jpg',
    gracha_kacheloch: 'images/img3.jpg',
    I_am_zlatan_ibrahimovic: 'images/img4.jpg',
    the_watch_man: 'images/img5.jpg',
    my_decade_in_the_premier_league: 'images/img6.jpg',
    land_of_fire: 'images/img7.jpg',
    tower_in_the_sky: 'images/img8.jpg',
    yesenebet_kelemat: 'images/img9.jpg',
    yetekolefebet_kulf: 'images/img10.jpg',
  };

  let newUl = document.createElement('ul');
  document.getElementById('bookList').appendChild(newUl);

  bookCollection.forEach(function(book) {
    let newLi = document.createElement('li');
    newLi.innerHTML += book;
    newUl.appendChild(newLi);

    let bookCollection = document.createElement('h2');
    newUl.appendChild(bookCollection);
    bookCollection.innerHTML += Object.getOwnPropertyNames(bookCollection);
  });

  //////////////////////

  /*
    function displayBookInfo() {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    for (let key in bookInfo) {
        document.body.appendChild(container);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'main-div');
        let bookTitle = document.createElement('ul');
        let myHeader = document.createElement('h2');
        bookTitle.appendChild(myHeader);
        newDiv.appendChild(bookTitle);
        container.appendChild(newDiv);
        myHeader.innerHTML = bookInfo[key].title;
        let bookPicture = document.createElement('img');
        bookPicture.setAttribute('src', bookCover[key]);
        newDiv.appendChild(bookPicture);
        bookPicture.setAttribute('class', 'bookImage');
        let bookLanguage = document.createElement('li');
        bookTitle.appendChild(bookLanguage);
        bookLanguage.innerHTML = 'Language: ' + bookInfo[key].language;
        let bookYear = document.createElement('li');
        bookTitle.appendChild(bookYear);
        bookYear.innerHTML = 'Publication year: ' + bookInfo[key].year;
        }
    }*/
}
