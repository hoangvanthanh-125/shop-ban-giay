import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FBfetchListDaNhan } from "../../actions/cart";
import { AsyncUser } from "../../common/AsyncUser";
import Emptycart from "../../common/EmptyCart/Emptycart";
import CartItem from "./../Cart/CartItem/CartItem";
import useStyle from "./style";
const keyRandom = () => {
  return Math.random() * 100000000;
};
function ListDaNhan(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const listDaNhan = useSelector((state) => state.cart.listDaNhan);
  const renderListDaNhan = () => {
    let html;
    if (listDaNhan.length > 0) {
      html = listDaNhan.map((item) => (
        <CartItem
          updateQuantity={false}
          key={`${item.cartItem.id}-${keyRandom()}`}
          cartProduct={item}
        />
      ));
    }
    return html;
  };
  useEffect(() => {
    AsyncUser().then(() => {
      dispatch(FBfetchListDaNhan());
    });
  }, []);
  return listDaNhan.length > 0 ? (
    <div className={classes.wrap}>
      <h4 style={{ margin: "auto" }}>Đơn hàng đã nhận</h4>
      <div className={classes.danhan}>{renderListDaNhan()}</div>
    </div>
  ) : (
    <Emptycart />
  );
}

export default ListDaNhan;
