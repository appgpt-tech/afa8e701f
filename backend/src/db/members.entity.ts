// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("members")
export class membersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
memberID: string;

@Column("text",{nullable: true})
name: string;

@Column("text",{nullable: true})
emailAddress: string;

@Column("text",{nullable: true})
phoneNumber: string;

@Column("text",{nullable: true})
address: string;

@Column("date",{nullable: true})
membershipStartDate: Date;


}
