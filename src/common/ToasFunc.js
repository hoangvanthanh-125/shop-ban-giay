import { toast } from 'react-toastify';

export const ToastFunc = (err) => {
  let message = null;
  if(typeof err === 'object' && err.message){
    ({message} = err);
    toast.error(message);
  }
}
export const  ToastFuncSuccess = mess =>{
  if(mess!==null){
      toast.success(mess);
  }
}

