import { Request, Response } from 'express'
import knex from '../database/connection' // importa a conexão com o banco de dados

/**
 * Classe responsável por listar todos os itens disponíveis
 */
class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `192.168.1.9:3333/uploads/${item.image}`
      }
    })
    
    return response.json(serializedItems)
  }
}

export default ItemsController
