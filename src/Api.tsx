
const baseUrl: string = 'http://localhost:8080'

class Api {
     public placeOrder() {
         return this.__request('POST', `${baseUrl}/v1/placeOrder`)
     }

    public async __request(method: string, uri: string, body?: any){
        let apiError: any
        try {
            const response = await fetch(uri, {method, body: JSON.stringify(body)})
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
            const parsedError = JSON.parse(error.message)
            apiError = JSON.stringify(parsedError.json)
        }
        console.error(`Error sending API request to ${uri} ${method}: ${apiError}`)
        throw new Error(apiError)
    }
}
export default new Api()