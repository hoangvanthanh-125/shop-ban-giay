import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../actions/modal.js";
import LinkDieuHuong from "../../common/LinkDieuHuong/LinkDieuHuong.js";
import Sort from "../../components/DashBoard/SortCpn/Sort.js";
import Product from "../../components/product/Product.js";
import Products from "../../components/products/Products";
import * as productsActions from "./../../actions/products";
import FilterCpn from "./../../components/Filter/FilterCpn";
import firebase from "firebase";
import "./prdctn.css";
import useStyle from "./style";
import { hideLoading, showLoading } from "../../actions/ui.js";
import { PAGE_SIZE } from "../../constant/pagination.js";
import { setMinMaxPrice, setvalueSort } from "../../actions/filterPrice.js";
function ProductsContainer(props) {
  const classes = useStyle();
  var products = useSelector((state) => state.products.products);
  const [startNext, setStartNext] = useState(0);
  const [startPrev, setStartPrev] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [stateChangePage, setStateChangePage] = useState("");
  const sortValue = useSelector((state) => state.filterPrice.sortValue);
  const minPrice = useSelector((state) => state.filterPrice.minPrice);
  const maxPrice = useSelector((state) => state.filterPrice.maxPrice);
  const [quantityAllProduct, setQuantityAllProduct] = useState(0);
  const [fbRef, setFbRef] = useState(
    firebase.firestore().collection("products").orderBy("realPrice")
  );
  const [dis, setDis] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    firebase
      .firestore()
      .collection("quantityProduct")
      .doc("quantityProduct")
      .get()
      .then((res) => {
        setQuantityAllProduct(res.data().allProduct);
      });
    return () => {
      dispatch(setvalueSort(0));
      dispatch(setMinMaxPrice("", ""));
    };
  }, []);
  useEffect(() => {
    if (minPrice && maxPrice) {
      if (sortValue == 2) {
        const promise = Promise.resolve("");
        promise
          .then(() => {
            setStartNext(9999999999999);
          })
          .then(() => {
            setStartPrev(9999999999999);
          })
          .then(() => {
            setCurrentPage(1);
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("realPrice", ">=", minPrice)
                .where("realPrice", "<=", maxPrice)
                .orderBy("realPrice", "desc")
            );
          });
      } else {
        const promise = Promise.resolve("");
        promise
          .then(() => {
            setStartNext(0);
          })
          .then(() => {
            setStartPrev(0);
          })
          .then(() => {
            setCurrentPage(1);
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("realPrice", ">=", minPrice)
                .where("realPrice", "<=", maxPrice)
                .orderBy("realPrice")
            );
          });
      }
    } else {
      if (sortValue == 2) {
        const promise = Promise.resolve("");
        promise
          .then(() => {
            setStartNext(9999999999999);
          })
          .then(() => {
            setStartPrev(9999999999999);
          })
          .then(() => {
            setCurrentPage(1);
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .orderBy("realPrice", "desc")
            );
          });
      } else {
        const promise = Promise.resolve("");
        promise
          .then(() => {
            setStartNext(0);
          })
          .then(() => {
            setStartPrev(0);
          })
          .then(() => {
            setCurrentPage(1);
          })
          .then(() => {
            setFbRef(
              firebase.firestore().collection("products").orderBy("realPrice")
            );
          });
      }
    }
  }, [sortValue, minPrice, maxPrice]);
  useEffect(() => {
    window.scrollTo(300, 300);
    dispatch(hideModal());

    dispatch(showLoading());
    dispatch(productsActions.fetchProductSuccess(null));

    let FBref;
    FBref =
      stateChangePage === "prev"
        ? fbRef.endBefore(startPrev).limitToLast(PAGE_SIZE)
        : fbRef.startAfter(startNext).limit(PAGE_SIZE);
    FBref.get().then((res) => {
      if (res.docs.length !== 0) {
        dispatch(productsActions.fetchListSuccess(res.docs));
        setStartPrev(res.docs[0]);
        setStartNext(res.docs[res.docs.length - 1]);
        setDis(false);
      } else {
        setDis(true);
      }
      dispatch(hideLoading());
    });
  }, [currentPage, fbRef]);
  const onClickNext = (num) => {
    if (num === -1) {
      setStateChangePage("prev");
      console.log(startPrev);
    } else {
      setStateChangePage("next");
    }
    setCurrentPage(currentPage + num);
  };
  const renderProduct = () => {
    let xhtml = null;
    if (products.length > 0) {
      xhtml = (
        <Grid className={classes.wrapProduct} container spacing={0}>
          {products.map((product) => {
            return (
              <Grid key={product.id}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      );
    }
    return xhtml;
  };

  return (
    <div className={classes.container}>
      <div className="anhAllGiay">
        <div className="delen"></div>
        <div className="titletatCasanPham">
          <h3>Tất cả sản phẩm</h3>
          <LinkDieuHuong />
        </div>
      </div>
      <div className="controlCss">
        <Sort />

        <FilterCpn />
      </div>
      <div className="AllProductCss">
        <Products>{renderProduct()}</Products>
      </div>
      <div className="paginationWrapCSS">
        <button
          className="buttonPagination"
          disabled={currentPage === 1}
          onClick={() => onClickNext(-1)}
        >
          Prev
        </button>
        <button className="buttonPage">{currentPage}</button>
        <button
          className={`buttonPagination`}
          disabled={
            currentPage === Math.ceil(quantityAllProduct / PAGE_SIZE) || dis
          }
          onClick={() => onClickNext(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductsContainer;
