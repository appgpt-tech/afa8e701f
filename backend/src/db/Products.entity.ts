// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Products")
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
name: string;


}
