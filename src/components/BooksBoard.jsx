import Books from "./Books";
import BooksActions from "./BooksActions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import book from "../assets/book.png";
import { useState } from "react";


const BooksBoard = () => {

  const defaultData = [
    {
      id: crypto.randomUUID().toString(),
      title: "The Silent Patient",
      author: "Alex Michaelides",
      publicationDate: "2019-02-05",
      price: "20",
      rating: "4.5",
      isFavorite: false,
      cover: book // Assuming 'book' is a placeholder for the cover image or object
    },
    {
      id: crypto.randomUUID().toString(),
      title: "Educated",
      author: "Tara Westover",
      publicationDate: "2018-02-20",
      price: "18",
      rating: "4.7",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      publicationDate: "2018-08-14",
      price: "25",
      rating: "4.8",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "The Night Circus",
      author: "Erin Morgenstern",
      publicationDate: "2011-09-13",
      price: "22",
      rating: "4.4",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "Big Little Lies",
      author: "Liane Moriarty",
      publicationDate: "2014-07-29",
      price: "19",
      rating: "4.3",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "The Goldfinch",
      author: "Donna Tartt",
      publicationDate: "2013-10-22",
      price: "30",
      rating: "4.6",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "Gone Girl",
      author: "Gillian Flynn",
      publicationDate: "2012-06-05",
      price: "15",
      rating: "4.1",
      isFavorite: false,
      cover: book
    },
    {
      id: crypto.randomUUID().toString(),
      title: "The Martian",
      author: "Andy Weir",
      publicationDate: "2014-09-30",
      price: "17",
      rating: "4.7",
      isFavorite: false,
      cover: book
    },
  ];
  
  const [books, setBooks] = useState(defaultData)

  const handleFavorite = (bookId) => {
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      })
    );
  }

  const handleSearch = (searchTerm) => {
   const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
   setBooks(filteredBooks);
  }

  const handleSort =(sortOption) => {
    let sortedBooks = [...books];
    switch (sortOption) {
      case 'name_asc':
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'year_asc':
        sortedBooks.sort((a, b) => {
          const yearA = new Date(a.publicationDate).getFullYear();
          const yearB = new Date(b.publicationDate).getFullYear();
          return yearA - yearB;
        });
        break;
      case 'year_desc':
        sortedBooks.sort((a, b) => {
          const yearA = new Date(a.publicationDate).getFullYear();
          const yearB = new Date(b.publicationDate).getFullYear();
          return yearB - yearA;
        });
        break;
      default:
        // No sorting
        break;
    }
    
    setBooks(sortedBooks);
  }

  return (
    <>
     <NavBar />
      <main className="my-10 lg:my-14">
        <BooksActions onSearch={handleSearch} onSortChange={handleSort}/>
        <Books books={books} onFavorite={handleFavorite}/>
      </main>
      <Footer/>
    </>
  );
};

export default BooksBoard;
