import { OrderBody } from './Order'
import {ContactBody} from './ContactUs'
import auth from "../src/Auth";
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
  public contactUs(body: ContactBody) {
    return this.__request("POST", `${baseUrl}/v1/contact-us`, JSON.stringify(body));
  }

  public async __request(method: string, uri: string, body?: any) {
    let apiError: any;
    const headers = setHeaders();
    try {
      const response = await fetch(uri, { headers, method, body: body });
      console.log(response);
      if (!response.ok) {
        const packagedError = {
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
      // TODO: 403 issue needs to be fixed
      console.log(error);
      apiError = JSON.parse(error);
      if (apiError.status === 403) {
        auth.expireCookie();
        window.location.href = "/";
        return;
      }
    }
    console.error(`Error sending API request to ${uri} ${method}: ${apiError}`);
    throw new Error(apiError);
  }
}
export default new Api()