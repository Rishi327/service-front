import api from '../src/Api';
import nodeRSA from "node-rsa";
import cookies from 'cookies-js'


class Auth {
  private async getPulbicKey() {
    return await api.getpublicKey();
  }
  
  private encrypt(pem: string, password: string) {
    const key = new nodeRSA(pem);
    return key.encrypt(password, "base64");
  }
  public async encryptPass(password: string) {
      const pem = await this.getPulbicKey()
       return this.encrypt(pem.key, password) 
  }
  public setCookie(key: string, value: string) {
    return cookies.set(key, value)
  }
  public getToken() {
     return cookies.get('token')
  }
  public expireCookie(token: any) {
    return cookies.expire(token)
  }
  public isAdmin() {
    return !!cookies.get('isAdmin')
  }
}
export default new Auth();
