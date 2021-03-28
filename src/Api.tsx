import { OrderBody } from './Order'
import {ContactBody} from './ContactUs'
import auth from "../src/Auth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const baseUrl: string = 'http://localhost:8080'

function setHeaders() {
  const token = auth.getToken()
  let headers
  if(!token) {
    const headers = {
      "Content-Type": "application/json"
    };
    return headers
  }
  headers = { 
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`}
  return headers
}

function setNewToken(token: string) {
  if(token) {
    auth.setCookie('token', token)
  }
}

class Api {
  public placeOrder(body: OrderBody) {
    return this.__request(
      "POST",
      `${baseUrl}/v1/placeOrder`,
      JSON.stringify(body)
    );
  }
  public getpublicKey() {
    return this.__request("GET", `${baseUrl}/v1/getPublicKey`);
  }
  public adminAuth(body: object) {
    return this.__request(
      "POST",
      `${baseUrl}/v1/admin/login`,
      JSON.stringify(body)
    );
  }
  public allOrders() {
    return this.__request("GET", `${baseUrl}/v1/admin/getAllOrders`);
  }
  public fullFillOrder(orderId) {
    return this.__request("PUT", `${baseUrl}/v1/admin/fullFillOrder/${orderId}`);
  }
  public contactUs(body: ContactBody) {
    return this.__request("POST", `${baseUrl}/v1/contact-us`, JSON.stringify(body));
  }

  public async __request(method: string, uri: string, body?: any) {
    let apiError: any;
    let packagedError: any
    const headers = setHeaders();
    try {
      const response = await fetch(uri, { headers, method, body: body });
      console.log(response);
      if (!response.ok) {
        packagedError = {
          json: await response.json(),
          status: response.status,
          statusText: response.statusText
        };
        throw new Error(JSON.stringify(packagedError));
      }
      const token: any = response.headers;
      setNewToken(token["refreshedToken"]);
      return response.json();
    } catch (error) {
      if (packagedError && packagedError.status === 403) {
         Swal.fire({
           icon: "error",
           title: "Oops...",
           text: "Token expired. Please login again!",
           showConfirmButton: true,
           timer: 8000
         });
         await sleep(10000)
        auth.expireCookie();
        window.location.href = "/";
        return;
      }     
      apiError = JSON.parse(error);
    
    }
    console.error(`Error sending API request to ${uri} ${method}: ${apiError}`);
    throw new Error(apiError);
  }
}
export default new Api()