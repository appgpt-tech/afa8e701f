// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Reports")
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
description: string;


}
