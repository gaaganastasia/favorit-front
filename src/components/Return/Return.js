import React from "react";
import "./Return.css";
import SearchForm from "../SearchForm/SearchForm";
import { Collapse } from 'react-collapse';
import Preloader from "../Preloader/Preloader";



function Return(props) {
  const [defFormValue, setDefValue] = React.useState(props.returnInfo.default);
  const [fireFormValue, setFireValue] = React.useState(props.returnInfo.fire);

  React.useEffect(() => {
    props.setIsHeaderVisible(true);
    props.getReturnInfo();
    setDefValue(props.returnInfo.default);
    setFireValue(props.returnInfo.fire);
    //console.log(props.returnInfo.default)
    props.getProducts();
    props.setIsSearching(false)
  }, []);


  const [isEdited, setIsEdited] = React.useState(false);
  const [isFireOpened, setIsFireOpened] = React.useState(false);

  const handleDefChange = (e) => {
    const target = e.target;
    const value = target.value;
    setDefValue(value);
  };

  const handleFireChange = (e) => {
    const target = e.target;
    const value = target.value;
    setFireValue(value);
  };

  function handleIsEdited() {
    setIsEdited(!isEdited);
    setDefValue(props.returnInfo.default);
    setFireValue(props.returnInfo.fire);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdited) {
      //props.onUpdate(props.news._id, formValues);
      // console.log({default: `${defFormValue}`, fire: `${fireFormValue}`})
      props.onUpdate('643fbd880b02eb36e4b88bea', {"category": "default", "info": `${defFormValue}`});
      props.onUpdate('643fbd930b02eb36e4b88bec', {"category": "Пиротехника", "info": `${fireFormValue}`});
    }
    
    handleIsEdited();
  }

  const height = 'auto';


  return (
    <section className="return">
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
          request={props.request}
          setRequest={props.setRequest}
          setIsSearching={props.setIsSearching}
          setSearchedProducts={props.handleSearchedProducts} />

      <h2 className="return__title">Возврат</h2>

      {(props.isLoading || !props.returnInfo.default) ? (
          <Preloader />
        ) : (
          <div className="return__info-container">
          {props.isAdmin && <button type="button" onClick={handleSubmit} className={`return__btn terms__btn_${isEdited ? 'save' : 'edit'}`}></button>}
          
          {isEdited ?
              <form
                method="get"
                action="index.html"
                name="default"
                className='return__form'
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off" >
                <label className="return__form-field" htmlFor="default">
                  <textarea name="default"
                    type="text"
                    required
                    onChange={handleDefChange}
                    value={defFormValue}
                    placeholder="Общие условия возврата" id="default"
                    className="return__form-input"
                  ></textarea>
                </label>
              </form>
            :
              props.returnInfo.default &&
              <p className="return__subtitle">{props.returnInfo.default.split('\n').map((str, i) => (
                <React.Fragment key={i}>
                  {str}
                  <br />
                </React.Fragment>
              ))}</p>
          }

          <div className="return__info">
            {isEdited ?
                <>
                  <p className="return__info-title">Пиротехника</p>
                  <form
                    method="get"
                    action="index.html"
                    name="fire"
                    className='return__form'
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off" >
                    <label className="return__form-field" htmlFor="fire">
                      <textarea name="fire"
                        type="text"
                        required
                        onChange={handleFireChange}
                        value={fireFormValue}
                        placeholder="Условия возврата пиротехники" id="fire"
                        className="return__form-input"
                      ></textarea>
                    </label>
                  </form>
                </>
              :
              props.returnInfo.fire &&
                <>
                  <p onClick={() => setIsFireOpened(!isFireOpened)} className="return__info-title">Пиротехника</p>
                  <Collapse isOpened={isFireOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                    <div style={{height}} className="return__section-content">
                      <p className="return__info-text">{props.returnInfo.fire.split('\n').map((str, i) => (
                        <React.Fragment key={i}>
                          {str}
                          <br />
                        </React.Fragment>
                      ))}</p>
                    </div>
                  </Collapse>  
                </>
            }
          </div>
{/* 
            {props.returnInfo.fire &&
              <div className="return__info">
                <p onClick={() => setIsFireOpened(!isFireOpened)} className="return__info-title">Пиротехника</p>
                <Collapse isOpened={isFireOpened} initialStyle={{height: 0, overflow: 'hidden'}}>
                  <div style={{height}} className="return__section-content">
                    <p className="return__info-text">{props.returnInfo.fire.split('\n').map((str, i) => (
                      <React.Fragment key={i}>
                        {str}
                        <br />
                      </React.Fragment>
                    ))}</p>
                  </div>
                </Collapse>  
              </div>
            } */}

          </div>
        )}
      
    </section>
  );
}

export default Return;
