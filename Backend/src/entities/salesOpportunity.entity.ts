import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { Customer } from "./customer.entity";
import { Lead } from "./lead.entity";

@Entity('sales__opportunity__tbl')
export class SalesOpportunity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer, (customer) => customer.salesOpportunities)
    customer: Customer;

    @OneToOne(() => Lead, (lead) => lead.salesOpportunity, { nullable: true })
    lead: Lead;

    @Column({ type: "varchar", length: 50 })
    stage: string; // e.g., "prospecting", "negotiation", "closing"

    @Column({ type: "float" })
    value: number;

    
    @Column({type: 'bit', default: 0})
    isDeleted: number;

    @Column({ type: "date", nullable: true })
    expectedCloseDate: Date;

    @Column({ type: "text", nullable: true })
    notes: string;
}
