import "./HomePage.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Note from "../../Components/Notes/Note";
import UserDetails from "../../Components/UserDetails/UserDetails";
import Weather from "../../Components/Weather/Weather";
import Timer from "../../Components/Timer/Timer";
function HomePage() {
  return (
    <div className="homepage-container">
      <section className="left-part">
        <div className="left-top">
          <div className="left-top-left">
            <UserDetails />
            <Weather />
          </div>
          <Note />
        </div>
        <div className="left-bottom">
          <Timer />
        </div>
      </section>

      <section className="right-part">
        <NewsCard />
      </section>
    </div>
  );
}

export default HomePage;
