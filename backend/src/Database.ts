//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { WorkoutsEntity } from "./db/Workouts.entity";
import { NutritionEntity } from "./db/Nutrition.entity";
import { HealthMetricsEntity } from "./db/HealthMetrics.entity";
import { NotificationsEntity } from "./db/Notifications.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CustomersEntity, WorkoutsEntity, NutritionEntity, HealthMetricsEntity, NotificationsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":64},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":61},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":4},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":43},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":43}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.79,"height":1,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":95},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.97,"height":0.49,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":67},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.34,"height":0.84,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":14},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.17,"height":0.61,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":38},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.49,"height":0.91,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":3}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.12,"intensity":"intensity 1","caloriesBurned":0.52,"date":"2024-07-21T01:41:52.289Z","id":38},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.74,"intensity":"intensity 2","caloriesBurned":0.55,"date":"2024-01-16T13:55:36.759Z","id":35},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.24,"intensity":"intensity 3","caloriesBurned":0.41,"date":"2024-02-06T08:15:07.917Z","id":89},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.34,"intensity":"intensity 4","caloriesBurned":0.86,"date":"2025-01-06T20:31:32.655Z","id":100},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.6,"intensity":"intensity 5","caloriesBurned":0.77,"date":"2023-10-28T00:22:15.422Z","id":68}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.52,"calories":0.03,"macronutrients":"macronutrients 1","date":"2024-03-12T16:51:14.882Z","id":90},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.2,"calories":0.49,"macronutrients":"macronutrients 2","date":"2023-08-12T19:59:16.305Z","id":38},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.04,"calories":0.43,"macronutrients":"macronutrients 3","date":"2023-06-01T22:11:47.105Z","id":74},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.5,"calories":0.81,"macronutrients":"macronutrients 4","date":"2023-03-24T10:25:29.025Z","id":1},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.43,"calories":0.74,"macronutrients":"macronutrients 5","date":"2023-03-24T12:26:34.872Z","id":19}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.43,"unit":"unit 1","date":"2024-06-24T15:47:01.003Z","id":39},{"metricId":2,"customerId":2,"type":"type 2","value":0.73,"unit":"unit 2","date":"2023-03-28T06:43:48.685Z","id":37},{"metricId":3,"customerId":3,"type":"type 3","value":0.1,"unit":"unit 3","date":"2025-01-25T06:21:09.029Z","id":51},{"metricId":4,"customerId":4,"type":"type 4","value":0.22,"unit":"unit 4","date":"2023-11-01T16:05:42.461Z","id":19},{"metricId":5,"customerId":5,"type":"type 5","value":0.53,"unit":"unit 5","date":"2025-01-24T10:01:31.941Z","id":48}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2025-01-24T00:45:27.069Z","status":"status 1","id":44},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-05-12T04:23:49.120Z","status":"status 2","id":60},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2024-12-11T15:48:02.703Z","status":"status 3","id":59},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-06-24T02:29:00.488Z","status":"status 4","id":62},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2024-05-23T16:35:39.166Z","status":"status 5","id":53}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-10-30T02:31:19.802Z","resolutionDate":"2023-12-24T01:28:01.232Z","id":69},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-09-11T00:12:47.031Z","resolutionDate":"2024-05-12T03:40:53.945Z","id":60},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-06-02T20:49:42.758Z","resolutionDate":"2023-03-24T19:56:13.372Z","id":10},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-11-01T10:32:16.546Z","resolutionDate":"2024-09-10T18:59:39.805Z","id":71},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-07-01T04:22:44.799Z","resolutionDate":"2023-07-18T10:21:50.116Z","id":20}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("WorkoutsEntity", data.Workouts);
await this.SeedResource("NutritionEntity", data.Nutrition);
await this.SeedResource("HealthMetricsEntity", data.HealthMetrics);
await this.SeedResource("NotificationsEntity", data.Notifications);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

