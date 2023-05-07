class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getProducts() {
    return fetch(`${this._url}/products`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postProduct(product) {
    return fetch(`${this._url}/products`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: String(product.name),
        category: String(product.category),
        partNumber: String(product.partNumber),
        description: String(product.description),
        price: Number(product.price),
        video: String(product.video),
        mainImage: String(product.mainImage),
        discount: Number(product.discount),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deleteProduct(id) {
    return fetch(`${this._url}/products/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  editProductInfo(id, data) {
    return fetch(`${this._url}/products/${id}`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        discount: data.discount
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  getPhotos() {
    return fetch(`${this._url}/photos`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postPhoto(productId, link) {
    return fetch(`${this._url}/photos`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        link: String(link),
        productId: String(productId),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deletePhoto(id) {
    return fetch(`${this._url}/photos/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  getDeliveryInfo() {
    return fetch(`${this._url}/deliverys`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  // postDeliveryInfo(info) {
  //   return fetch(`${this._url}/deliverys`, {
  //     method: "POST",
  //     headers: {
  //       ...this._headers,
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //     },
  //     body: JSON.stringify({
  //       info: String(info),
  //     }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }

  editDeliveryInfo(id, data) {
    return fetch(`${this._url}/deliverys/${id}`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        info: data,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  getReturnInfo() {
    return fetch(`${this._url}/refunds`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  // postDeliveryInfo(info) {
  //   return fetch(`${this._url}/deliverys`, {
  //     method: "POST",
  //     headers: {
  //       ...this._headers,
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //     },
  //     body: JSON.stringify({
  //       info: String(info),
  //     }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }

  editReturnInfo(id, data) {
    return fetch(`${this._url}/refunds/${id}`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        category: data.category,
        info: data.info,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  /////////////////

  getNews() {
    return fetch(`${this._url}/news`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postNews(news) {
    return fetch(`${this._url}/news`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        title: String(news.title),
        date: String(news.date),
        description: String(news.description),
        mainImage: String(news.mainImage),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deleteNews(id) {
    return fetch(`${this._url}/news/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  editNewsInfo(id, data) {
    return fetch(`${this._url}/news/${id}`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        date: data.date
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  //////////////////

  getNewsPhotos() {
    return fetch(`${this._url}/photosNews`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  postNewsPhoto(newsId, link) {
    return fetch(`${this._url}/photosNews`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        link: String(link),
        newId: String(newsId),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  deleteNewsPhoto(id) {
    return fetch(`${this._url}/photosNews/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  ///////////////

  authorize(password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: String(password),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      })
      .catch((err) => {
        return err;
      });
  }

  sendOrder(text) {
    return fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        text: text
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  }

  checkToken(jwt) {
    return fetch(`${this._url}/products/a`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
}

const api = new Api({
  // url: "https://kras-fire-api.vercel.app/api",
  url: "https://favorit-api.vercel.app/api",
  // url: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
