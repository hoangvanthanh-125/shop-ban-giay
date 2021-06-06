
import axios from "axios";

class AxiosService{
constructor(){
  const instance=axios.create();
  this.instance = instance;
  instance.interceptors.response.use(this.handleSuccsess,this.handleError);
}
handleSuccsess(respon){
  return respon;
}
handleError(err){
  return Promise.reject(err);
}
get(url){
  return this.instance.get(url);
}
post(url,data){
  return this.instance.post(url,data);
}
put(url,data){
  return this.instance.put(url,data);
}
delete(url){
  return  this.instance.delete(url);
}
}
export default new AxiosService();