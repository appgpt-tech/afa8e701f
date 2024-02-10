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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":84},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":36},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":39},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":48},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":97}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.56,"height":0.74,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":41},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.01,"height":0.03,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":36},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.75,"height":0.41,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":97},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.56,"height":0.8,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":71},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.32,"height":0.52,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":100}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.55,"intensity":"intensity 1","caloriesBurned":0.83,"date":"2023-08-30T13:08:42.943Z","id":2},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.39,"intensity":"intensity 2","caloriesBurned":0.65,"date":"2024-08-19T16:52:39.003Z","id":26},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.64,"intensity":"intensity 3","caloriesBurned":0.34,"date":"2023-02-21T10:07:39.032Z","id":43},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.44,"intensity":"intensity 4","caloriesBurned":0.4,"date":"2024-03-02T09:07:30.810Z","id":73},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.12,"intensity":"intensity 5","caloriesBurned":0.68,"date":"2023-03-18T05:16:21.580Z","id":36}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.14,"calories":0.97,"macronutrients":"macronutrients 1","date":"2024-12-24T05:22:39.269Z","id":81},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.88,"calories":0.94,"macronutrients":"macronutrients 2","date":"2023-05-29T17:30:25.443Z","id":80},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.83,"calories":0.33,"macronutrients":"macronutrients 3","date":"2024-05-06T13:19:54.024Z","id":27},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.28,"calories":0.54,"macronutrients":"macronutrients 4","date":"2023-03-26T20:08:40.179Z","id":69},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.55,"calories":0.58,"macronutrients":"macronutrients 5","date":"2024-12-07T22:45:57.469Z","id":40}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.68,"unit":"unit 1","date":"2023-03-14T10:15:09.943Z","id":55},{"metricId":2,"customerId":2,"type":"type 2","value":0.33,"unit":"unit 2","date":"2024-01-03T04:18:40.620Z","id":4},{"metricId":3,"customerId":3,"type":"type 3","value":0.05,"unit":"unit 3","date":"2024-04-02T03:12:40.124Z","id":62},{"metricId":4,"customerId":4,"type":"type 4","value":0.44,"unit":"unit 4","date":"2025-01-24T15:54:36.400Z","id":63},{"metricId":5,"customerId":5,"type":"type 5","value":0.27,"unit":"unit 5","date":"2023-12-14T21:00:16.180Z","id":89}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-05-22T20:15:40.876Z","status":"status 1","id":59},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2024-06-21T02:39:00.344Z","status":"status 2","id":99},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2024-02-13T10:34:07.516Z","status":"status 3","id":47},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-05-23T17:49:54.380Z","status":"status 4","id":81},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2024-08-06T07:53:25.465Z","status":"status 5","id":88}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-10-29T01:41:18.499Z","resolutionDate":"2024-09-29T06:20:28.381Z","id":20},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-06-14T22:54:27.399Z","resolutionDate":"2024-08-26T02:01:43.647Z","id":83},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-12-12T02:45:28.341Z","resolutionDate":"2024-01-21T08:31:29.262Z","id":53},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-10-16T14:24:00.351Z","resolutionDate":"2024-09-10T13:41:02.272Z","id":98},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-07-03T23:12:34.834Z","resolutionDate":"2023-04-30T09:19:58.225Z","id":4}]};
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

