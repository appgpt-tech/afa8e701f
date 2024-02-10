//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Nutrition")
export class NutritionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
mealId: number;

@Column("integer",{nullable: true})
customerId: number;

@Column("text",{nullable: true})
foodItem: string;

@Column("real",{nullable: true})
quantity: number;

@Column("real",{nullable: true})
calories: number;

@Column("text",{nullable: true})
macronutrients: string;

@Column("date",{nullable: true})
date: Date;


}
