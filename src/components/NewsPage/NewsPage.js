import React from "react";
import "./NewsPage.css";
import SearchForm from "../SearchForm/SearchForm";
import ImageSwiper from "../ImageSwiper/ImageSwiper";
import InputMask from 'react-input-mask';


function NewsPage(props) {

  React.useEffect(() => {
    props.setIsHeaderVisible(true);
    props.getNews();
    props.getNewsPhotos();
    props.getProducts()
  }, []);

  const [isEdited, setIsEdited] = React.useState(false);

  const [formValues, setValues] = React.useState(props.news ? {"title": props.news.title, "date": props.news.date, "description": `${props.news.description}`} : {});

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...formValues, [name]: `${value}` });
  };

  function handleIsEdited() {
    setIsEdited(!isEdited);
  }

  function handleSubmit(e) {
    e.preventDefault();


    if (isEdited) {
      if (formValues.date && formValues.date.match(/\d{2}\.\d{2}\.\d{4}/g)) {
        props.onUpdate(props.news._id, formValues);
        props.getNews();
        handleIsEdited();
      }
      
    } else {
      handleIsEdited();
    }
    
    
  }

  return (
    <section className="news-page">
      <SearchForm
          products={props.products}
          getProducts={props.getProducts}
          searchedProducts={props.searchedProducts}
          submitSearchForm={(v) => props.submitSearchForm(v)}
          setErr={props.setIsNotFoundErrVisible}
          setProducts={props.setProducts}
          cartItems={props.cartItems}
          history={props.history}
          isSearching={props.isSearching}
          setIsSearching={props.setIsSearching}
          request={props.request}
          setRequest={props.setRequest}
          setSearchedProducts={props.handleSearchedProducts} />

      {/* <img src={img} alt="Фото события" className="news-page__img"></img> */}

      {props.isAdmin &&
        <div className='product__admin-btns'>
          <button type="button" onClick={() => props.deleteNews(props.news)} className="product__delete-btn">Удалить</button>
          <button onClick={handleSubmit} className="product__edit-btn">
            <p className="product__edit-btn-txt">{isEdited ? 'Сохранить' : 'Изменить'}</p>
            <div className={`product__edit-btn-icon ${isEdited ? 'product__edit-btn-icon_save' : 'product__edit-btn-icon_edit'}`}></div>
          </button>
        </div>
      }

      {isEdited ?
        <div className="edited-news">
          <img alt="Фото товара" src={props.news && props.news.mainImage} className="edited-news__img"></img>
          <form
            method="get"
            action="index.html"
            name="news"
            className='edited-news__form'
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <label className="edited-news__form-field" htmlFor="news">
              <input name="title"
                type="text"
                required
                onChange={handleChange}
                value={formValues.title}
                placeholder="Заголовок" id="title"
                className="edited-news__form-input edited-news__form-input_title"
              ></input>
            </label>
            <label className="edited-news__form-field" htmlFor="date">
              {/* <input name="date"
                type="text"
                required
                onChange={handleChange}
                value={formValues.date}
                placeholder="Дата публикации" id="date"
                className="edited-news__form-input edited-news__form-input_date"
              ></input> */}
              <InputMask 
                name="date"
                type="text"
                required
                onChange={handleChange}
                value={formValues.date}
                placeholder="Дата публикации" id="date"
                className="edited-news__form-input edited-news__form-input_date"
                mask='99.99.9999'
                maskChar=" " />
            </label>
            <label className="edited-news__form-field" htmlFor="description">
              <textarea name="description"
                type="text"
                required
                onChange={handleChange}
                value={formValues.description}
                placeholder="Описание" id="description"
                className="edited-news__form-input edited-news__form-input_description"
              ></textarea>
            </label>
          </form>
        </div>
        :
        <div className="news-page__news">
          <p className="news-page__news-title news-page__news-title_mobile">{props.news.title}</p>
          <p className="news-page__news-date news-page__news-date_mobile">{`${props.news.date.slice(0,2)} / ${props.news.date.slice(3,5)}`}</p>

          <div className="news-page__news-img-container">
            <ImageSwiper product={props.news && props.news} photos={props.newsPhotos && props.newsPhotos.filter((ph) => ph.newId === props.news._id)} />
          </div>
          
          <div className="news-page__news-info-block">
            <p className="news-page__news-title news-page__news-title_desktop">{props.news.title}</p>
            <p className="news-page__news-date news-page__news-date_desktop">{`${props.news.date.slice(0,2)} / ${props.news.date.slice(3,5)}`}</p>
            <p className="news-page__news-info">{props.news.description.split('\n').map((str, i) => (
              <React.Fragment key={i}>
                {str}
                <br />
              </React.Fragment>
            ))}</p>
          </div>
        </div>
      }
    </section>
  );
}

export default NewsPage;