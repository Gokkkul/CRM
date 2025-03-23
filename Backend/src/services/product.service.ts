import { productRepository } from "../repositories/product.repository";

export class Product{
    async addProduct(name:string, description: string, price: number){
        try {
            const product = await productRepository.create({
                name: name,
                description: description,
                price: price
            })

            await productRepository.save(product);
        } catch (error) {
            return `Error: ${error}`
        }
    }

    async delete(id: number){
        try {
            await productRepository.delete(id)
        } catch (error) {
            return `Error: ${error}`
        }
    }

}