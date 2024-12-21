import React, {useState, useEffect} from "react";
import "./home.css"; // Separate CSS for Home
import videoBg from '../assets/3.mp4'
import Footer from "../components/footer";

const bibleVerses = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd, I lack nothing.",
  "Philippians 4:13 - I can do all things through Christ...",
  "Romans 8:28 - And we know that in all things God works for the good...",
  "Proverbs 3:5 - Trust in the Lord with all your heart...",
];

const Home = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const verseInterval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % bibleVerses.length);
    }, 20000); // Change verse every 5 seconds

    return () => clearInterval(verseInterval);
  }, []);
  return (
    <>
      <main className="home-main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="welcome-message">
          <h1>CSI St. Matthew's Church</h1>
          <p>
            "The Lord is a refuge for the oppressed, a stronghold in times of
            trouble" 
            <br />
            - Psalm 9:9
          </p>
        </div>
        {/* <div className="verse-strip">
          <p>{bibleVerses[currentVerse]}</p>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
