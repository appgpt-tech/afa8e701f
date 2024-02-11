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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":85},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":54},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":6},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":21},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":16}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.66,"height":0.52,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":85},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.99,"height":0.78,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":4},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.38,"height":0.49,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":32},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.31,"height":0.28,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":9},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.91,"height":0.67,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":52}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.28,"intensity":"intensity 1","caloriesBurned":0.7,"date":"2025-02-03T14:27:08.694Z","id":90},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.98,"intensity":"intensity 2","caloriesBurned":0.27,"date":"2023-09-03T18:32:22.511Z","id":86},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.36,"intensity":"intensity 3","caloriesBurned":0.27,"date":"2024-12-04T21:40:04.739Z","id":3},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.54,"intensity":"intensity 4","caloriesBurned":0.25,"date":"2025-01-05T01:25:31.852Z","id":9},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.19,"intensity":"intensity 5","caloriesBurned":0,"date":"2024-08-15T22:36:40.001Z","id":100}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.71,"calories":0.8,"macronutrients":"macronutrients 1","date":"2023-07-09T13:12:59.230Z","id":25},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.32,"calories":0.36,"macronutrients":"macronutrients 2","date":"2024-11-09T21:42:02.309Z","id":26},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.91,"calories":0.94,"macronutrients":"macronutrients 3","date":"2023-06-30T12:44:53.772Z","id":54},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.61,"calories":0.85,"macronutrients":"macronutrients 4","date":"2024-05-05T21:43:45.217Z","id":67},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.7,"calories":0.44,"macronutrients":"macronutrients 5","date":"2024-05-20T04:25:08.289Z","id":30}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.52,"unit":"unit 1","date":"2024-01-04T09:48:19.613Z","id":63},{"metricId":2,"customerId":2,"type":"type 2","value":0.07,"unit":"unit 2","date":"2024-01-23T11:18:06.810Z","id":8},{"metricId":3,"customerId":3,"type":"type 3","value":1,"unit":"unit 3","date":"2025-01-25T09:23:27.820Z","id":91},{"metricId":4,"customerId":4,"type":"type 4","value":0.53,"unit":"unit 4","date":"2024-02-09T04:31:54.468Z","id":30},{"metricId":5,"customerId":5,"type":"type 5","value":0.87,"unit":"unit 5","date":"2023-04-18T12:30:14.599Z","id":3}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-06-01T00:19:10.822Z","status":"status 1","id":36},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2024-06-11T13:10:04.916Z","status":"status 2","id":44},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-09-06T01:02:58.854Z","status":"status 3","id":96},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2023-03-19T02:57:42.467Z","status":"status 4","id":85},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-11-17T07:45:43.225Z","status":"status 5","id":13}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2025-01-09T19:14:39.570Z","resolutionDate":"2023-11-15T20:50:09.418Z","id":40},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-04-15T19:02:26.927Z","resolutionDate":"2023-09-27T08:09:44.567Z","id":31},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-08-18T07:18:05.377Z","resolutionDate":"2024-02-11T19:19:22.184Z","id":56},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-10-08T12:08:12.151Z","resolutionDate":"2024-10-11T10:11:08.424Z","id":89},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2025-01-08T21:06:38.350Z","resolutionDate":"2024-05-10T07:18:58.560Z","id":50}]};
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

