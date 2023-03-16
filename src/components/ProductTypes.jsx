import React from "react";
import "./ProductTypes.css";


const ProductTypes = () => {
  return (
    <section className="product-types">
      <div className="container">
        <div className="product-types-title">
          <h2>Bizimlə fərqli təamlar dadın</h2>
          <span>Good Chocolate, Good Life.</span>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-3 col-md-6 col-12 col-sm-12">
            <div className="product-types-card">
              <div className="product-types-card-title">
                <h3> Şam yeməyi</h3>
              </div>
              <div className="product-types-card-container">
                <p>
                  Şam yeməyi, tədbir və ya parti?
                  Sevdiklərinizlə birgə məkanımızda qeyd edin.
                </p>
              </div>
              <div className="product-types-card-image">
                <img
                  src="https://mediacity.co.in/delici/static/media/image-6.442bea90213b2d48463d.jpg"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 col-sm-12">
            <div className="product-types-card">
              <div className="product-types-card-title">
                <h3> Səhər yeməyi</h3>
              </div>
              <div className="product-types-card-container">
                <p>
             Yeməkləriniz üçün səmimi yer axtarırsınız ? Bura sizin üçündür.
             Sevdiklərinizlə birgə gəlin

                </p>
              </div>
              <div className="product-types-card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaKZlDBRVpZ16jmmPHIuB_FunGe9lrkWhIw&usqp=CAU"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 col-sm-12">
            <div className="product-types-card">
              <div className="product-types-card-title">
                <h3>Qəlyənaltı </h3>
              </div>
              <div className="product-types-card-container">
                <p>
                Qəlyənaltı üçün  yeni dadlar axtarırsınız ? Bura sizin üçündür.
             Sevdiklərinizlə birgə gəlin
                </p>
              </div>
              <div className="product-types-card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkHZ9VmwEXBCXzX6p4h1_rgk8zF0pUMPzyg&usqp=CAU"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 col-sm-12">
            <div className="product-types-card">
              <div className="product-types-card-title">
                <h3>Çay Süfrəsi</h3>
              </div>
              <div className="product-types-card-container">
                <p>
                Çay Süfrəsi üçün qeyria adi  yer axtarırsınız ? Bura sizin üçündür.
             Sevdiklərinizlə birgə gəlin
                </p>
              </div>
              <div className="product-types-card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/serv-3_300x300.jpg?v=1613187576"
                  alt="product"
                />
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTypes;