import { Modal } from "@material-ui/core";
import { useStyle } from "./style";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import * as modalActions from "./../actions/modal";
function MyModal(props) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modalReducer.showModal);
  const title = useSelector((state) => state.modalReducer.title);
  const component = useSelector((state) => state.modalReducer.component);
  const classes = useStyle();

  const handleClose = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <div className={classes.wrap}>
      <Modal open={showModal} onClose={handleClose}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon onClick={() => handleClose()} className={classes.icon} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    </div>
  );
}

export default MyModal;
