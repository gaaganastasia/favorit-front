import React, { Component, useState } from "react";
import "./App.css";
import Header from '../Header/Header';
// import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import ProductPage from "../ProductPage/ProductPage";
import {  Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navigation from "../Navigation/Navigation";
import MobileFilterCatalog from "../MobileFilterCatalog/MobileFilterCatalog";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";
import Login from "../Login/Login";
import AddProductPage from "../AddProductPage/AddProductPage";
import api from "../../utils/api";
import { createBrowserHistory } from "history";
import Terms from "../Terms/Terms";
import Return from "../Return/Return";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductPageWrapper from "../ProductPageWrapper/ProductPageWrapper";
import News from "../News/News";
import NewsPageWrapper from "../NewsPageWrapper/NewsPageWrapper";
import AddNewsPage from "../AddNewsPage/AddNewsPage";
import { useNavigate } from 'react-router-dom';



function App() {
  const history = createBrowserHistory();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(localStorage.getItem("jwt"))

  const [currentUser, setCurrentUser] = React.useState("");

  function tokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      api
        .checkToken(jwt)
        .then((res) => {
          setIsAdmin(true);
        })
        .catch((err) => {
          // console.log('no')
          return err;
        });
    }
  }

  const [isLoading, setIsLoading] = React.useState(false);

