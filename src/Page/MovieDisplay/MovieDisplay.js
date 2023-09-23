import "./MovieDisplay.css";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profileMovie.png";

import MovieCard from "../../Components/MovieCard";

function MovieDisplay() {
  const redirect = useNavigate();

  const data = JSON.parse(localStorage.getItem("categories"));

  return (
    <div className="movie-container">
      <section className="title-box">
        <div>
          <h1>Super app</h1>
          <img
            onClick={() => redirect("./homepage")}
            src={profile}
            alt="profile"
          />
        </div>
        <h2 className="entertainment">
          Entertainment according to your choice
        </h2>
      </section>
      <section className="movie-box">
        {data.map((item, index) => {
          return <MovieCard category={item} key={index} />;
        })}
      </section>
      <button
        onClick={() => {
          redirect("/category");
        }}
      >
        Select Again
      </button>
    </div>
  );
}

export default MovieDisplay;
