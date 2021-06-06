import { Grid, Tab, Tabs } from "@material-ui/core";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { FBfetchListWaiting } from "../../actions/cart";
import { hideModal } from "../../actions/modal";
import { AsyncUser } from "../../common/AsyncUser";
import TabPanel from "../../common/TabPanel/TabPenal";
import ListCancel from "../ListCancel/ListCancel";
import ListDaNhan from "../ListDaNhan/ListDaNhan";
import ListWaiting from "../ListWaiting/ListWaiting";
import useStyle from "./style";
import firebase from "firebase";

function InforUser(props) {
  const classes = useStyle();
  const danggiao = (
    <div className={classes.danggiao}>
      <LocalShippingIcon className={classes.icon} />
      <span>Đang giao</span>
    </div>
  );
  const danhan = (
    <div className={classes.danggiao}>
      <BeenhereIcon className={classes.icon} />
      <span>Đã nhận</span>
    </div>
  );
  const dahuy = (
    <div className={classes.danggiao}>
      <RestoreFromTrashIcon className={classes.icon} />
      <span>Đã hủy</span>
    </div>
  );
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const [info, setInfo] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hideModal());
    AsyncUser().then(() => {
      dispatch(FBfetchListWaiting());
      console.log(firebase.auth().currentUser.uid);
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((res) => setInfo(res.data()));
    });
  }, []);
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container>
      <div className={classes.wrapNameEmail}>
        <h4>Thông tin người dùng</h4>
        <div className={classes.infoEmail}>
          <span style={{ fontWeight: "bold" }}>Email</span> :{" "}
          <span>{info.email}</span>
        </div>
        <div className={classes.infoname}>
          <span style={{ fontWeight: "bold" }}>Tên</span> :{" "}
          <span>{info.name}</span>
        </div>
      </div>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={danggiao} />
          <Tab label={danhan} />
          <Tab label={dahuy} />
        </Tabs>
      </Grid>

      <Grid item md={12} xs={12} sm={12}>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            <ListWaiting />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ListDaNhan />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ListCancel />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Grid>
  );
}

export default InforUser;
