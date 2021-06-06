const validate =(values)=>{
  var errors ={};
  const { name,detailAddres,phone } = values;
  if(!name){
    errors.name="Vui lòng nhập tên của bạn";
  }
  else if(name.trim().length < 1 ){
  errors.name="Vui lòng nhập tên của bạn"
  }
   if(!detailAddres ){
    errors.detailAddres="Vui lòng nhập địa chỉ của bạn"
    }
   else if(detailAddres.trim().length < 10 ){
      errors.detailAddres="Địa chỉ ít nhất 10 kí tự"
      }
   if(!phone ){
      errors.phone="Vui lòng nhập số điện thoại của bạn"
        }
    else if(!Number.isInteger(+phone)){
      errors.phone="Số điện thoại không hợp lệ"
     }
    else if(phone.trim().length < 10 ){
      errors.phone="Số điện thoại không hợp lệ"
          }
  return errors;

}
export default validate;