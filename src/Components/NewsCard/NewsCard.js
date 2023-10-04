import "./NewsCard.css";
import { useState, useEffect } from "react";

function NewsCard() {
  const [news, setNews] = useState();
  const fetchNews = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=41591e7024dc47c48999ce6c589ae8ce"
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
    <>
      <img
        className="news-img"
        src={
          news
            ? news.urlToImage
            : "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/GettyImages-1662782212.jpg"
        }
        alt="news"
      />
      <p className="news-content">
        {news
          ? news.content
          : "Do you remember way back in 2021 when Elon Musk was the darling of the Left of the cultural elite? He was building electric cars and then launching them into space on rockets he built. He went to all"}
      </p>
      <div className="news-title">
        {news ? news.title : "Biden's war on everything Elon Musk"}
        <span>{news ? news.publishedAt : "10-4-2023|09:33 AM"}</span>
      </div>
    </>
  );
}

export default NewsCard;
