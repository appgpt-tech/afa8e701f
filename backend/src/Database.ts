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
    let data: any = {"Users":[{"userId":"userId 1","name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":39},{"userId":"userId 2","name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":10},{"userId":"userId 3","name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":30},{"userId":"userId 4","name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":72},{"userId":"userId 5","name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":22}],"Customers":[{"customerId":"customerId 1","email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.07,"height":0.11,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":20},{"customerId":"customerId 2","email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.15,"height":0.82,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":65},{"customerId":"customerId 3","email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.97,"height":0.33,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":17},{"customerId":"customerId 4","email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.67,"height":0.82,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":9},{"customerId":"customerId 5","email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.09,"height":0.89,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":81}],"Workouts":[{"workoutId":"workoutId 1","customerId":1,"type":"type 1","duration":1,"intensity":"intensity 1","caloriesBurned":1,"date":"2024-05-21T04:58:41.247Z","id":2},{"workoutId":"workoutId 2","customerId":2,"type":"type 2","duration":2,"intensity":"intensity 2","caloriesBurned":2,"date":"2024-12-18T17:42:45.835Z","id":77},{"workoutId":"workoutId 3","customerId":3,"type":"type 3","duration":3,"intensity":"intensity 3","caloriesBurned":3,"date":"2023-09-02T18:20:57.108Z","id":22},{"workoutId":"workoutId 4","customerId":4,"type":"type 4","duration":4,"intensity":"intensity 4","caloriesBurned":4,"date":"2024-06-05T17:35:00.073Z","id":45},{"workoutId":"workoutId 5","customerId":5,"type":"type 5","duration":5,"intensity":"intensity 5","caloriesBurned":5,"date":"2025-01-07T23:10:51.881Z","id":74}],"Nutrition":[{"mealId":"mealId 1","customerId":1,"foodItem":"foodItem 1","quantity":1,"calories":1,"macronutrients":"macronutrients 1","date":"2023-04-13T04:31:16.045Z","id":11},{"mealId":"mealId 2","customerId":2,"foodItem":"foodItem 2","quantity":2,"calories":2,"macronutrients":"macronutrients 2","date":"2023-12-19T14:56:37.034Z","id":45},{"mealId":"mealId 3","customerId":3,"foodItem":"foodItem 3","quantity":3,"calories":3,"macronutrients":"macronutrients 3","date":"2023-09-06T00:36:10.113Z","id":19},{"mealId":"mealId 4","customerId":4,"foodItem":"foodItem 4","quantity":4,"calories":4,"macronutrients":"macronutrients 4","date":"2023-08-11T12:45:28.037Z","id":26},{"mealId":"mealId 5","customerId":5,"foodItem":"foodItem 5","quantity":5,"calories":5,"macronutrients":"macronutrients 5","date":"2023-11-13T19:45:56.216Z","id":17}],"HealthMetrics":[{"metricId":"metricId 1","customerId":1,"type":"type 1","value":0.01,"unit":"unit 1","date":"2023-05-12T12:57:46.488Z","id":29},{"metricId":"metricId 2","customerId":2,"type":"type 2","value":0.78,"unit":"unit 2","date":"2023-11-24T01:22:52.827Z","id":23},{"metricId":"metricId 3","customerId":3,"type":"type 3","value":0.79,"unit":"unit 3","date":"2024-05-10T18:35:21.696Z","id":86},{"metricId":"metricId 4","customerId":4,"type":"type 4","value":0.15,"unit":"unit 4","date":"2024-03-09T09:19:37.152Z","id":66},{"metricId":"metricId 5","customerId":5,"type":"type 5","value":0.22,"unit":"unit 5","date":"2023-03-14T18:18:32.946Z","id":57}],"Notifications":[{"notificationId":"notificationId 1","customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-02-09T17:22:26.313Z","status":"status 1","id":78},{"notificationId":"notificationId 2","customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-05-04T23:31:42.025Z","status":"status 2","id":98},{"notificationId":"notificationId 3","customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-07-18T05:51:38.322Z","status":"status 3","id":27},{"notificationId":"notificationId 4","customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-03-14T23:15:33.958Z","status":"status 4","id":22},{"notificationId":"notificationId 5","customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-03-05T00:54:16.621Z","status":"status 5","id":39}],"SupportTickets":[{"ticketId":"ticketId 1","userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-11-24T17:32:22.910Z","resolutionDate":"2025-01-19T06:48:18.848Z","serialNo":1,"id":60},{"ticketId":"ticketId 2","userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-11-21T00:27:50.731Z","resolutionDate":"2024-07-16T21:14:33.623Z","serialNo":2,"id":33},{"ticketId":"ticketId 3","userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-10-17T21:48:38.601Z","resolutionDate":"2023-04-04T07:37:55.392Z","serialNo":3,"id":83},{"ticketId":"ticketId 4","userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-06-10T00:20:43.682Z","resolutionDate":"2024-12-24T23:33:32.248Z","serialNo":4,"id":75},{"ticketId":"ticketId 5","userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-03-18T11:53:49.133Z","resolutionDate":"2024-06-05T23:28:19.932Z","serialNo":5,"id":0}]};
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

