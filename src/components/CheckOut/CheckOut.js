import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FBfetchListCheckOut } from "../../actions/cart";
import { AsyncUser } from "../../common/AsyncUser";
import { CustomPrice } from "../../common/Customprice";
import CartItem from "../Cart/CartItem/CartItem";
import FormCheckOut from "./FormCheckOut";
import useStyle from "./styleCheckOut";

function CheckOut(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const listCheckOut = useSelector((state) => state.cart.listCheckOut);

  useEffect(() => {
    window.scrollTo(0, 0);
    AsyncUser().then(() => {
      dispatch(FBfetchListCheckOut());
    });
    console.log("lol");
  }, []);

  const totalMoney = listCheckOut.reduce((total, item) => {
    return total + item.quantity * item.cartItem.realPrice;
  }, 0);
  const renderListCheckOut = () => {
    var xhtml = null;
    if (listCheckOut?.length > 0) {
      xhtml = listCheckOut.map((cartProduct) => {
        return (
          <CartItem
            key={`${cartProduct.cartItem.id}-${cartProduct.color}-${cartProduct.size}`}
            cartProduct={cartProduct}
          />
        );
      });
    }
    return xhtml;
  };
  return (
    <Grid container className={classes.checkout}>
      <Grid className={classes.form} item sm={6} xs={12} md={6}>
        <FormCheckOut />
      </Grid>
      <Grid className={classes.listCheckOut} item sm={5} xs={12} md={5}>
        {renderListCheckOut()}
        <div className={classes.totalMoney}>
          Tổng tiền : {CustomPrice(totalMoney)}
        </div>
      </Grid>
    </Grid>
  );
}

export default CheckOut;
