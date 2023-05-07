import React from "react";
import "./AddNewsPage.css";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

function AddNewsPage(props) {
  React.useEffect(() => {
    props.setIsHeaderVisible(false);
  }, []);
  
  const navigate = useNavigate();

  const nameRef = React.useRef();
  const dateRef = React.useRef();
  const descriptionRef = React.useRef();
  const mainImgRef = React.useRef();
  const image1Ref = React.useRef();
  const image2Ref = React.useRef();
  const image3Ref = React.useRef();
  const image4Ref = React.useRef();
  const image5Ref = React.useRef();

  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  function goBack() {
    navigate(-1);
  }

  function handleChange(e) {
    setIsBtnDisabled(!(nameRef.current.value && 
      dateRef.current.value && 
      dateRef.current.value.match(/\d{2}\.\d{2}\.\d{4}/g) &&
      descriptionRef.current.value && 
      mainImgRef.current.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let data = {
      title: nameRef.current.value,
      date: dateRef.current.value,
      description: `${descriptionRef.current.value}`,
      mainImage: mainImgRef.current.value };

    let photos = [];

    if (image1Ref.current.value.length !== 0) {
      photos.push(image1Ref.current.value)
    } if (image2Ref.current.value.length !== 0) {
      photos.push(image2Ref.current.value)
    } if (image3Ref.current.value.length !== 0) {
      photos.push(image3Ref.current.value)
    } if (image4Ref.current.value.length !== 0) {
      photos.push(image4Ref.current.value)
    } if (image5Ref.current.value.length !== 0) {
      photos.push(image5Ref.current.value)
    }

    props.postNews(data, photos)
  }

  return (
    <section className="add-news">
      <div className='add-news__header add-news__header_underlined'>
        <p className='add-news__title'>Добавить событие</p>
        <div className="add-news__close-icon" onClick={goBack}></div>
      </div>
      <form
        method="get"
        action="index.html"
        name="new-news"
        className='add-news__form'
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        onChange={handleChange}
        id="new-news"
      >
        <label className="add-news__form-field" htmlFor="new-news">
          <input name="new-news"
            type="text"
            required
            ref={nameRef}
            placeholder="Название" id="name"
            className="add-news__form-input add-news__form-input_phone"
          ></input>
        </label>

        <div className="add-news__images">
          {/* <button type="button" className="add-product__images-btn"></button> */}
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              required
              ref={mainImgRef}
              placeholder="Ссылка на фото" id="main-image"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              ref={image1Ref}
              placeholder="Ссылка на фото" id="image-1"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              ref={image2Ref}
              placeholder="Ссылка на фото" id="image-2"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              ref={image3Ref}
              placeholder="Ссылка на фото" id="image-3"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              ref={image4Ref}
              placeholder="Ссылка на фото" id="image-4"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
          <label className="add-news__form-field" htmlFor="new-news">
            <input name="new-news"
              type="text"
              ref={image5Ref}
              placeholder="Ссылка на фото" id="image-5"
              className="add-news__form-input add-news__form-input_phone"
            ></input>
          </label>
        </div>

        <label className="add-news__form-field add-news__form-field_description" htmlFor="new-news">
          <textarea name="new-news"
            type="text"
            required
            ref={descriptionRef}
            placeholder="Описание" id="description"
            className="add-news__form-input add-news__form-input_description"
          ></textarea>
        </label>
        <label className="add-news__form-field" htmlFor="new-news">
          {/* <input name="new-news"
            type="text"
            required
            ref={dateRef}
            placeholder="Дата публикации" id="date"
            className="add-news__form-input add-news__form-input_date"
          ></input> */}
          <InputMask 
            name="new-news"
            type="text"
            required
            ref={dateRef}
            placeholder="Дата публикации" id="date"
            className="add-news__form-input add-news__form-input_date"
            mask='99.99.9999'
            maskChar=" " />
        </label>

        <button type="submit" disabled={isBtnDisabled} className={`add-news__form-submit ${isBtnDisabled ? 'add-news__form-submit_disabled' : ''}`}>Сохранить</button>
      </form>
    </section>
  );
}

export default AddNewsPage;
