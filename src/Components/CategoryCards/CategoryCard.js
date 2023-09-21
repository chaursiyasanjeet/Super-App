import { useRef } from "react";
import "./CategoryCards.css";

function CategoryCard({
  name,
  img,
  bgColor,
  cardSelect,
  setCardSelect,
  selectedStatus,
}) {
  const selected = useRef(null);

  const handleselect = (e) => {
    const cardName = selected.current.innerText;
    selected.current.classList.toggle("selected");
    const exist = cardSelect.indexOf(cardName);

    if (exist !== -1) {
      cardSelect.splice(exist, 1);
      setCardSelect([...cardSelect]);
    } else {
      setCardSelect([...cardSelect, cardName]);
    }
  };

  return (
    <div
      ref={selected}
      onClick={handleselect}
      className={`cards ${selectedStatus ? "selected" : ""}`}
      style={{ background: bgColor }}
    >
      {name} <img src={img} alt="action" />
    </div>
  );
}

export default CategoryCard;
