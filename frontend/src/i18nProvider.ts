// Source code generated by AppGPT (www.appgpt.tech)

 // in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userId":"User Id","name":"Name","email":"Email","password":"Password","role":"Role","id":"id"}},"Customers":{"name":"Customers","fields":{"customerId":"Customer Id","email":"Email","password":"Password","name":"Name","age":"Age","gender":"Gender","weight":"Weight","height":"Height","healthConditions":"Health Conditions","goals":"Goals","dietaryPreferences":"Dietary Preferences","billingAddress":"Billing Address","country":"Country","phone":"Phone","id":"id"}},"Workouts":{"name":"Workouts","fields":{"workoutId":"Workout Id","customerId":"Customer Id","type":"Type","duration":"Duration","intensity":"Intensity","caloriesBurned":"Calories Burned","date":"Date","id":"id"}},"Nutrition":{"name":"Nutrition","fields":{"mealId":"Meal Id","customerId":"Customer Id","foodItem":"Food Item","quantity":"Quantity","calories":"Calories","macronutrients":"Macronutrients","date":"Date","id":"id"}},"HealthMetrics":{"name":"Health Metrics","fields":{"metricId":"Metric Id","customerId":"Customer Id","type":"Type","value":"Value","unit":"Unit","date":"Date","id":"id"}},"Notifications":{"name":"Notifications","fields":{"notificationId":"Notification Id","customerId":"Customer Id","type":"Type","message":"Message","dateScheduled":"Date Scheduled","status":"Status","id":"id"}},"SupportTickets":{"name":"Support Tickets","fields":{"ticketId":"Ticket Id","userId":"User Id","customerId":"Customer Id","description":"Description","status":"Status","creationDate":"Creation Date","resolutionDate":"Resolution Date","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Users (fr)","fields":{"userId":"User Id (fr)","name":"Name (fr)","email":"Email (fr)","password":"Password (fr)","role":"Role (fr)","id":"id"}},"Customers":{"name":"Customers (fr)","fields":{"customerId":"Customer Id (fr)","email":"Email (fr)","password":"Password (fr)","name":"Name (fr)","age":"Age (fr)","gender":"Gender (fr)","weight":"Weight (fr)","height":"Height (fr)","healthConditions":"Health Conditions (fr)","goals":"Goals (fr)","dietaryPreferences":"Dietary Preferences (fr)","billingAddress":"Billing Address (fr)","country":"Country (fr)","phone":"Phone (fr)","id":"id"}},"Workouts":{"name":"Workouts (fr)","fields":{"workoutId":"Workout Id (fr)","customerId":"Customer Id (fr)","type":"Type (fr)","duration":"Duration (fr)","intensity":"Intensity (fr)","caloriesBurned":"Calories Burned (fr)","date":"Date (fr)","id":"id"}},"Nutrition":{"name":"Nutrition (fr)","fields":{"mealId":"Meal Id (fr)","customerId":"Customer Id (fr)","foodItem":"Food Item (fr)","quantity":"Quantity (fr)","calories":"Calories (fr)","macronutrients":"Macronutrients (fr)","date":"Date (fr)","id":"id"}},"HealthMetrics":{"name":"Health Metrics (fr)","fields":{"metricId":"Metric Id (fr)","customerId":"Customer Id (fr)","type":"Type (fr)","value":"Value (fr)","unit":"Unit (fr)","date":"Date (fr)","id":"id"}},"Notifications":{"name":"Notifications (fr)","fields":{"notificationId":"Notification Id (fr)","customerId":"Customer Id (fr)","type":"Type (fr)","message":"Message (fr)","dateScheduled":"Date Scheduled (fr)","status":"Status (fr)","id":"id"}},"SupportTickets":{"name":"Support Tickets (fr)","fields":{"ticketId":"Ticket Id (fr)","userId":"User Id (fr)","customerId":"Customer Id (fr)","description":"Description (fr)","status":"Status (fr)","creationDate":"Creation Date (fr)","resolutionDate":"Resolution Date (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    