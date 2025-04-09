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


  export interface ITask {
    id: number; // Unique identifier for the task
    assignedTo?: {
      name: string;
    } // The ID of the assigned user
    description: string; // Details about the task
    dueDate: Date; // The deadline for the task
    status: string; // e.g., "pending", "completed"
    createdAt: Date; // When the task was created
  }
  

  export interface IUser {
    id: number; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    role: string; // Role (e.g., admin, sales_rep)
    isDeleted: number; // Soft-delete flag (0: active, 1: deleted)
    createdAt?: Date; // Date when the user was created
    updatedAt?: Date; // Last update timestamp
  }


  export interface ISalesOpportunity {
    count: any;
    id: number;
    stage: string;
    customer?: { id: number; name: string };
    lead?: { id: number };
    value: number;
    expectedCloseDate?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface IEmail {
    id?: number;
    emailSubject: string;
    emailBody: string;
    recipient: string;
    sentBy: number;
    sentAt?: string;
  }