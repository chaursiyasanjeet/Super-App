import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryChoose.css";
import cross from "../../assets/cross.png";
import errorIcon from "../../assets/error.png";
import CategoryCard from "../../Components/CategoryCards/CategoryCard";
import action from "../../assets/action.png";
import thriller from "../../assets/thriller.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import western from "../../assets/western.png";
import horror from "../../assets/horror.png";

function CategoryChoose() {
  const redirect = useNavigate();

  const [cardSelect, setCardSelect] = useState([]);
  const [error, setError] = useState(false);

  const cardData = [
    { name: "Action", img: action, bgColor: " rgba(255, 82, 9, 1)" },
    { name: "Drama", img: drama, bgColor: "rgba(215, 164, 255, 1)" },
    { name: "Romance", img: romance, bgColor: "rgba(20, 138, 8, 1)" },
    { name: "Thriller", img: thriller, bgColor: "rgba(132, 194, 255, 1)" },
    { name: "Western", img: western, bgColor: "rgba(144, 37, 0, 1)" },
    { name: "Horror", img: horror, bgColor: "rgba(115, 88, 255, 1)" },
    { name: "Fantasy", img: fantasy, bgColor: "rgba(255, 74, 222, 1)" },
    { name: "Music", img: music, bgColor: "rgba(230, 30, 50, 1)" },
    { name: "Fiction", img: fiction, bgColor: "rgba(108, 208, 97, 1)" },
  ];

  const handleclick = () => {
    if (cardSelect.length >= 3) {
      setError(false);
      localStorage.setItem("categories", JSON.stringify(cardSelect));
      redirect("/homepage");
    } else {
      setError(true);
    }
  };

  const deselectCard = (e) => {
    const findIndex = cardSelect.indexOf(e.target.alt);
    cardSelect.splice(findIndex, 1);
    setCardSelect([...cardSelect]);
  };

  const data = cardSelect.map((item, index) => {
    return (
      <div>
        {item}
        <img onClick={deselectCard} src={cross} alt={item} />
      </div>
    );
  });

  return (
    <div className="category-container">
      <div className="side-view">
        <h3>Super app</h3>
        <p>Choose your entertainment category</p>
        <div className="selected-category">{data}</div>
        {error && (
          <div className="error">
            <img src={errorIcon} alt="alert_icon" />
            Minimum 3 category required
          </div>
        )}
      </div>
      <div className="category-cards-box">
        {cardData.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              name={item.name}
              img={item.img}
              bgColor={item.bgColor}
              cardSelect={cardSelect}
              setCardSelect={setCardSelect}
              selectedStatus={cardSelect.includes(item.name) ? true : false}
            />
          );
        })}
      </div>
      <button onClick={handleclick}>Next Page</button>
    </div>
  );
}

export default CategoryChoose;
