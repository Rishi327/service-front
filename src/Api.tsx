import { OrderBody } from './Order'
const baseUrl: string = 'http://localhost:8080'

class Api {
     public placeOrder(body: OrderBody) {
         return this.__request('POST', `${baseUrl}/v1/placeOrder`, JSON.stringify(body))
     }

    public async __request(method: string, uri: string, body?: any){
        let apiError: any
        try {
            const response = await fetch(uri, {method, body: body})
            console.log(response)
            if(!response.ok){
                const packagedError = {
                    json: await response.json(),
                    status: response.status, 
                    statusText: response.statusText
                }
                throw new Error (JSON.stringify(packagedError))
            }
            return response.json()
        } catch (error) {
            console.log(error)
            apiError = JSON.parse(error)
        }
        console.error(`Error sending API request to ${uri} ${method}: ${apiError}`)
        throw new Error(apiError)
    }
}
export default new Api()