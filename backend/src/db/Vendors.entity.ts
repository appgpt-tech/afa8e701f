//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Vendors")
export class VendorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
vendorId: number;

@Column("text",{nullable: true})
companyName: string;

@Column("text",{nullable: true})
contactName: string;

@Column("text",{nullable: true})
email: string;

@Column("text",{nullable: true})
password: string;


}