import { Grid } from "@material-ui/core";
import firebase from "firebase";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListSearch } from "../../actions/search";
import Product from "../product/Product";
import "./Search.css";
function Search(props) {
  const dispatch = useDispatch();
  const textSearch = useSelector((state) => state.search.searchText);
  var listSearch = useSelector((state) => state.search.listSearch);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((list) => {
        dispatch(setListSearch(list.docs));
      });
  }, [textSearch]);
  var listFilter = [];
  console.log(listSearch);
  if (listSearch.length > 0) {
    listFilter = listSearch.filter((item) => {
      return (
        item?.data()?.name?.toLowerCase().indexOf(textSearch.toLowerCase()) > -1
      );
    });
  }
  const renderListSearch = () => {
    let xhtml = null;
    if (listFilter.length > 0) {
      xhtml = (
        <Grid container spacing={0}>
          {listFilter.map((product) => {
            return (
              <Grid key={product.id} item xs={6} sm={4} md={3}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      );
    }
    return xhtml;
  };
  return (
    <div className="searchListCSS">
      {listFilter.length > 0 ? (
        <h1 className="titleSsearch">
          Kết quả tìm kiếm cho '<span className="kqsearch">{textSearch}</span>'
        </h1>
      ) : (
        <h1 className="titleSsearch">
          {" "}
          Không tìm thấy '<span className="kqsearch">{textSearch}</span>'
        </h1>
      )}
      <div>{renderListSearch()}</div>
    </div>
  );
}

export default Search;
