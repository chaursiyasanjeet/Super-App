import "./HomePage.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Note from "../../Components/Notes/Note";
import UserDetails from "../../Components/UserDetails/UserDetails";

function HomePage() {
  return (
    <div className="homepage-container">
      <section className="left-part">
        <div className="left-top">
          <div className="left-top-left">
            <UserDetails />
            <div className="weather-details"></div>
          </div>
          <Note />
        </div>

        <div className="timer"></div>
      </section>

      <section className="right-part">
        <NewsCard />
      </section>
    </div>
  );
}

export default HomePage;
