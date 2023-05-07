import React from "react";
import "./NewsCard.css";
import { Link } from 'react-router-dom'; 
import img from '../../images/main-banner.jpg';

function NewsCard(props) {

  return (
    <div className="news__item">
      <img src={props.news.mainImage} alt="Фото события" className="news__item-img"></img>
      <div className="news__item-info-block">
        <p className="news__item-title">{props.news.title}</p>
        <p className="news__item-date">{`${props.news.date.slice(0,2)} / ${props.news.date.slice(3,5)}`}</p>
        <p className="news__item-description">{props.news.description}</p>
        <Link to={props.linkPath} className="news__item-link">
          <p className="news__item-link-text">Читать</p>
          <div className="news__item-link-line"></div>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;