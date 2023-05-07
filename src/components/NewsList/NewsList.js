import React from "react";
import "./NewsList.css";
import NewsCard from "../NewsCard/NewsCard";


function NewsList(props) {
  
  return (
    <div className="news__items">
      {props.news && props.news.length !== 0 &&
          props.news.map((n, i) => {
            return (
              <NewsCard
                news={n}
                key={i}
                submitSearchForm={(v) => props.submitSearchForm(v)}
                // setProductPageId={() => props.setProductPageId(product._id)}
                linkPath={`/news/${n._id}`}
              />
            );
          })}
    </div>
  );
}

export default NewsList;