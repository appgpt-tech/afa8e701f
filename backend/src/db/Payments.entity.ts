//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Payments")
export class PaymentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
paymentId: number;

@Column("integer",{nullable: true})
orderId: number;

@Column("real",{nullable: true})
amount: number;

@Column("text",{nullable: true})
paymentMethod: string;

@Column("date",{nullable: true})
paymentDate: Date;

@Column("text",{nullable: true})
paymentStatus: string;


}