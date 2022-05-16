      let Famousauthors = [{             
    author: 'J.k Rowling',
BooksPublished: '10 Books',
    img: 'images/Rowling.jpg'
},
{
    author: 'Stephen King',
   BooksPublished: '61 Books',
    img: 'images/King.jpg'
},
{
    author: 'Danielle Steel',
    BooksPublished: '179 Books',
    img: 'images/danielle.jpg'
}];

document.getElementById("rowling").src=Famousauthors[0].img
document.getElementById("J.K Rowling 10 Books").innerHTML=Famousauthors[0].author +'<br>'+Famousauthors[0].BooksPublished
document.getElementById("king").src=Famousauthors[1].img
document.getElementById("Stephen King 61 Novels").innerHTML=Famousauthors[1].author +'<br>'+Famousauthors[1].BooksPublished
document.getElementById("danielle").src=Famousauthors[2].img
document.getElementById("Danielle Steel 179 Books").innerHTML=Famousauthors[2].author +'<br>'+Famousauthors[2].BooksPublished

let newRelease = [                    
    {
        Img: 'Images/glass hotel.jpg',
        Name: 'The Glass hotel',
        author: 'Emily St.John',
        category: "Mystery"
    },
    {
        Img: 'Images/book of longings.jpg',
        Name: 'The Book Of Lomgings',
        author: 'Sue Monk',
        category: 'Fiction'
    },
    {
        Img: 'Images/darling rose gold.jpg',
        Name: 'Darling Rose Gold',
        author: 'Stephanie Wrobel',
        category: 'Thriller'
    },
    {
        Img: 'Images/vanessa.jpg',
        Name: 'My Dark Vanessa',
        author: 'My Dark Vanessa',
        category: 'Mystery'
    },
    {
        Img: 'Images/weather.jpg',
        Name: 'Weather',
        author: 'Jenny Offill',
        category: 'Mystery'
    },
    
    
];


function AddBooks() {

    newRelease.forEach((item, i) =>{

        let book = document.getElementById('book');
        let bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        book.append(bookInfo);
        let Img = document.createElement('img');
        Img.src = newRelease[i].Img;
        bookInfo.append(bookImg);
        let Name = document.createElement('h3');
        Name.innerHTML = newRelease[i].Name;
        bookInfo.append(Name);
        let nameOfAuthor = document.createElement('p');
        nameOfAuthor.innerHTML = newRelease[i].author;
        bookInfo.append(nameOfAuthor);
        let category = document.createElement('button');
        category.innerHTML =newRelease[i].category;
        bookInfo.append(category);

    });
    

}
AddBooks();
let lastReadBooks = [              
    {
        Img: 'Images/harry potter.jpg',
        Name: 'Harry Potter And The Sorcerers Stone',
        comment: '193 Page . Chapter 13 . Last read',
    },
    {
       Img: 'Images/TA NEHISI.jpg',
        Name: 'TA Nehisi Coates The Water Dancer.jpg',
        comment: 'New Purchase . Yet to Read',
    },
    {
        Img: 'Images/father.jpg',
        Name: 'The Story Of A Father And Son',
      
    }
    
];


