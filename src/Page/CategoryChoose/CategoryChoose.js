import "./CategoryChoose.css"
import cross from "../../assets/cross.png"
import error from "../../assets/error.png"

function CategoryChoose() {
    return (
        <div className="category-container">
            <div className="side-view">
                <h3>Super app</h3>
                <p>Choose your entertainment category</p>
                <div className="selected-category">
                    <div>Romance<img src={cross} alt="close_icon" /></div>
                    <div>Thriller<img src={cross} alt="close_icon" /></div>
                    <div>Action<img src={cross} alt="close_icon" /></div>
                </div>
                <div className="error">
                    <img src={error} alt="alert_icon" />
                    Minimum 3 category required
                </div>
            </div>
        </div>
    )
}

export default CategoryChoose