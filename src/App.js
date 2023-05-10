import './style/reset.css';
import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const bannerTitle = 'We believe well-being is for everyone';
  const bannerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut."
  const galleryList = [
    {
        "_id": "62eac4e9d5bf9a40c02dbe0e",
        "title": "Jurassic Park",
        "year": 1993,
        "runningTime": "2h 7m",
        "description": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "genre": [
            "Adventure",
            "Action",
            "Sci-Fi"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg",
        "slug": "jurassic-park",
        "__v": 0
    },
    {
        "_id": "62eac5532822550a1dcc291c",
        "title": "Eternals",
        "year": 2021,
        "runningTime": "2h 37m",
        "description": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
        "genre": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/eternals.jpg",
        "slug": "eternals",
        "__v": 0
    },
    {
        "_id": "62eac5702822550a1dcc2921",
        "title": "The Matrix",
        "year": 1999,
        "runningTime": "2h 16m",
        "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth - the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "genre": [
            "Action",
            "Sci-Fi"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg",
        "slug": "the-matrix",
        "__v": 0
    },
    {
        "_id": "62eac57d2822550a1dcc2924",
        "title": "Ocean's Eleven",
        "year": 2001,
        "runningTime": "1h 56m",
        "description": "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.",
        "genre": [
            "Crime",
            "Thriller"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/oceans-eleven.jpg",
        "slug": "oceans-eleven",
        "__v": 0
    },
    {
        "_id": "62eac5862822550a1dcc2926",
        "title": "F9: The Fast Saga",
        "year": 2021,
        "runningTime": "2h 25m",
        "description": "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
        "genre": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/f9-the-fast-saga.jpg",
        "slug": "f9-the-fast-saga",
        "__v": 0
    },
    {
        "_id": "62eac5b62822550a1dcc292b",
        "title": "JFK",
        "year": 1991,
        "runningTime": "3h 26m",
        "description": "New Orleans District Attorney Jim Garrison discovers there's more to the Kennedy assassination than the official story.",
        "genre": [
            "Drama",
            "History",
            "Thriller"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/jfk.jpg",
        "slug": "jfk",
        "__v": 0
    },
    {
        "_id": "62eac5be2822550a1dcc292d",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "runningTime": "2h 58m",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "genre": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/the-fellowship-of-the-ring.jpg",
        "slug": "the-fellowship-of-the-ring",
        "__v": 0
    },
    {
        "_id": "62eac5c62822550a1dcc292f",
        "title": "No Time to Die",
        "year": 2021,
        "runningTime": "2h 43m",
        "description": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "genre": [
            "Action",
            "Adventure",
            "Thriller"
        ],
        "poster": "https://raw.githubusercontent.com/mrspecht/media/main/img/no-time-to-die.jpg",
        "slug": "no-time-to-die",
        "__v": 0
    },


  ]

  return (
    <>
      <Header></Header>
      <Banner bannerTitle={bannerTitle} bannerText={bannerText}></Banner>
      <Gallery galleryList={galleryList}></Gallery>
      <Footer></Footer>
    </>
  );
}

export default App;
