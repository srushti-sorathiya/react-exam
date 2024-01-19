import axios from "axios";
import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API} from "../../constant";

export async function get_product(){
 return axios
   .get (BASE_URL + GET_PRODUCT_API)
   .then((res) => {
     const data = res.data;
     const status = res.status;
     return {
        data,
        status,
     };
   })
   .catch((err) => {
     console.log(err);
   });
}

export async function post_product(action){
  return axios
    .post (BASE_URL + POST_PRODUCT_API,action.payload)
    .then((res) => {
      console.log(res,"from api ");
      const data = res.data;
      const status = res.status;
      return {
         data,
         status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
 }

 export async function delete_product(action){
  console.log(action, "this is from api");
  return axios
    .post (BASE_URL + DELETE_PRODUCT_API,action.payload)
    .then((res) => {
      console.log(res,"from api ");
      const data = res.data;
      const status = res.status;
      return {
         data,
         status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
 }