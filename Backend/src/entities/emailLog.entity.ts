import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class EmailLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    emailSubject: string;

    @Column({ type: "text" })
    emailBody: string;

    @Column({ type: "varchar", length: 255 })
    recipient: string;

    @ManyToOne(() => User, (user) => user.emailLogs)
    sentBy: User;

    @CreateDateColumn()
    sentAt: Date;
}
