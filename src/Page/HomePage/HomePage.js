import { useState, useEffect } from "react";
import "./HomePage.css";

function HomePage() {
  const [news, setNews] = useState();
  const fetchNews = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=41591e7024dc47c48999ce6c589ae8ce"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const articleNo = Math.floor(Math.random() * 20);

        const inputDate = new Date(data.articles[articleNo].publishedAt);
        const dateFormat = `${
          +inputDate.getMonth() + 1
        }-${inputDate.getDate()}-${inputDate.getFullYear()} | ${inputDate.toLocaleString(
          "en-US",
          { hour: "numeric", minute: "numeric", hour12: true }
        )}`;
        data.articles[articleNo].publishedAt = dateFormat;

        setNews(data.articles[articleNo]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="homepage-container">
      <section className="left-part">kjdsakk</section>
      <section className="right-part">
        <img src={news && news.urlToImage} alt="news" />
        <p>{news && news.content}</p>
        <div className="news-title">
          {news && news.title}
          <span>{news && news.publishedAt}</span>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
