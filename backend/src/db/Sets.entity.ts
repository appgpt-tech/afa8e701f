//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Sets")
export class SetsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
setId: string;

@Column({nullable: true})
setName: string;

@Column({nullable: true})
releaseDate: string;

@Column({nullable: true})
totalCards: string;


}