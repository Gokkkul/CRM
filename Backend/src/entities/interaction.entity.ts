import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Customer } from "./Customer";
import { User } from "./User";

@Entity()
export class Interaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer, (customer) => customer.interactions)
    customer: Customer;

    @ManyToOne(() => User, (user) => user.interactions, { nullable: true })
    handledBy: User;

    @Column({ type: "varchar", length: 50 })
    type: string; // e.g., "email", "call", "meeting"

    @Column({ type: "date" })
    date: Date;

    @Column({ type: "text", nullable: true })
    notes: string;

    @Column({ type: "date", nullable: true })
    followUpDate: Date;

    @CreateDateColumn()
    createdAt: Date;
}
