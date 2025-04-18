import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Interaction } from "./interaction.entity";
import { SalesOpportunity } from "./salesOpportunity.entity";

@Entity('customer__tbl')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    phone: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    address: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    company: string;

    @Column({type: 'bit', default: 0})
    isDeleted: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Interaction, (interaction) => interaction.customer)
    interactions: Interaction[];

    @OneToMany(() => SalesOpportunity, (opportunity) => opportunity.customer)
    salesOpportunities: SalesOpportunity[];
}
