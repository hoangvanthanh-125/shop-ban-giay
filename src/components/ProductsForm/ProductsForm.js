import { Box, Grid, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as productsActions from "./../../actions/products";
import renderTextField from "./../../components/FormHelper/TextField/index";
import { useStyle } from "./style";
import firebase from "firebase";
import renderSelectField from "../FormHelper/select";
function ProductsForm(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { handleSubmit, invalid } = props;
  const handleSubmitForm = (data) => {
    const {
      price,
      description,
      mainImg,
      name,
      image1,
      image2,
      image3,
      image4,
      sale,
      type,
    } = data;
    var listImg = []
      .concat(image1)
      .concat(image2)
      .concat(image3)
      .concat(image4);
    const newProduct = {
      mainImg,
      listImg,
      sale: parseInt(sale),
      name,
      price: parseInt(price),
      description,
      type,
      listComment: [],
      realPrice: Math.trunc(price - (sale * price) / 100),
    };

    firebase
      .firestore()
      .collection("products")
      .add(newProduct)
      .then((e) => {
        dispatch(
          productsActions.addproduct(name, description, price, mainImg, listImg)
        );
        firebase.firestore().collection("comments").doc(e.id).set({
          listComment: [],
        });
      })
      .catch((err) => console.log(new Error("Loi")));
    firebase
      .firestore()
      .collection("quanrityProduct")
      .doc("quantityProduct")
      .update({
        [type]: firebase.firestore.FieldValue.increment(1),
        allProduct: firebase.firestore.FieldValue.increment(1),
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Field
            label="Tên sản phẩm"
            id="tencongviec"
            name="name"
            component={renderTextField}
            className={classes.input}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Field
            label="Mô tả"
            id="mota"
            name="description"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Giá"
            id="mota"
            name="price"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Hãng giày"
            id="trangthai"
            name="type"
            component={renderSelectField}
            className={classes.select}
          >
            <MenuItem value="Nike">Nike</MenuItem>
            <MenuItem value="Adidas">Adidas</MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Vans">Vans</MenuItem>
            <MenuItem value="Balenciaga">Balenciaga</MenuItem>
            <MenuItem value="Khác">Khác</MenuItem>
          </Field>
          <Field
            label="Link ảnh chính"
            id="mota"
            name="mainImg"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Link ảnh 1"
            id="mota"
            name="image1"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Link ảnh 2"
            id="mota"
            name="image2"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Link ảnh 3"
            id="mota"
            name="image3"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Link ảnh 4"
            id="mota"
            name="image4"
            multiline
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Sale ? %"
            id="mota"
            name="sale"
            component={renderTextField}
            className={classes.input}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          {/* {renderStatusSelect()} */}
        </Grid>
        <Grid className={classes.button} item md={12} xs={12}>
          <Box display="flex" flexDirection="row-reverse">
            <Button
              variant="contained"
              // onClick = {() => closeForm()}
            >
              Hủy bỏ
            </Button>
            <Box mr={1}>
              <Button
                disabled={invalid}
                type="submit"
                variant="contained"
                color="primary"
              >
                Lưu lại
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
const FORM_NAME = "FORM_NAME";
ProductsForm = reduxForm({
  form: FORM_NAME,
})(ProductsForm);
export default ProductsForm;
