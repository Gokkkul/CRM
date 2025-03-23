import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    type: string; // e.g., "sales report", "activity report"

    @Column({ type: "text" })
    content: string; // JSON or other structured data

    @ManyToOne(() => User, (user) => user.reports)
    generatedBy: User;

    @CreateDateColumn()
    generatedAt: Date;
}
