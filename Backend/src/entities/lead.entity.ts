import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { SalesOpportunity } from "./salesOpportunity.entity";

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    phone: string;

    @Column({ type: "varchar", length: 50 })
    status: string; // e.g., "new", "contacted", "qualified"

    @Column({ type: "varchar", length: 255, nullable: true })
    assignedTo: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    source: string;

    @Column({type: 'bit'})
    isDeleted: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => SalesOpportunity, (opportunity) => opportunity.lead, { nullable: true })
    salesOpportunity: SalesOpportunity;
}
