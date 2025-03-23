import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.tasks)
    assignedTo: User;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "date" })
    dueDate: Date;

    @Column({ type: "varchar", length: 50 })
    status: string; // e.g., "pending", "completed"

    @CreateDateColumn()
    createdAt: Date;
}
