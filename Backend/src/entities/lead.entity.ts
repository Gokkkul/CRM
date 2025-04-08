import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { SalesOpportunity } from "./salesOpportunity.entity";
import { Exclude } from "class-transformer";

@Entity('lead__tbl')
export class Lead {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    phone: string;

    @Exclude()
    @Column({ type: "varchar", length: 50 })
    status: string; // e.g., "new", "contacted", "qualified"

    @Exclude()
    @Column({ type: "varchar", length: 255, nullable: true })
    assignedTo: string;

    // @ManyToOne(() => User, (user) => user.leads, { nullable: true })
    // @JoinColumn({ name: "assignedTo" }) // This will link the assignedTo column to the User entity
    // assignedTo: User;

    @Exclude()
    @Column({ type: "varchar", length: 255, nullable: true })
    source: string;

    @Column({type: 'bit'})
    isDeleted: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Exclude()
    @OneToOne(() => SalesOpportunity, (opportunity) => opportunity.lead, { nullable: true })
    salesOpportunity: SalesOpportunity;
}
