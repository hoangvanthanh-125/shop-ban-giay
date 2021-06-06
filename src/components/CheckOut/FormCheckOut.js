import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FBsetListWaiting } from "../../actions/cart";
import validate from "../../common/validate";
import { AsyncUser } from "./../../common/AsyncUser";
import renderTextField from "./../../components/FormHelper/TextField/index";
import useStyle from "./style";

function FormCheckOut(props) {
  const listCheckOut = useSelector((state) => state.cart.listCheckOut);
  const classes = useStyle();
  const dispatch = useDispatch();
  const { handleSubmit, invalid } = props;
  const [open, setOpen] = React.useState(false);
  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState("");
  const [listHuyen, setListHuyen] = useState([]);
  const [listXa, setListXa] = useState([]);
  const [huyen, setHuyen] = useState("");
  const [xa, setXa] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/phuockaito/KaitoShop.cf/master/src/data.json"
    ).then((res) => res.json().then((city) => setListCity(city)));
  }, []);
  const renderListCity = () => {
    let xhtml = null;
    if (listCity.length > 0) {
      xhtml = listCity.map((city) => (
        <MenuItem value={city.name} key={city.name}>
          {city.name}
        </MenuItem>
      ));
    }
    return xhtml;
  };
  const renderListHuyen = () => {
    let xhtml = null;
    if (listHuyen.length > 0) {
      xhtml = listHuyen.map((huyen) => (
        <MenuItem value={huyen.name} key={huyen.name}>
          {huyen.name}
        </MenuItem>
      ));
    }
    return xhtml;
  };
  const renderListXa = () => {
    let xhtml = null;
    if (listXa.length > 0) {
      xhtml = listXa.map((xa) => (
        <MenuItem value={xa.name} key={xa.name}>
          {xa.name}
        </MenuItem>
      ));
    }
    return xhtml;
  };
  const handleSubmitForm = (data) => {
    const { name, phone, detailAddres } = data;

    const newList = listCheckOut.map((item) => {
      return {
        ...item,
        cartItem: { ...item.cartItem, id: `${item.cartItem.id}-${Date.now()}` },
        info: {
          name,
          phone,
          detailAddres,
          city,
          huyen,
          xa,
        },
      };
    });

    AsyncUser().then(() => {
      dispatch(FBsetListWaiting(newList));
    });
  };
  const handleChange = (event) => {
    if (event.target.name === "city") {
      setCity(event.target.value);
      const listHuyen = listCity.find(
        (item) => item.name === event.target.value
      ).huyen;
      setListHuyen(listHuyen);
      setListXa([]);
    }
    if (event.target.name === "huyen") {
      setHuyen(event.target.value);
      const listXa = listHuyen.find(
        (item) => item.name === event.target.value
      ).xa;
      setListXa(listXa);
    }
    if (event.target.name === "xa") {
      setXa(event.target.value);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.wrapLocation}>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <div className={classes.container}>
          <h1>Thanh toán và giao hàng</h1>
          <Field
            label="Họ và tên"
            name="name"
            component={renderTextField}
            className={classes.input}
          />
          <Field
            label="Số điện thoại"
            id="sdt"
            name="phone"
            multiline
            component={renderTextField}
            className={classes.input}
          />
        </div>

        <FormControl style={{ width: "90%" }} className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label-tinh">
            Tỉnh
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={city}
            onChange={handleChange}
            name="city"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {renderListCity()}
          </Select>
        </FormControl>
        <FormControl style={{ width: "90%" }} className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Quận/Huyện</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label-huyen"
            id="demo-controlled-open-select-huyen"
            value={huyen}
            onChange={handleChange}
            name="huyen"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {renderListHuyen()}
          </Select>
        </FormControl>
        <FormControl style={{ width: "90%" }} className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Phường/Xã</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label-xa"
            id="demo-controlled-open-select-xa"
            value={xa}
            onChange={handleChange}
            name="xa"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {renderListXa()}
          </Select>
        </FormControl>
        <Field
          label="Địa chỉ cụ thể (xóm,đường,ngõ,số nhà,...)"
          id="diachicuthe"
          name="detailAddres"
          multiline
          component={renderTextField}
          className={classes.input}
        />
        <Button
          className={classes.buttonCheckOut}
          disabled={invalid || !city || !xa || !huyen}
          type="submit"
          variant="contained"
          color="primary"
        >
          Thanh toán
        </Button>
      </form>
    </div>
  );
}
const FORM_NAME = "FORM_NAME";
FormCheckOut = reduxForm({
  form: FORM_NAME,
  validate: validate,
})(FormCheckOut);
export default FormCheckOut;
