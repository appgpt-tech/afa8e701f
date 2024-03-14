// Source code generated by AppGPT (www.appgpt.tech)

 //Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CardsEntity } from "./db/Cards.entity";
import { SetsEntity } from "./db/Sets.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { WishlistEntity } from "./db/Wishlist.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CardsEntity, SetsEntity, InventoryEntity, WishlistEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userName":"userName 1","email":"email 1","id":75},{"userName":"userName 2","email":"email 2","id":30},{"userName":"userName 3","email":"email 3","id":34},{"userName":"userName 4","email":"email 4","id":32},{"userName":"userName 5","email":"email 5","id":31}],"Cards":[{"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","set":1,"id":8},{"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","set":2,"id":12},{"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","set":3,"id":68},{"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","set":4,"id":18},{"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","set":5,"id":23}],"Sets":[{"setName":"setName 1","releaseDate":"2025-02-23T23:54:54.572Z","totalCards":1,"id":41},{"setName":"setName 2","releaseDate":"2024-11-18T13:39:55.847Z","totalCards":2,"id":15},{"setName":"setName 3","releaseDate":"2023-11-04T02:27:41.658Z","totalCards":3,"id":25},{"setName":"setName 4","releaseDate":"2024-06-05T00:00:47.715Z","totalCards":4,"id":67},{"setName":"setName 5","releaseDate":"2024-07-17T04:15:00.587Z","totalCards":5,"id":81}],"Inventory":[{"user":1,"card":1,"dateAdded":"2024-05-25T00:45:32.859Z","id":65},{"user":2,"card":2,"dateAdded":"2023-10-17T19:48:45.224Z","id":86},{"user":3,"card":3,"dateAdded":"2024-08-21T11:23:02.152Z","id":77},{"user":4,"card":4,"dateAdded":"2024-02-07T02:35:20.066Z","id":65},{"user":5,"card":5,"dateAdded":"2024-10-14T15:24:22.983Z","id":90}],"Wishlist":[{"user":1,"card":1,"dateInserted":"2023-03-21T23:43:37.322Z","id":100},{"user":2,"card":2,"dateInserted":"2024-07-15T04:50:14.693Z","id":43},{"user":3,"card":3,"dateInserted":"2024-11-12T16:29:49.388Z","id":37},{"user":4,"card":4,"dateInserted":"2023-03-19T11:58:04.552Z","id":57},{"user":5,"card":5,"dateInserted":"2024-06-08T03:16:44.564Z","id":100}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CardsEntity", data.Cards);
await this.SeedResource("SetsEntity", data.Sets);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("WishlistEntity", data.Wishlist); 
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

