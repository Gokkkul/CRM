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
        try {
            
            return await this.customerRepo.addCustomer(customerDto);
        } catch (error) {
            return `Error: ${error}`
        }
    }

    // Update Customer
    async updateCustomer(id: number, customerDto: UpdateCustomerDto): Promise<any> {
        try {
            return await this.customerRepo.updateCustomer(id, customerDto);
            
        } catch (error) {
             return `Error: ${error}`
        }
    }

    // Delete Customer
    async deleteCustomer(id: number): Promise<string> {
        try {
            return await this.customerRepo.deleteCustomer(id);
            
        } catch (error) {
             return `Error: ${error}`
        }
    }

    // Get Customers
    async getCustomer(): Promise<Customer[]> {
        return await this.customerRepo.getCustomer();
    }

    async addLeadToCustomer(){
        return await this.customerRepo.addLeadToCustomer();
    }
}
