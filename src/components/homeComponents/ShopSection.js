import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopLangka = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();
  



  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
    
      <div className="container">     
        <div className="section">      
          <div className="row">          
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {props.products ? props.products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>                           
                          </div>
                          <div className="flex-box d-flex align-items-center">
                      <h6>Status :</h6>
                      {product.countInStock >= 0 ? (
                        <span>Tanaman Langka</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                      
                    </div>
                        </div>
                      </div>
                    )): <p>Users is empty</p>}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLangka;
