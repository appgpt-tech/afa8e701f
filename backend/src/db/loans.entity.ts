// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("loans")
export class loansEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
loanID: string;

@Column("integer",{nullable: true})
bookID: number;

@Column("integer",{nullable: true})
memberID: number;

@Column("date",{nullable: true})
loanDate: Date;

@Column("date",{nullable: true})
dueDate: Date;

@Column("date",{nullable: true})
returnDate: Date;


}