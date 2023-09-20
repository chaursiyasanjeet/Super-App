import "./CategoryCards.css";
function CategoryCard({ name, img, bgColor }) {
  return (
    <div className="cards" style={{ background: bgColor }}>
      {name} <img src={img} alt="action" />
    </div>
  );
}

export default CategoryCard;
