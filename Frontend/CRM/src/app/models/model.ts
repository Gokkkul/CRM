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
    assignedTo?: {
      id: number
      name: string;
    }
    source?: string;
    createdAt: Date;
    updatedAt: Date;
  }


  export interface ITask {
    id: number; 
    assignedTo?: {
      id: number;
      name: string;
    } 
    description: string; 
    dueDate: Date; 
    status: string; 
    createdAt: Date; 
  }
  

  export interface IUser {
    id: number; 
    name: string; 
    email: string; 
    role: string; 
    isDeleted: number; 
    createdAt?: Date; 
    updatedAt?: Date; 
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