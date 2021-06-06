import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteCart,
  FBaddLisrCancel,
  FBaddListDaNhan,
  FBdeleteProductCancel,
  updateCart,
} from "../../../actions/cart";
import {
  changeModalContent,
  changeModalTitle,
  hideModal,
  showModal,
} from "../../../actions/modal";
import { AsyncUser } from "../../../common/AsyncUser";
import { CustomPrice } from "../../../common/Customprice";
import { ToastFuncSuccess } from "../../../common/ToasFunc";
import "./CartItem.css";
import useStyles from "./style";

function CartItem(props) {
  const { cartProduct, updateQuantity, iconDelete, huydon, waiting } = props;
  const { quantity, cartItem } = cartProduct;
  const { realPrice } = cartItem;
  const { name, id } = cartItem;
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const totalMoney = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  };
  const clickDaNhan = () => {
    AsyncUser().then(() => {
      dispatch(FBaddListDaNhan(props.cartProduct));
    });
  };
  const clickCancel = () => {
    AsyncUser()
      .then(() => {
        dispatch(FBaddLisrCancel(props.cartProduct));
      })
      .then(() => {
        dispatch(hideModal());
        ToastFuncSuccess("Hủy đơn thành công");
      });
  };
  const clickHuyDon = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Hủy đơn hàng"));
    dispatch(
      changeModalContent(
        <div>
          <h3>
            Bạn có chắc muốn hủy đơn hàng{" "}
            <strong style={{ color: "red" }}>{name}</strong>
          </h3>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => dispatch(hideModal())}
            className={classes.ItemButton}
            variant="contained"
            color="primary"
          >
            Không
          </Button>
          <Button
            onClick={() => clickCancel()}
            className={classes.ItemButton}
            variant="outlined"
            color="secondary"
          >
            Có
          </Button>
        </div>
      )
    );
  };
  const clickDatlai = () => {
    AsyncUser()
      .then(() => {
        dispatch(FBdeleteProductCancel(props.cartProduct));
        ToastFuncSuccess("Đặt lại thành công");
      })
      .then(() => {
        dispatch(hideModal());
      });
  };
  const showModalDatLai = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Hủy đơn hàng"));
    dispatch(
      changeModalContent(
        <div>
          <h3>
            Bạn có chắc muốn đặt lại đơn hàng{" "}
            <strong style={{ color: "red" }}>{name}</strong>
          </h3>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => clickDatlai()}
            className={classes.ItemButton}
            variant="contained"
            color="primary"
          >
            Có
          </Button>
          <Button
            onClick={() => dispatch(hideModal())}
            className={classes.ItemButton}
            variant="outlined"
            color="secondary"
          >
            Không
          </Button>
        </div>
      )
    );
  };
  const onChangeClick = () => {
    history.push(`/product/${id.split("-")[0]}/${name}`);
  };
  const handleUpdateCart = (number) => {
    if (cartProduct.quantity === 1 && number === -1)
      dispatch(deleteCart(cartProduct));
    else dispatch(updateCart(cartProduct, number));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteCart(cartProduct));
  };

  return (
    <div className="cartItemCss">
      <div className="wrapCartCss">
        <div onClick={() => onChangeClick()} className="imgCartItemCss">
          <img className={classes.img} src={cartItem?.mainImg} alt="no" />
          <div className="nameProductCartCss">
            <div className="name">{cartItem?.name}</div>
            <span>Màu : {cartProduct.color}</span>
            <div
              className="mautuongtrung"
              style={{ background: cartProduct.color }}
            ></div>
            <span>Size : {cartProduct.size}</span>
          </div>
        </div>
        <div className="pricecartCss">
          <h6>Giá</h6>
          <span> {CustomPrice(realPrice)}</span>
        </div>
        <div className="quntitycartCss">
          <h6>Số lượng</h6>
          {updateQuantity ? (
            <div className={classes.columnprice}>
              <button
                onClick={() => handleUpdateCart(-1)}
                className={classes.button}
                color="primary"
                variant="contained"
              >
                -
              </button>
              <button className={classes.buttonQuantity}> {quantity}</button>
              <button
                onClick={() => handleUpdateCart(1)}
                className={classes.button}
                color="primary"
                variant="contained"
              >
                +
              </button>
            </div>
          ) : (
            <div style={{ color: "red" }}>{quantity}</div>
          )}
        </div>
      </div>
      <div className="totalcartCss">
        <div style={{ display: "flex" }}>
          <h6>Tổng cộng : </h6>
          <span> {CustomPrice(totalMoney(quantity, realPrice))}</span>
        </div>
        {huydon === true ? (
          <Button
            onClick={() => showModalDatLai()}
            className="buttonDatLaiCss"
            variant="contained"
            color="primary"
          >
            Đặt lại
          </Button>
        ) : (
          ""
        )}
        {waiting === true ? (
          <div>
            <Button
              style={{ marginRight: 10 }}
              className="buttonDatLaiCss"
              onClick={() => clickDaNhan()}
              variant="contained"
              color="primary"
            >
              Đã nhận
            </Button>
            <Button
              className="buttonDatLaiCss"
              onClick={() => clickHuyDon()}
              variant="outlined"
              color="secondary"
            >
              Hủy đơn
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      {iconDelete === true ? (
        <div className="buttonDeleteCss">
          <IconButton onClick={() => handleDeleteProduct()}>
            <DeleteIcon className="iconCssDelete" />
          </IconButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartItem;
