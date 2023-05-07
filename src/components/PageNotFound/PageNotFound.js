import React from "react";
import "./PageNotFound.css";
import { useNavigate } from 'react-router-dom';


function PageNotFound(props) {
  React.useEffect(() => {
    props.setIsHeaderVisible(false);
  }, []);

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__caption">Страница не найдена</p>
      <p className="not-found__link" onClick={goBack}>
        Назад
      </p>
    </section>
  );
}

export default PageNotFound;
