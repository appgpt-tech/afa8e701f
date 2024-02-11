//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":34},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":76},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":32},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":56},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":75}],"Vendors":[{"vendorId":1,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":7},{"vendorId":2,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":35},{"vendorId":3,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":44},{"vendorId":4,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":48},{"vendorId":5,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":52}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":1,"id":45},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":2,"id":63},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":3,"id":82},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":4,"id":72},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":5,"id":7}],"Inventory":[{"productId":1,"quantity":1,"lowStockThreshold":1,"id":4},{"productId":2,"quantity":2,"lowStockThreshold":2,"id":78},{"productId":3,"quantity":3,"lowStockThreshold":3,"id":46},{"productId":4,"quantity":4,"lowStockThreshold":4,"id":64},{"productId":5,"quantity":5,"lowStockThreshold":5,"id":93}],"Products":[{"productId":1,"vendorId":1,"name":"name 1","price":0.76,"weight":0.94,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-02-21T08:14:03.380Z","stock":1,"id":6},{"productId":2,"vendorId":2,"name":"name 2","price":1,"weight":0.66,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2024-04-06T15:37:31.010Z","stock":2,"id":9},{"productId":3,"vendorId":3,"name":"name 3","price":0.4,"weight":0.39,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-02-24T07:16:40.056Z","stock":3,"id":8},{"productId":4,"vendorId":4,"name":"name 4","price":0.36,"weight":0.38,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2024-04-24T07:03:50.621Z","stock":4,"id":50},{"productId":5,"vendorId":5,"name":"name 5","price":0.42,"weight":0.56,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2023-12-24T10:33:55.747Z","stock":5,"id":22}],"ProductCategories":[{"categoryId":1,"productId":1,"description":"description 1","id":96},{"categoryId":2,"productId":2,"description":"description 2","id":64},{"categoryId":3,"productId":3,"description":"description 3","id":97},{"categoryId":4,"productId":4,"description":"description 4","id":90},{"categoryId":5,"productId":5,"description":"description 5","id":4}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.72,"discountPercent":0.77,"id":71},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.98,"discountPercent":0.54,"id":19},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.32,"discountPercent":0.18,"id":90},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.74,"discountPercent":0.69,"id":75},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.04,"discountPercent":0.14,"id":26}],"ShoppingCart":[{"cartId":1,"customerId":1,"productId":1,"price":0.05,"quantity":1,"id":76},{"cartId":2,"customerId":2,"productId":2,"price":0.08,"quantity":2,"id":33},{"cartId":3,"customerId":3,"productId":3,"price":0.52,"quantity":3,"id":67},{"cartId":4,"customerId":4,"productId":4,"price":0.13,"quantity":4,"id":16},{"cartId":5,"customerId":5,"productId":5,"price":0.97,"quantity":5,"id":92}],"Orders":[{"orderId":1,"customerId":1,"totalAmount":0.65,"vat":0.22,"productTotalAmount":0.92,"shippingCost":0.67,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-05-26T09:55:20.171Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":7},{"orderId":2,"customerId":2,"totalAmount":0.32,"vat":0.74,"productTotalAmount":0.09,"shippingCost":0.57,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-09-24T07:36:03.088Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":9},{"orderId":3,"customerId":3,"totalAmount":0.06,"vat":0.82,"productTotalAmount":0.59,"shippingCost":0.23,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-01-14T06:51:53.420Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":85},{"orderId":4,"customerId":4,"totalAmount":0.44,"vat":0.4,"productTotalAmount":0.31,"shippingCost":0.76,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-04-24T05:43:26.657Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":43},{"orderId":5,"customerId":5,"totalAmount":0.17,"vat":0.88,"productTotalAmount":0.67,"shippingCost":0.05,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-10-08T11:25:29.735Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":81}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.92,"quantity":1,"id":50},{"orderId":2,"productId":2,"price":0.45,"quantity":2,"id":89},{"orderId":3,"productId":3,"price":0.9,"quantity":3,"id":41},{"orderId":4,"productId":4,"price":0.45,"quantity":4,"id":55},{"orderId":5,"productId":5,"price":0.09,"quantity":5,"id":12}],"Payments":[{"paymentId":1,"orderId":1,"amount":0.8,"paymentMethod":"paymentMethod 1","paymentDate":"2023-04-26T06:59:22.151Z","paymentStatus":"paymentStatus 1","id":91},{"paymentId":2,"orderId":2,"amount":0.71,"paymentMethod":"paymentMethod 2","paymentDate":"2024-02-22T11:36:53.979Z","paymentStatus":"paymentStatus 2","id":71},{"paymentId":3,"orderId":3,"amount":0.77,"paymentMethod":"paymentMethod 3","paymentDate":"2023-08-01T14:31:10.646Z","paymentStatus":"paymentStatus 3","id":61},{"paymentId":4,"orderId":4,"amount":0.2,"paymentMethod":"paymentMethod 4","paymentDate":"2024-05-23T04:46:07.254Z","paymentStatus":"paymentStatus 4","id":89},{"paymentId":5,"orderId":5,"amount":0.77,"paymentMethod":"paymentMethod 5","paymentDate":"2023-08-21T18:07:07.175Z","paymentStatus":"paymentStatus 5","id":48}],"Reviews":[{"reviewId":1,"productId":1,"customerId":1,"vendorId":1,"rating":0.78,"reviewDetails":"reviewDetails 1","date":"2025-01-11T15:33:05.339Z","id":87},{"reviewId":2,"productId":2,"customerId":2,"vendorId":2,"rating":1,"reviewDetails":"reviewDetails 2","date":"2024-11-20T23:34:18.847Z","id":7},{"reviewId":3,"productId":3,"customerId":3,"vendorId":3,"rating":0.48,"reviewDetails":"reviewDetails 3","date":"2023-08-24T07:26:18.066Z","id":29},{"reviewId":4,"productId":4,"customerId":4,"vendorId":4,"rating":0.28,"reviewDetails":"reviewDetails 4","date":"2023-04-26T18:52:15.601Z","id":69},{"reviewId":5,"productId":5,"customerId":5,"vendorId":5,"rating":0.96,"reviewDetails":"reviewDetails 5","date":"2025-02-10T15:45:44.333Z","id":18}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-07-05T15:55:35.858Z","resolutionDate":"2024-05-17T15:29:50.404Z","id":25},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-02-09T13:41:16.958Z","resolutionDate":"2024-11-15T20:12:15.746Z","id":23},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-02-29T19:27:27.073Z","resolutionDate":"2024-04-18T11:10:54.095Z","id":56},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-12-30T07:39:12.881Z","resolutionDate":"2024-04-09T12:53:04.073Z","id":5},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-11-05T02:47:08.811Z","resolutionDate":"2023-09-19T03:05:01.670Z","id":56}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
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

