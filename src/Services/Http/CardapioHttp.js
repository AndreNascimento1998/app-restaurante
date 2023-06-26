import axios from 'axios';

class CardapioHttp {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000', 
    });
  }

  async getLanche() {
    try {
      const response = await this.api.get('/lanches');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Erro ao obter lanches ${error}`);
    }
  }
}

export default CardapioHttp;
