import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { sp_categoryRequestedAction } from "../../Redux/Action/sp_categoryAction";
import Layout from "../Layout";

const Product = () => {
  const dispatch = useDispatch();
  const sp_category = useSelector(
    (state) => state.ds_category.sp_category.san_pham
  );
  let { id } = useParams();

  useEffect(() => {
    dispatch(sp_categoryRequestedAction(id));
  }, [dispatch, id]);
  return (
    <Layout>
      {/*banner*/}
      <div className="banner-top">
        <div className="container">
          <h1>Products</h1>
          <em />
          <h2>
            <a href="index.html">Home</a>
            <label>/</label>Products
          </h2>
        </div>
      </div>
      {/*content*/}
      <div className="product">
        <div className="container">
          <div className="col-md-9">
            <div className="mid-popular">
              {sp_category.map((sp) => (
                <div
                  className="col-md-4 item-grid1 simpleCart_shelfItem"
                  key={sp.id}
                >
                  <div className=" mid-pop">
                    <div className="pro-img">
                      <img
                        src={`${sp.hinh}`}
                        className="img-responsive"
                        alt="abc"
                      />
                      <div className="zoom-icon ">
                        <a
                          className="picture"
                          href="/images/pc.jpg"
                          rel="title"
                        >
                          <i className="glyphicon glyphicon-search icon " />
                        </a>
                        <Link to={`/Detail/${sp.id}`}>
                          <i className="glyphicon glyphicon-menu-right icon" />
                        </Link>
                      </div>
                    </div>
                    <div className="mid-1">
                      <div className="women">
                        <div className="women-top">
                          <span>Women</span>
                          <h6>
                            <Link to={`/Detail/${sp.id}`}>{sp.tensp}</Link>
                          </h6>
                        </div>
                        <div className="img item_add">
                          <a href="#!">
                            <img src="/images/ca.png" alt="abc" />
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="mid-2">
                        <p>
                          <label>$100.00</label>
                          <em className="item_price">${sp.gia}</em>
                        </p>
                        <div className="block">
                          <div className="starbox small ghosting"> </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="clearfix" />
            </div>
          </div>

          <div className="col-md-3 product-bottom">
            {/*categories*/}
            <div className=" rsidebar span_1_of_left">
              <h4 className="cate">Categories</h4>
              <ul className="menu-drop">
                <li className="item1">
                  <a href="#!">Men </a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
                <li className="item2">
                  <a href="#!">Women </a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
                <li className="item3">
                  <a href="#!">Kids</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails</a>
                    </li>
                  </ul>
                </li>
                <li className="item4">
                  <a href="#!">Accessories</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails</a>
                    </li>
                  </ul>
                </li>
                <li className="item4">
                  <a href="#!">Shoes</a>
                  <ul className="cute">
                    <li className="subitem1">
                      <a href="product.html">Cute Kittens </a>
                    </li>
                    <li className="subitem2">
                      <a href="product.html">Strange Stuff </a>
                    </li>
                    <li className="subitem3">
                      <a href="product.html">Automatic Fails </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/*initiate accordion*/}
            {/*//menu*/}
            <section className="sky-form">
              <h4 className="cate">Discounts</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" defaultChecked />
                    <i />
                    Upto - 10% (20)
                  </label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    40% - 50% (5)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    30% - 20% (7)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    10% - 5% (2)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Other(50)
                  </label>
                </div>
              </div>
            </section>
            {/**/}
            <section className="sky-form">
              <h4 className="cate">Type</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" defaultChecked />
                    <i />
                    Sofa Cum Beds (30)
                  </label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Bags (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Caps &amp; Hats (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Jackets &amp; Coats (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Jeans (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Shirts (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Sunglasses (30)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Swimwear (30)
                  </label>
                </div>
              </div>
            </section>
            <section className="sky-form">
              <h4 className="cate">Brand</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" defaultChecked />
                    <i />
                    Roadstar
                  </label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Levis
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Persol
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Nike
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Edwin
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    New Balance
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Paul Smith
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i />
                    Ray-Ban
                  </label>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
        </div>
        {/*products*/}
        {/*//products*/}
        {/*brand*/}
        <div className="container">
          <div className="brand">
            <div className="col-md-3 brand-grid">
              <img src="/images/ic.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic1.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic2.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic3.png" className="img-responsive" alt="abc" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/*//brand*/}
      </div>
    </Layout>
  );
};
export default Product;