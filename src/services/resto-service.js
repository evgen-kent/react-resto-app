export default class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`COULD NOT FETCH MATHER FACKER ${url}, received ${res.status}`);
        }
        console.log(res)
        return await res.json();
    }


    async getMenuItems() {
       
        return await this.getResource(`/menu/`);
        
    }
}