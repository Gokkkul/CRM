import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Interaction } from "./interaction.entity";
import { Task } from "./task.entity";
import { EmailLog } from "./emailLog.entity";
import { Report } from "./report.entity";
import { Lead } from "./lead.entity";

@Entity("user___tbl")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string; // Hashed password

  @Column({ type: "varchar", length: 50 })
  role: string; // e.g., "admin", "sales_rep"

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: "bit", nullable: true, default: 0 })
  isDeleted: number;

  // @OneToMany(() => Interaction, (interaction) => interaction.handledBy)
  // interactions: Interaction[];

  // @OneToMany(() => Task, (task) => task.assignedTo)
  // tasks: Task[];

  // @OneToMany(() => EmailLog, (emailLog) => emailLog.sentBy)
  // emailLogs: EmailLog[];

  // @OneToMany(() => Report, (report) => report.generatedBy)
  // reports: Report[];

  // @OneToMany(() => Lead, (lead) => lead.assignedTo)
  // leads: Lead[]; // This will hold all leads assigned to this user

  @OneToMany(() => Interaction, (interaction) => interaction.handledBy, {
    cascade: true,
  })
  interactions: Interaction[];

  @OneToMany(() => Task, (task) => task.assignedTo, { cascade: true })
  tasks: Task[];

  @OneToMany(() => EmailLog, (emailLog) => emailLog.sentBy, { cascade: true })
  emailLogs: EmailLog[];

  @OneToMany(() => Report, (report) => report.generatedBy, { cascade: true })
  reports: Report[];

  @OneToMany(() => Lead, (lead) => lead.assignedTo, { cascade: true })
  leads: Lead[];
}
