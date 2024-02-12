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
    let data: any = {"Users":[{"userId":1,"email":"email 1","name":"name 1","id":96},{"userId":2,"email":"email 2","name":"name 2","id":18},{"userId":3,"email":"email 3","name":"name 3","id":49},{"userId":4,"email":"email 4","name":"name 4","id":84},{"userId":5,"email":"email 5","name":"name 5","id":45}],"Cards":[{"cardId":1,"setId":1,"cardName":"cardName 1","serial":"serial 1","type":"type 1","rarity":"rarity 1","condition":"condition 1","imageUrl":"imageUrl 1","id":84},{"cardId":2,"setId":2,"cardName":"cardName 2","serial":"serial 2","type":"type 2","rarity":"rarity 2","condition":"condition 2","imageUrl":"imageUrl 2","id":10},{"cardId":3,"setId":3,"cardName":"cardName 3","serial":"serial 3","type":"type 3","rarity":"rarity 3","condition":"condition 3","imageUrl":"imageUrl 3","id":49},{"cardId":4,"setId":4,"cardName":"cardName 4","serial":"serial 4","type":"type 4","rarity":"rarity 4","condition":"condition 4","imageUrl":"imageUrl 4","id":44},{"cardId":5,"setId":5,"cardName":"cardName 5","serial":"serial 5","type":"type 5","rarity":"rarity 5","condition":"condition 5","imageUrl":"imageUrl 5","id":62}],"Sets":[{"setId":1,"setName":"setName 1","releaseDate":"2025-02-04T23:31:14.947Z","totalCards":1,"id":74},{"setId":2,"setName":"setName 2","releaseDate":"2024-12-14T00:28:21.298Z","totalCards":2,"id":83},{"setId":3,"setName":"setName 3","releaseDate":"2023-10-09T16:10:36.613Z","totalCards":3,"id":64},{"setId":4,"setName":"setName 4","releaseDate":"2023-12-31T19:43:12.262Z","totalCards":4,"id":32},{"setId":5,"setName":"setName 5","releaseDate":"2023-10-25T00:29:42.037Z","totalCards":5,"id":58}],"Inventory":[{"userId":1,"cardId":1,"recordedDate":"2025-01-01T05:58:53.956Z","id":8},{"userId":2,"cardId":2,"recordedDate":"2024-10-08T18:33:21.871Z","id":97},{"userId":3,"cardId":3,"recordedDate":"2024-04-10T22:10:42.245Z","id":22},{"userId":4,"cardId":4,"recordedDate":"2023-10-25T13:54:21.825Z","id":98},{"userId":5,"cardId":5,"recordedDate":"2023-08-13T20:30:48.059Z","id":88}],"Wishlist":[{"userId":1,"cardId":1,"insertedDate":"2024-08-23T14:07:59.746Z","id":60},{"userId":2,"cardId":2,"insertedDate":"2023-12-31T09:05:29.412Z","id":91},{"userId":3,"cardId":3,"insertedDate":"2024-06-26T04:54:08.640Z","id":61},{"userId":4,"cardId":4,"insertedDate":"2024-07-01T19:40:24.568Z","id":88},{"userId":5,"cardId":5,"insertedDate":"2023-04-13T14:45:47.877Z","id":84}]};
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

