import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FBfetchCart, FBsetListCheckOut } from "../../actions/cart";
import { AsyncUser } from "../../common/AsyncUser";
import { CustomPrice } from "../../common/Customprice";
import Emptycart from "../../common/EmptyCart/Emptycart";
import LinkDieuHuong from "../../common/LinkDieuHuong/LinkDieuHuong";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
import useStyles from "./style";
function Cart(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    AsyncUser()
      .then(() => {
        dispatch(FBfetchCart());
      })
      .catch((err) => console.log(err));
  }, []);
  const classes = useStyles();
  const listCart = useSelector((state) => state.cart.listCart);

  const totalMoney = listCart.reduce((total, item) => {
    return total + item.quantity * item.cartItem.realPrice;
  }, 0);
  const renderCartItem = () => {
    var xhtml = null;
    if (listCart?.length > 0) {
      xhtml = listCart.map((cartProduct) => {
        return (
          <CartItem
            iconDelete={true}
            updateQuantity={true}
            key={`${cartProduct.cartItem.id}-${cartProduct.size}-${cartProduct.color}`}
            cartProduct={cartProduct}
          />
        );
      });
    }
    return xhtml;
  };
  const clickCheckOut = () => {
    AsyncUser().then(() => {
      dispatch(FBsetListCheckOut(listCart));
      history.push("/thanh-toan");
    });
  };
  return listCart?.length > 0 ? (
    <div>
      <div className="linkDhinCart">
        <LinkDieuHuong color="black" />
      </div>
      <h6 className="titleGioHang">Giỏ hàng</h6>
      <div className="wrapCssCartContainer">
        <div className="weapCertItemCss">{renderCartItem()}</div>
        <div className="wraptotalMoneyCss">
          <div className={classes.total}>Thành tiền</div>
          <div>
            <span className={classes.money}>{CustomPrice(totalMoney)}</span>
            <span className={classes.dong}>đ</span>
          </div>
          <div>
            <Button
              onClick={() => clickCheckOut()}
              variant="contained"
              color="primary"
            >
              Thanh Toán Ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Emptycart />
  );
}

export default Cart;
