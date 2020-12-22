import { OrderBody } from './Order'
import auth from "../src/Auth";
const baseUrl: string = 'http://localhost:8080'

function setHeaders() {
  const token = auth.getToken()
  alert(token)
  let headers
  if(!token) {
    const headers = {
      "Content-Type": "application/json"
    };
    return headers
  }
  headers = { Authorization: `Bearer ${token}`}
  return headers
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
      return this.__request('POST', `${baseUrl}/v1/admin/login`, JSON.stringify(body))
  }

  public async __request(method: string, uri: string, body?: any) {
    let apiError: any;
    const headers = setHeaders()
    try {
      const response = await fetch(uri, {headers, method, body: body });
      console.log(response);
      if (!response.ok) {
        const packagedError = {
          json: await response.json(),
          status: response.status,
          statusText: response.statusText
        };
        throw new Error(JSON.stringify(packagedError));
      }
      return response.json();
    } catch (error) {
      console.log(error);
      apiError = JSON.parse(error);
    }
    console.error(`Error sending API request to ${uri} ${method}: ${apiError}`);
    throw new Error(apiError);
  }
}
export default new Api()