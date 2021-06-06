import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FBfetchListCancel } from "../../actions/cart";
import { AsyncUser } from "../../common/AsyncUser";
import Emptycart from "../../common/EmptyCart/Emptycart";
import CartItem from "../Cart/CartItem/CartItem";
import useStyle from "./style";
function ListCancel(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const listCancel = useSelector((state) => state.cart.listCancel);
  useEffect(() => {
    AsyncUser().then(() => {
      dispatch(FBfetchListCancel());
    });
  }, []);
  const renderListCancel = () => {
    let xhtml;
    if (listCancel.length > 0) {
      xhtml = listCancel.map((item) => {
        return (
          <CartItem huydon={true} key={item.cartItem.id} cartProduct={item} />
        );
      });
    }
    return xhtml;
  };
  return listCancel.length > 0 ? (
    <div className={classes.wrap}>
      <h4 style={{ margin: "auto" }}>Đơn hàng đã hủy</h4>
      <div className={classes.huy}>{renderListCancel()}</div>
    </div>
  ) : (
    <Emptycart />
  );
}

export default ListCancel;
