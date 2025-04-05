import { AppDataSource } from "../config/data-source";
import { Customer } from "../entities/customer.entity";


export class customerRepository{
    private appDataSource = AppDataSource.getRepository(Customer);
    
    async addCustomer(customer: Partial<Customer>){
           const data = await this.appDataSource.create(customer);
           await this.appDataSource.save(data);
           return `Customer added successfully...!`;
    }

    async updateCustomer(id:number,customer: Partial<Customer>){
        const data = await this.appDataSource.update(id,customer);
        return data
    }

    async deleteCustomer(id: number){
        await this.appDataSource.update(id,{isDeleted: 1});
        return `Customer deleted successfully...!`;
    }

    async getCustomer(){
        const result = await this.appDataSource.find({where:{isDeleted:0}});
        return result;
    }
}