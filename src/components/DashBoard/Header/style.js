import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    top: 0,
    bottom: "auto",
  },

  menuButton: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      display: "block",
    },
  },
  title: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  nameShop: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
      width: "30%",
      fontSize: 14,
      marginRight: 0,
    },
  },

  small: {
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      display: "none",
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 20,
      marginLeft: 0,
    },
  },
  search: {
    // position: 'relative',
    // boder:'solid 1px black',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   paddingLeft:0,
    //   marginLeft: 15,
    //   width: '80%',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // [theme.breakpoints.down('xs')]:{
    //   marginLeft:0,
    //   paddingLeft:0
    // }
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    // [theme.breakpoints.down('xs')]:{
    //   marginLeft:22,
    //   paddingLeft:0
    // }
  },
  moreIcon: {
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
  },
  active: {
    borderRadius: 100,
    "&>a>div>div>span": {
      color: "red",
    },
  },
  hover: {
    "&:hover": {
      borderRadius: 9999,
    },
  },
  textLink: {
    color: "black",
    "& > span": {
      fontFamily: "Courier New",
      fontWeight: 600,
    },
  },
  text: {
    color: "black",
    fontSize: "40px",
  },
}));
