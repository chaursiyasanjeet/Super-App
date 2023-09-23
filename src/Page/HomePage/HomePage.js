import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Note from "../../Components/Notes/Note";
import UserDetails from "../../Components/UserDetails/UserDetails";
import Weather from "../../Components/Weather/Weather";
import Timer from "../../Components/Timer/Timer";

function HomePage() {
  const redirect = useNavigate();
  const handleClick = () => {
    redirect("/movie");
  };

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
      <button onClick={handleClick}>Browse</button>
    </div>
  );
}

export default HomePage;