// console.log(GetFilterVariables())

  // console.log(localStorage.getItem("jwt"))

  React.useEffect(() => {
    tokenCheck();
  }, [isAdmin]);

  function handleLogin(password) {
    api
      .authorize(password)
      .then((res) => {
        if (res.token) {
          setIsAdmin(true);
          navigate("/catalog");
          setCurrentUser(res.token);
        }
        return res;
      })
      .catch((err) => {
        return err;
      })
  }

  function handleLogOut() {
    setIsAdmin(false);
    setCurrentUser('');
    localStorage.removeItem('jwt');
  }

  const [isNavOpen, setNavState] = React.useState(false);
  const changeNavState = () => {
    setNavState(!isNavOpen);
  };

  const [isMobileFilterOpen, setMobileFilterState] = React.useState(false);
  const changeMobileFilterState = () => {
    setMobileFilterState(!isMobileFilterOpen);
  };

  const [products, setProducts] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  // const [searchedProducts, setSearchedProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const actualProducts = JSON.parse(localStorage.getItem('products'));
  const actualRequest = JSON.parse(localStorage.getItem('request'));

  const [searchedProducts, setSearchedProducts] = React.useState(actualProducts ? actualProducts : []);
  const [request, setRequest] = React.useState(actualRequest ? actualRequest : '');
  //console.log(request)

  const [isSearching, setIsSearching] = React.useState(false);

  function handleSearchedProducts(ps, r) {
    setSearchedProducts(ps);
    setRequest(r);
  }

  function getProducts() {
    setIsLoading(true);
    setIsSearching(false)
    localStorage.removeItem('products');
    localStorage.removeItem('request');

    api
      .getProducts()
      .then((res) => {
        //setSearchedProducts(res.reverse());
        setProducts(res.reverse());
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
    
  }

  function getPhotos() {
    api
      .getPhotos()
      .then((res) => {
        setPhotos(res);
      })
      .catch((err) => {
        return err;
      })
    
  }

  function postProduct(product, phs) {
    api.postProduct(product).then((newProduct) => {
      //setSearchedProducts([newProduct, ...searchedProducts]);
      setProducts([newProduct, ...products]);
      navigate("/catalog")
      if (phs && phs.length !== 0) {
        phs.map((ph) => {
          api.postPhoto(newProduct._id, ph)
            .then((newPhoto) => {
              setPhotos([newPhoto, ...photos]);
            })
        })
      }
    });
  }

  function deleteProduct(product) {
    api
      .deleteProduct(
        product._id || products.find((p) => p._id === product._id)._id
      )
      .then((newProduct) => {
        navigate('/catalog');

        setProducts(
          products.filter(
            (p) =>
              p._id !== newProduct._id
          )
        );

        setCartItems(
          cartItems.filter(
            (p) =>
              p._id !== newProduct._id
          )
        );

        photos.filter(
          (p) =>
            p.productId === newProduct._id
        ).map((ph) => {
          api.deletePhoto(ph._id)
            .then((newPhoto) => {
              setPhotos(
                photos.filter(
                  (ph) =>
                    ph._id !== newPhoto._id
                )
              );
            })
        })
      });
  }

  /////////////// delivery

  const [deliveryInfo, setDeliveryInfo] = React.useState([]);

  function getDeliveryInfo() {
    setIsLoading(true);

    api
      .getDeliveryInfo()
      .then((res) => {
        setDeliveryInfo(res[0]);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateDeliveryInfo(id, data) {
    api
      .editDeliveryInfo(id, data)
      .then((res) => {
        getDeliveryInfo()
      })
      .catch((err) => {
        return err;
      })
  }


  /////////////// return

  const [returnInfo, setReturnInfo] = React.useState([]);

  function getReturnInfo() {
    setIsLoading(true);

    api
      .getReturnInfo()
      .then((res) => {
        setReturnInfo({"default": `${res.find(el => el.category === 'default').info}`, "fire": `${res.find(el => el.category === 'Пиротехника').info}`});
        
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateReturnInfo(id, data) {
    api
      .editReturnInfo(id, data)
      .then((res) => {
        getReturnInfo()
      })
      .catch((err) => {
        return err;
      })
  }


  ///////////////news

  const [news, setNews] = React.useState([]);

  function sortByDate(arr) {
    arr.sort((a, b) => {
      let targetDateA = new Date(`${a.date.slice(3,5)}.${a.date.slice(0,2)}.${a.date.slice(6,10)}`).getTime();
      let curDate = new Date().getTime();
      let resultA = Math.round((curDate - targetDateA) / 86400000);
      let targetDateB = new Date(`${b.date.slice(3,5)}.${b.date.slice(0,2)}.${b.date.slice(6,10)}`).getTime();
      let resultB = Math.round((curDate - targetDateB) / 86400000);
      if (resultA > resultB) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  function getNews() {
    setIsLoading(true);

    api
      .getNews()
      .then((res) => {
        sortByDate(res)
        setNews(res);
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const [newsPhotos, setNewsPhotos] = React.useState([]);

  function getNewsPhotos() {
    api
      .getNewsPhotos()
      .then((res) => {
        setNewsPhotos(res);
      })
      .catch((err) => {
        return err;
      })
    
  }

  function postNews(n, phs) {
    api.postNews(n).then((newN) => {
      setNews([newN, ...news]);
      navigate("/news")
      if (phs && phs.length !== 0) {
        phs.map((ph) => {
          api.postNewsPhoto(newN._id, ph)
            .then((newPhoto) => {
              setNewsPhotos([newPhoto, ...newsPhotos]);
            })
        })
      }
    });
  }

  function deleteNews(n) {
    api
      .deleteNews(
        n._id || news.find((nw) => nw._id === n._id)._id || news.find((nw) => nw._id === n._id)._id
      )
      .then((newN) => {
        navigate('/news');
        setNews(
          news.filter(
            (nw) =>
              nw._id !== newN._id
          )
        );

        newsPhotos.filter(
          (nw) =>
            nw.newId === newN._id
        ).map((ph) => {
          api.deleteNewsPhoto(ph._id)
            .then((newPhoto) => {
              setNewsPhotos(
                newsPhotos.filter(
                  (ph) =>
                    ph._id !== newPhoto._id
                )
              );
            })
        })
      });
  }

  function handleUpdateNewsInfo(id, data) {
    api
      .editNewsInfo(id, data)
      .then((res) => {
        getNews();
      })
      .catch((err) => {
        return err;
      })
  }


  //////////////

  const [orderStatus, sendOrderStatus] = React.useState(null);

  function sendOrder(order) {
    navigate('/confirmation');
    api.sendOrder(order)
      .then((res) => {
        setIsLoading(true);
        sendOrderStatus(res.message);
        
        // navigate('/confirmation');
        setCartItems([]);
        setCost(0);
        // return res;
      })
      .catch((err) => {
        return err
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const [cost, setCost] = React.useState(0);

  function handleCost() {
    let k = 0;

    cartItems.forEach((i) => {
      i.discount ?
      k += i.price * (1 - (i.discount / 100)) * i.quantity
      :
      k += i.price * i.quantity
    });

    setCost(k)

  }

  function handleUpdateProductInfo(id, data) {
    api
      .editProductInfo(id, data)
      .then((res) => {
        getProducts()
        // if (products.findIndex((p) => {return p._id === res._id}) >= 0) {
        //   products[products.findIndex((p) => {return p._id === res._id})] = res;
        // }

        // if (searchedProducts.findIndex((p) => {return p._id === res._id}) >= 0) {
        //   searchedProducts[searchedProducts.findIndex((p) => {return p._id === res._id})] = res;
        // }

        if (cartItems.findIndex((p) => {return p._id === res._id}) >= 0) {
          const index = cartItems.findIndex((p) => {return p._id === res._id});
          cartItems[index].name = res.name;
          cartItems[index].description = res.description;
          cartItems[index].price = res.price;
          cartItems[index].discount = res.discount;

          handleCost()
        }
      })
      .catch((err) => {
        return err;
      })
  }


  // const [checkboxesStates, handleFilters, handleCheckboxesStates, filters] = GetFilterLogic();

  // React.useEffect(() => {
  //   handleFilters();
  // }, []);

  const [filters, setFilters] = React.useState([]);

  const handleFilterChange = event => {
    const value = event.target.value;
  
    if (filters.includes(value)) {
      setFilters(filters.filter(filter => filter !== value));
    } else {
      setFilters([...filters, value]);
    }
  };


  function getProductState(product) {
    const isInCart = cartItems.some(
      (p) =>
        p._id === product._id
    );

    return isInCart;
  }

  function addProductToCart(product) {
    const p = product;
    p.quantity = 1;
    setCartItems([p, ...cartItems])
    product.discount ?
    setCost(cost + product.price * (1 - (product.discount / 100)) * product.quantity)
    :
    setCost(cost + product.price * product.quantity);
  }

  function removeProductFromCart(product) {
    setCartItems(
      cartItems.filter(
        (p) =>
          p._id !== product._id
      )
    );

    product.discount ?
    setCost(cost - product.price * (1 - (product.discount / 100)) * product.quantity)
    :
    setCost(cost - product.price * product.quantity);
  }

  function increaseProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i._id === id)].quantity += 1;
    handleCost()
  }

  function reduceProductQuantity(id) {
    cartItems[cartItems.findIndex((i) => i._id === id)].quantity -= 1;
    handleCost()
  }

  //const [searchedProducts, setSearchedProducts] = React.useState(products);

  // function handleSearchedProducts(products) {
  //   setSearchedProducts(products);
  // }

  function submitSearchForm(v) {
    // if (history.location.pathname !== "/catalog") {
    //   navigate("/catalog");
    // }
    
    // if (!v.current.value || v.current.value === " ") {
    // } else {
    //   let p = products.filter(
    //     (product) =>
    //       product.name.toLowerCase().indexOf(v.current.value.toLowerCase()) !== -1 ||
    //       product.category.toLowerCase().indexOf(v.current.value.toLowerCase()) !== -1
    //   );

    //   //console.log(v.current.value);
    //   //localStorage.setItem('products', JSON.stringify(products));

    //   setSearchedProducts(p);
      
    // }
  }

  const [isNotFoundErrVisible, setIsNotFoundErrVisible] = React.useState(false);


  ////////////////admin

  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);


  return (
      <div className='page'>
        <Header
          history={history}
          changeNavState={changeNavState}
          onLogOut={handleLogOut}
          isAdmin={isAdmin}
          isHeaderVisible={isHeaderVisible}
        />

        <Routes>
          <Route path="/" element={<><ScrollToTop /><Main 
              getProducts={getProducts}
              products={products}
              cartItems={cartItems}
              history={history}
              submitSearchForm={(v) => submitSearchForm(v)}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setProducts={handleSearchedProducts}
              request={request}
              setRequest={setRequest}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />
            
          <Route path="/catalog" element={<><ScrollToTop /><Catalog 
              isAdmin={isAdmin}
              tokenCheck={tokenCheck}
              searchedProducts={searchedProducts}
              handleSearchedProducts={handleSearchedProducts}
              getProducts={getProducts}
              getPhotos={getPhotos}
              photos={photos}
              onLogOut={handleLogOut}
              products={products}
              handleFilterChange={handleFilterChange}
              filters={filters}
              isLoading={isLoading}
              setProducts={handleSearchedProducts}
              isMobileFilterOpen={isMobileFilterOpen}
              setFilters={setFilters}

              getProductState={getProductState}
              cartItems={cartItems}
              addProduct={(product) => addProductToCart(product)}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              history={history}
              changeMobileFilterState={changeMobileFilterState}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />
            
          <Route path="/cart" element={<><ScrollToTop /><Cart history={history}
              getProducts={getProducts}
              products={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
              increaseProductQuantity={(id) => increaseProductQuantity(id)} 
              reduceProductQuantity={(id) => reduceProductQuantity(id)}
              removeProduct={(product) => removeProductFromCart(product)}
              sendOrder={sendOrder}
              cost={cost}
              setCost={setCost}
              navigate={navigate}
              isLoading={isLoading}
              sendOrderStatus={sendOrderStatus}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />

          <Route path="/terms" element={<><ScrollToTop /><Terms 
              products={products}
              getProducts={getProducts}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setProducts={handleSearchedProducts}
              cartItems={cartItems}
              isAdmin={isAdmin}
              history={history}
              getDeliveryInfo={getDeliveryInfo}
              onUpdate={handleUpdateDeliveryInfo}
              deliveryInfo={deliveryInfo}
              isLoading={isLoading}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />

          <Route path="/return" element={<><ScrollToTop /><Return 
              products={products}
              getProducts={getProducts}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setProducts={handleSearchedProducts}
              cartItems={cartItems}
              isAdmin={isAdmin}
              history={history}
              getReturnInfo={getReturnInfo}
              onUpdate={handleUpdateReturnInfo}
              returnInfo={returnInfo}
              isLoading={isLoading}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />

          <Route path="/news" element={<><ScrollToTop /><News 
              isAdmin={isAdmin}
              news={news}
              getNews={getNews}
              tokenCheck={tokenCheck}
              searchedProducts={searchedProducts}
              handleSearchedProducts={handleSearchedProducts}
              getProducts={getProducts}
              getPhotos={getPhotos}
              photos={photos}
              onLogOut={handleLogOut}
              products={products}
              filters={filters}
              isLoading={isLoading}

              getProductState={getProductState}
              cartItems={cartItems}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setProducts={handleSearchedProducts}
              history={history}
              setIsHeaderVisible={setIsHeaderVisible}
            /></>} />
              
          <Route path="/confirmation" element={<><ScrollToTop /><ConfirmationPage history={history} isLoading={isLoading} orderStatus={orderStatus} navigate={navigate} setIsHeaderVisible={setIsHeaderVisible} /></>} />

          <Route path="/catalog/:_id" element={<><ScrollToTop /><ProductPageWrapper 
              getProducts={getProducts}
              getPhotos={getPhotos}
              tokenCheck={tokenCheck}
              photos={photos}
              products={products}
              cartItems={cartItems}
              history={history}
              onAdd={(product) => addProductToCart(product)}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setProducts={handleSearchedProducts}
              isAdmin={isAdmin}
              deleteProduct={(product) => deleteProduct(product)}
              onUpdate={handleUpdateProductInfo}
              setIsHeaderVisible={setIsHeaderVisible}
              isLoading={isLoading}
            /></>} />

          <Route path="/news/:_id" element={<><ScrollToTop /><NewsPageWrapper 
              getNews={getNews}
              getProducts={getProducts}
              tokenCheck={tokenCheck}
              cartItems={cartItems}
              news={news}
              products={products}
              history={history}
              submitSearchForm={(v) => submitSearchForm(v)}
              request={request}
              setRequest={setRequest}
              isNotFoundErrVisible={isNotFoundErrVisible}
              setIsNotFoundErrVisible={setIsNotFoundErrVisible}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
              setProducts={handleSearchedProducts}
              isAdmin={isAdmin}
              getNewsPhotos={getNewsPhotos}
              newsPhotos={newsPhotos}
              deleteNews={(n) => deleteNews(n)}
              onUpdate={handleUpdateNewsInfo}
              setIsHeaderVisible={setIsHeaderVisible}
              isLoading={isLoading}
            /></>} />
            
          <Route path="/login" element={<><ScrollToTop /><Login isAdmin={isAdmin} onLogin={handleLogin} history={history} setIsHeaderVisible={setIsHeaderVisible} /></>} />
           
          <Route path="/add-product" element={<><ScrollToTop />{isAdmin ? <AddProductPage history={history} postProduct={postProduct} setIsHeaderVisible={setIsHeaderVisible} /> : <Navigate to="/catalog" replace={true} setIsHeaderVisible={setIsHeaderVisible} />}</>} />
            
          <Route path="/add-news" element={<><ScrollToTop />{isAdmin ? <AddNewsPage history={history} postNews={postNews} setIsHeaderVisible={setIsHeaderVisible} /> : <Navigate to="/catalog" replace={true} setIsHeaderVisible={setIsHeaderVisible} />}</>} />

          {/* <Route path="*" element={<Navigate to="/catalog" replace={true} />} /> */}
          <Route path="*" element={<PageNotFound history={history} setIsHeaderVisible={setIsHeaderVisible} />} />

        </Routes>
          
          
        <Navigation
            isOpen={isNavOpen}
            changeState={changeNavState}
          />

        <MobileFilterCatalog 
          isOpen={isMobileFilterOpen}
          changeState={changeMobileFilterState}
          handleFilterChange={handleFilterChange}
          filters={filters}
        />

        <Footer 
          history={history}
          isHeaderVisible={isHeaderVisible}
        />
      </div>
  );
}

export default App;