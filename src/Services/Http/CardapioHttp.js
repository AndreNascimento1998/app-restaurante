import axios from 'axios';

class CardapioHttp {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000', 
    });
  }

  async getAlimentoCategoria(rota) {
    try {
      const response = await this.api.get(`${rota}`);
      return response.data;
    } catch (error) {
      return []
    }
  }
}

export default CardapioHttp;
