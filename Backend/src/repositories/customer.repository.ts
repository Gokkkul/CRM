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
        return `Customer updated successfully...!`;
    }

    async deleteCustomer(id: number){
        const data = await this.appDataSource.delete(id);
        return `Customer deleted successfully...!`
    }
}