// Source code generated by AppGPT (www.appgpt.tech)

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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":68},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":69},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":80},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":55},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":59}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.89,"height":0.19,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":72},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.15,"height":0.02,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":63},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.7,"height":0.41,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":23},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.09,"height":0.85,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":88},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.53,"height":0.57,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":30}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.3,"intensity":"intensity 1","caloriesBurned":0.82,"date":"2023-08-23T22:18:06.071Z","id":2},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.19,"intensity":"intensity 2","caloriesBurned":0.38,"date":"2023-06-10T19:14:26.617Z","id":68},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.29,"intensity":"intensity 3","caloriesBurned":0.24,"date":"2024-03-21T13:25:32.362Z","id":12},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.73,"intensity":"intensity 4","caloriesBurned":0.19,"date":"2025-01-28T14:23:05.634Z","id":41},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.43,"intensity":"intensity 5","caloriesBurned":0.02,"date":"2023-10-25T23:15:19.429Z","id":33}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.73,"calories":0.58,"macronutrients":"macronutrients 1","date":"2024-02-21T19:22:59.994Z","id":20},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.29,"calories":0.68,"macronutrients":"macronutrients 2","date":"2024-11-01T20:11:41.412Z","id":75},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.26,"calories":0.62,"macronutrients":"macronutrients 3","date":"2024-07-16T06:46:19.289Z","id":46},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.91,"calories":0.81,"macronutrients":"macronutrients 4","date":"2025-02-09T21:57:35.118Z","id":85},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.61,"calories":0.54,"macronutrients":"macronutrients 5","date":"2023-09-21T16:59:11.973Z","id":15}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.93,"unit":"unit 1","date":"2024-10-24T02:02:00.872Z","id":22},{"metricId":2,"customerId":2,"type":"type 2","value":0.92,"unit":"unit 2","date":"2023-12-06T00:36:17.176Z","id":95},{"metricId":3,"customerId":3,"type":"type 3","value":0.08,"unit":"unit 3","date":"2023-08-30T00:10:10.051Z","id":24},{"metricId":4,"customerId":4,"type":"type 4","value":0.73,"unit":"unit 4","date":"2025-02-16T10:07:04.952Z","id":77},{"metricId":5,"customerId":5,"type":"type 5","value":0.93,"unit":"unit 5","date":"2023-11-18T00:19:42.983Z","id":26}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-11-02T22:06:41.556Z","status":"status 1","id":84},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-07-20T03:47:32.362Z","status":"status 2","id":52},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-05-15T07:49:05.312Z","status":"status 3","id":72},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-06-26T21:39:04.901Z","status":"status 4","id":100},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-05-31T21:14:06.827Z","status":"status 5","id":40}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-07-16T17:02:35.681Z","resolutionDate":"2024-10-28T19:48:17.420Z","id":30},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-10-07T23:18:50.753Z","resolutionDate":"2023-09-06T16:52:47.792Z","id":56},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-08-29T11:19:02.212Z","resolutionDate":"2024-02-21T20:05:22.762Z","id":27},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-12-15T00:01:10.652Z","resolutionDate":"2023-05-13T16:03:47.863Z","id":46},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-09-13T02:45:11.417Z","resolutionDate":"2023-08-01T07:50:29.094Z","id":14}]};
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

