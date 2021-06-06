import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import OptionHeader from "./OptionHeader/OptionHeader";
import SideBar from "./Sidebar/SideBar";
import useStyles from "./style";

function DashBoard(props) {
  useEffect(() => {}, []);
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <div className={classes.header}>
        <Header />
        <OptionHeader />
      </div>

      <div className={classes.wrapper}>
        <SideBar />
        <div className={classes.wrapSort}>{props.children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DashBoard;
