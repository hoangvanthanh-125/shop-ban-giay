import * as TypesProducts from "./../constant/products";
import * as TypeCmt from "./../constant/comments";
var initialState = {
  products: [],
  currentProduct: null,
  listTypeProduct: [],
  listComment: [],
  listNoiBat: [],
  listSale: [],
};
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TypesProducts.FETCH_LIST:
      return {
        ...state,
      };
    case TypesProducts.FETCH_LIST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        products: data,
      };
    case TypesProducts.ADD_PRODUCT:
      return {
        ...state,
      };
    case TypesProducts.ADD_PRODUCT_SUCCESS:
      const { product } = action.payload;
      return {
        ...state,
        products: [product].concat(state.products),
      };

    case TypesProducts.FETCH_PRODUCT: {
      return {
        ...state,
      };
    }
    case TypesProducts.FETCH_PRODUCT_SUCCESS: {
      const { currProduct } = action.payload;
      return {
        ...state,
        currentProduct: currProduct,
      };
    }
    case TypesProducts.FETCH_TYPE_PRODUCT: {
      return {
        ...state,
      };
    }
    case TypesProducts.FETCH_TYPE_PRODUCT_SUCCESS: {
      const { listTypeProduct } = action.payload;

      return {
        ...state,
        listTypeProduct: listTypeProduct,
      };
    }
    case TypeCmt.FETCH_LIST_COMMENT: {
      return {
        ...state,
      };
    }
    case TypeCmt.FETCH_LIST_COMMENT_SUCCESS: {
      const { listComment } = action.payload;
      return {
        ...state,
        listComment: [...listComment],
      };
    }
    case TypeCmt.ADD_LIST_COMMENT: {
      return { ...state };
    }
    case TypeCmt.ADD_LIST_COMMENT_SUCCESS: {
      const { commentItem } = action.payload;
      const newListComment = [commentItem].concat(state.listComment);
      return {
        ...state,
        listComment: [...newListComment],
      };
    }
    case TypesProducts.FETCH_LIST_NOIBAT: {
      return {
        ...state,
      };
    }
    case TypesProducts.FETCH_LIST_NOIBAT_SUCCESS: {
      const { listNoiBat } = action.payload;
      return {
        ...state,
        listNoiBat: [...listNoiBat],
      };
    }
    case TypesProducts.FETCH_LIST_SALE: {
      return {
        ...state,
      };
    }
    case TypesProducts.FETCH_LIST_SALE_SUCCESS: {
      const { listSale } = action.payload;
      return {
        ...state,
        listSale: [...listSale],
      };
    }
    default:
      return state;
  }
}

export default productsReducer;
