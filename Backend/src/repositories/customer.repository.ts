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
import { validate } from "class-validator"; // for validation
import { Lead } from "../entities/lead.entity";
import { classToPlain } from "class-transformer";

export class CustomerRepository {
  private appDataSource = AppDataSource.getRepository(Customer);
  private leadRepo = AppDataSource.getRepository(Lead);

  // Add Customer
  async addCustomer(customerDto: CreateCustomerDto): Promise<string> {
    // Validate DTO
    const errors = await validate(customerDto);
    if (errors.length > 0) {
      throw new Error("Validation failed: " + errors);
    }

    const customer = this.appDataSource.create(customerDto);
    await this.appDataSource.save(customer);
    return "Customer added successfully...!";
  }

  // Update Customer
  async updateCustomer(
    id: number,
    customerDto: UpdateCustomerDto
  ): Promise<any> {
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
    return "Customer deleted successfully...!";
  }

  // Get customers (only not deleted)
  async getCustomer(): Promise<Customer[]> {
    const result = await this.appDataSource.find({ where: { isDeleted: 0 } });
    return result;
  }

  async addLeadToCustomer() {
    const result = await this.leadRepo.find({ where: { status: "qualified" } });

    if (result.length === 0) {
      return "No qualified leads found.";
    }

    const customerDataArray = this.appDataSource.create(
      result.map((lead) => classToPlain(lead))
    ); // Create multiple objects

    await this.leadRepo.update({status: 'qualified'},{isDeleted: 1})

    await this.appDataSource.save(customerDataArray); // Save all objects at once

    return `${customerDataArray.length} Customers added successfully!`;
  }
}
