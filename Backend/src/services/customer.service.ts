// import { Customer } from "../entities/customer.entity";
// import { customerRepository } from "../repositories/customer.repository";


// const customerRepo = new customerRepository()

// export class customerService{
//     async addCustomer(customer: Partial<Customer>){
//         try {
//             const result = await customerRepo.addCustomer(customer);
//             return result;
//         } catch (error) {
//             return `Error: ${error}`;
//         }
        
//     }

//     async updateCustomer(id: number, customer: Partial<Customer>){
//         try {
//             const result = await customerRepo.updateCustomer(id, customer)
//             return result;
//         } catch (error) {
//             return `Error: ${error}`
//         }
//     }

//     async deleteCustomer(id: number){
//         try {
//             const result = await customerRepo.deleteCustomer(id);
//             return result;
//         } catch (error) {
//             return `Error: ${error}`;
//         }
//     }

//     async getCustomer(){
//         try {
//             const result = await customerRepo.getCustomer()
//             return result;
//         } catch (error) {
//             return `Error: ${error}`
//         }
//     }
// }

import { CustomerRepository } from "../repositories/customer.repository";
import { CreateCustomerDto, UpdateCustomerDto } from "../dto/customer.dto"; 
import { Customer } from "../entities/customer.entity";

export class CustomerService {
    private customerRepo = new CustomerRepository();
    
    // Add Customer
    async addCustomer(customerDto: CreateCustomerDto): Promise<string> {
        return await this.customerRepo.addCustomer(customerDto);
    }

    // Update Customer
    async updateCustomer(id: number, customerDto: UpdateCustomerDto): Promise<any> {
        return await this.customerRepo.updateCustomer(id, customerDto);
    }

    // Delete Customer
    async deleteCustomer(id: number): Promise<string> {
        return await this.customerRepo.deleteCustomer(id);
    }

    // Get Customers
    async getCustomer(): Promise<Customer[]> {
        return await this.customerRepo.getCustomer();
    }
}
