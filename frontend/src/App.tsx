
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import { customDataProvider } from "./dataProvider";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { UsersList, UsersCreate, UsersEdit} from "./resources/Users";
import { CustomersList, CustomersCreate, CustomersEdit} from "./resources/Customers";
import { WorkoutsList, WorkoutsCreate, WorkoutsEdit} from "./resources/Workouts";
import { NutritionList, NutritionCreate, NutritionEdit} from "./resources/Nutrition";
import { HealthMetricsList, HealthMetricsCreate, HealthMetricsEdit} from "./resources/HealthMetrics";
import { NotificationsList, NotificationsCreate, NotificationsEdit} from "./resources/Notifications";
import { SupportTicketsList, SupportTicketsCreate, SupportTicketsEdit} from "./resources/SupportTickets";
import UsersIcon from "@mui/icons-material/Person";
import CustomersIcon from "@mui/icons-material/Person";
import WorkoutsIcon from "@mui/icons-material/FitnessCenter";
import NutritionIcon from "@mui/icons-material/Fastfood";
import HealthMetricsIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupportTicketsIcon from "@mui/icons-material/Support"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/afa8e701f">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="Users" options={{label:"Users"}} 
list={UsersList}
create={UsersCreate}
edit={UsersEdit}
recordRepresentation="name"
icon={UsersIcon}/>
<Resource name="Customers" options={{label:"Customers"}} 
list={CustomersList}
create={CustomersCreate}
edit={CustomersEdit}
recordRepresentation="name"
icon={CustomersIcon}/>
<Resource name="Workouts" options={{label:"Workouts"}} 
list={WorkoutsList}
create={WorkoutsCreate}
edit={WorkoutsEdit}
recordRepresentation="type"
icon={WorkoutsIcon}/>
<Resource name="Nutrition" options={{label:"Nutrition"}} 
list={NutritionList}
create={NutritionCreate}
edit={NutritionEdit}
recordRepresentation="foodItem"
icon={NutritionIcon}/>
<Resource name="HealthMetrics" options={{label:"Health Metrics"}} 
list={HealthMetricsList}
create={HealthMetricsCreate}
edit={HealthMetricsEdit}
recordRepresentation="type"
icon={HealthMetricsIcon}/>
<Resource name="Notifications" options={{label:"Notifications"}} 
list={NotificationsList}
create={NotificationsCreate}
edit={NotificationsEdit}
recordRepresentation="type"
icon={NotificationsIcon}/>
<Resource name="SupportTickets" options={{label:"Support Tickets"}} 
list={SupportTicketsList}
create={SupportTicketsCreate}
edit={SupportTicketsEdit}
recordRepresentation="description"
icon={SupportTicketsIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
