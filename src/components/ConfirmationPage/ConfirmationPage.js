import React from "react";
import "./ConfirmationPage.css";
import Preloader from "../Preloader/Preloader";

function ConfirmationPage(props) {

  React.useEffect(() => {
    props.setIsHeaderVisible(false);
  }, []);

  function goBack() {
    props.navigate('/catalog');
  }

  return (
    <div className="confirmation">
      <div className="confirmation__header">
        <p className="confirmation__title"></p>
        <div className="confirmation__close-icon" onClick={goBack}></div>
      </div>
      {props.isLoading || !props.orderStatus ?
          <Preloader />
        :
        (props.orderStatus === 'OK' ?
          <p className="confirmation__message">Ваш заказ принят,<br/>мы скоро с вами свяжемся!</p>
        :
        <p className="confirmation__message">Что-то пошло не так, попробуйте позже<br/>или свяжитесь с нами по телефону +7 123 456-78-90</p>)
      }
      
    </div>
  );
}

export default ConfirmationPage;
