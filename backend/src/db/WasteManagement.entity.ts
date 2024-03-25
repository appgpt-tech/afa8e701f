// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("WasteManagement")
export class WasteManagementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
wasteType: string;

@Column("real",{nullable: true})
quantityGenerated: number;

@Column("text",{nullable: true})
recyclingMethod: string;

@Column("text",{nullable: true})
reductionInitiatives: string;


}