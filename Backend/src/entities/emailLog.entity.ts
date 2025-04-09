    import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
    import { User } from "./user.entity";

    @Entity('email__log__tbl')
    export class EmailLog {
        @PrimaryGeneratedColumn()
        id: number;

        @Column({ type: "varchar", length: 255 })
        emailSubject: string;

        @Column({ type: "text" })
        emailBody: string;

        @Column({ type: "varchar", length: 255 })
        recipient: string;

        @Column({type: "bit", default: 0})
        isDeleted: number;

        @ManyToOne(() => User, (user) => user.emailLogs)
        sentBy: User;

        @CreateDateColumn()
        sentAt: Date;
    }
