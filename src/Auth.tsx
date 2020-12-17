import api from '../src/Api';
import nodeRSA from "node-rsa";


class Auth {
  private async getPulbicKey() {
    return api.getpublicKey();
  }
  
  private encrypt(pem: string, password: string) {
    const key = new nodeRSA(pem);
    return key.encrypt(password, "base64");
  }
  public async encryptPass(password: string) {
      const pem = await this.getPulbicKey()
       return this.encrypt(pem, password) 
  }
}
export default new Auth();
