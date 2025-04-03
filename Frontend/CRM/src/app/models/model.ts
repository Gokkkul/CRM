export interface ICustomer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface ILead {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    assignedTo?: string;
    source?: string;
    createdAt: Date;
    updatedAt: Date;
  }