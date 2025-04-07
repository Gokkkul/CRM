// import { AppDataSource } from "../config/data-source";
// import { Customer } from "../entities/customer.entity";


// export class customerRepository{
//     private appDataSource = AppDataSource.getRepository(Customer);
    
//     async addCustomer(customer: Partial<Customer>){
//            const data = await this.appDataSource.create(customer);
//            await this.appDataSource.save(data);
//            return `Customer added successfully...!`;
//     }

//     async updateCustomer(id:number,customer: Partial<Customer>){
//         const data = await this.appDataSource.update(id,customer);
//         return data
//     }

//     async deleteCustomer(id: number){
//         await this.appDataSource.update(id,{isDeleted: 1});
//         return `Customer deleted successfully...!`;
//     }

//     async getCustomer(){
//         const result = await this.appDataSource.find({where:{isDeleted:0}});
//         return result;
//     }
// }

import { AppDataSource } from "../config/data-source";
import { Customer } from "../entities/customer.entity";
import { CreateCustomerDto, UpdateCustomerDto } from "../dto/customer.dto"; // import the DTOs
import { validate } from 'class-validator'; // for validation

export class CustomerRepository {
    private appDataSource = AppDataSource.getRepository(Customer);
    
    // Add Customer
    async addCustomer(customerDto: CreateCustomerDto): Promise<string> {
        // Validate DTO
        const errors = await validate(customerDto);
        if (errors.length > 0) {
            throw new Error("Validation failed: " + errors);
        }

        const customer = this.appDataSource.create(customerDto);
        await this.appDataSource.save(customer);
        return 'Customer added successfully...!';
    }

    // Update Customer
    async updateCustomer(id: number, customerDto: UpdateCustomerDto): Promise<any> {
        // Validate DTO
        const errors = await validate(customerDto);
        if (errors.length > 0) {
            throw new Error("Validation failed: " + errors);
        }

        // Update customer data
        const result = await this.appDataSource.update(id, customerDto);
        return result;
    }

    // Soft delete customer (mark as deleted)
    async deleteCustomer(id: number): Promise<string> {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return 'Customer deleted successfully...!';
    }

    // Get customers (only not deleted)
    async getCustomer(): Promise<Customer[]> {
        const result = await this.appDataSource.find({ where: { isDeleted: 0 } });
        return result;
    }
}
