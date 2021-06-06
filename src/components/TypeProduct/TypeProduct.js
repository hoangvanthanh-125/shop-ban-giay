import { Grid } from "@material-ui/core";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { hideModal } from "../../actions/modal";
import { hideLoading, showLoading } from "../../actions/ui";
import LinkDieuHuong from "../../common/LinkDieuHuong/LinkDieuHuong";
import { PAGE_SIZE } from "../../constant/pagination";
import Sort from "../DashBoard/SortCpn/Sort";
import FilterCpn from "../Filter/FilterCpn";
import Product from "../product/Product";
import Products from "../products/Products";
import * as productsActions from "./../../actions/products";
import useStyle from "./../../container/ProductsContainer/style";
import "./TypeProduct.css";
function TypeProduct(props) {
  const classes = useStyle();
  const { name } = useParams();
  const [startNext, setStartNext] = useState(0);
  const [startPrev, setStartPrev] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [stateChangePage, setStateChangePage] = useState("");
  const sortValue = useSelector((state) => state.filterPrice.sortValue);
  const minPrice = useSelector((state) => state.filterPrice.minPrice);
  const maxPrice = useSelector((state) => state.filterPrice.maxPrice);
  const [quantityAllProduct, setQuantityAllProduct] = useState(0);
  const [dis, setDis] = useState(false);
  const [fbRef, setFbRef] = useState(
    firebase
      .firestore()
      .collection("products")
      .where("type", "==", name)
      .orderBy("realPrice")
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(sortValue);
    window.scrollTo(0, 0);
    firebase
      .firestore()
      .collection("quantityProduct")
      .doc("quantityProduct")
      .get()
      .then((res) => {
        setQuantityAllProduct(res.data()[name]);
      });
    if (minPrice && maxPrice) {
      if (sortValue == 2) {
        const promise = Promise.resolve("");
        promise
          .then(() => {
            setStartNext(9999999999);
          })
          .then(() => {
            setStartPrev(99999999999);
          })
          .then(() => {
            setCurrentPage(1);
          })
          .then(() => {
            setStateChangePage("next");
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("type", "==", name)
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
            setStateChangePage("next");
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("type", "==", name)
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
            setStateChangePage("next");
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("type", "==", name)
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
            setStateChangePage("next");
          })
          .then(() => {
            setFbRef(
              firebase
                .firestore()
                .collection("products")
                .where("type", "==", name)
                .orderBy("realPrice")
            );
          });
      }
    }
    return () => {};
  }, [sortValue, minPrice, maxPrice, name]);

  useEffect(() => {
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
        dispatch(productsActions.fetchTypeProductSuccess(res.docs));
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
      //console.log(startPrev);
    } else {
      setStateChangePage("next");
    }
    setCurrentPage(currentPage + num);
  };
  const listTypeProduct = useSelector(
    (state) => state.products.listTypeProduct
  );
  const renderProduct = () => {
    let xhtml = null;
    if (listTypeProduct.length > 0) {
      xhtml = (
        <Grid className={classes.wrapProduct} container spacing={0}>
          {listTypeProduct.map((product) => {
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
    <div className="typeProduct">
      <div className="nameTypeProduct">{name}</div>

      <div className="linkDhinCart">
        <LinkDieuHuong color="black" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ margin: "auto", marginTop: 20 }} className="sp">
          Sản phẩm
        </h1>
        <div className="controlCss">
          <div>
            <Sort />
          </div>
          <div>
            <FilterCpn />
          </div>
        </div>
        <div className="AllProductCss">
          <Products>{renderProduct()}</Products>
        </div>
      </div>
      <div style={{ marginTop: 20 }} className="paginationWrapCSS">
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

export default TypeProduct;
