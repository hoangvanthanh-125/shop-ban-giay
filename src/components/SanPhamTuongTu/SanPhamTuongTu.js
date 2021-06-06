import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import useStyle from "./../../container/ProductsContainer/style";
import firebase from "firebase";
import { useHistory } from "react-router";
import "./Sanphamtuongtu.css";
import Products from "../products/Products";
function SanPhamTuongTu({ type }) {
  const history = useHistory();
  const classes = useStyle();
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .where("type", "==", type)
      .orderBy("realPrice")
      .limit(20)
      .get()
      .then((res) => {
        setListProduct(res.docs);
      });
  }, []);
  const renderSanPham = () => {
    let xhtml = null;
    if (listProduct.length > 0) {
      if (listProduct.length > 0) {
        xhtml = (
          <Grid className={classes.wrapProduct} container spacing={0}>
            {listProduct.map((product) => {
              return (
                <Grid key={product.id}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        );
      }
    }
    return xhtml;
  };
  return listProduct.length > 1 ? (
    <div className="wrapSanphamtuongtu">
      <h2 className="titleSanphamtuongtu">Sản phẩm tương tự</h2>
      <div className="AllProductCss">
        <Products>{renderSanPham()}</Products>
      </div>
      <div className="buttonSanphamtuongtu">
        <Button
          onClick={() => {
            history.push(`/hanggiay/${type}`);
          }}
          variant="contained"
          color="primary"
        >
          Xem thêm
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default SanPhamTuongTu;
