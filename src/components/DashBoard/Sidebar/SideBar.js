import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ContactsIcon from "@material-ui/icons/Contacts";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import * as uiActions from "./../../../actions/ui";
import useStyles from "./style";
function SideBar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const showSideBar = useSelector((state) => state.ui.showSideBar);
  const toggleDrawer = (anchor, open) => (event) => {
    dispatch(uiActions.hideSidebar());
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  };

  function OldSchoolMenuLink({ label, to, activeOnlyWhenExact, Icon }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <div className={match ? classes.active : classes.hover}>
        <Link className={classes.link} to={to}>
          <ListItem button>
            <ListItemIcon>
              <Icon className={classes.icon} color="secondary" />
            </ListItemIcon>
            <ListItemText className={classes.textLink} primary={label} />
          </ListItem>
        </Link>
      </div>
    );
  }

  return (
    <SwipeableDrawer
      className={classes.drawer}
      open={showSideBar}
      onClose={toggleDrawer("show", false)}
      // onClose={toggleDrawer(anchor, false)}
      classes={{
        paper: classes.drawerPaper,
      }}
      onOpen={toggleDrawer("show", false)}
    >
      <div className={classes.drawerHeader}>
        <List className={classes.list}>
          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/"
            label="Trang chủ"
            Icon={HomeIcon}
          />
          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/products"
            label="Sản phẩm"
            Icon={AppsIcon}
          />

          <OldSchoolMenuLink
            activeOnlyWhenExact={false}
            to="/intro"
            label="Giới thiệu"
            Icon={ContactsIcon}
          />
        </List>
      </div>
    </SwipeableDrawer>
  );
}

export default SideBar;
