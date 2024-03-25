// Source code generated by AppGPT (www.appgpt.tech)

 
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
import { EmissionSourcesList, EmissionSourcesCreate, EmissionSourcesEdit} from "./resources/EmissionSources";
import { ResourceUsageList, ResourceUsageCreate, ResourceUsageEdit} from "./resources/ResourceUsage";
import { GoalsList, GoalsCreate, GoalsEdit} from "./resources/Goals";
import { WasteManagementList, WasteManagementCreate, WasteManagementEdit} from "./resources/WasteManagement";
import { SuppliersList, SuppliersCreate, SuppliersEdit} from "./resources/Suppliers";
import { ProductsList, ProductsCreate, ProductsEdit} from "./resources/Products";
import { EmployeesList, EmployeesCreate, EmployeesEdit} from "./resources/Employees";
import { ReportsList, ReportsCreate, ReportsEdit} from "./resources/Reports";
import UsersIcon from "@mui/icons-material/Person";
import EmissionSourcesIcon from "@mui/icons-material/Collections";
import ResourceUsageIcon from "@mui/icons-material/Score";
import GoalsIcon from "@mui/icons-material/Call";
import WasteManagementIcon from "@mui/icons-material/Delete";
import SuppliersIcon from "@mui/icons-material/Store";
import ProductsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EmployeesIcon from "@mui/icons-material/Person";
import ReportsIcon from "@mui/icons-material/Report"; 
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
<Resource name="EmissionSources" options={{label:"Emission Sources"}} 
list={EmissionSourcesList}
create={EmissionSourcesCreate}
edit={EmissionSourcesEdit}
recordRepresentation="sourceType"
icon={EmissionSourcesIcon}/>
<Resource name="ResourceUsage" options={{label:"Resource Usage"}} 
list={ResourceUsageList}
create={ResourceUsageCreate}
edit={ResourceUsageEdit}
recordRepresentation="resourceType"
icon={ResourceUsageIcon}/>
<Resource name="Goals" options={{label:"Goals"}} 
list={GoalsList}
create={GoalsCreate}
edit={GoalsEdit}
recordRepresentation="goalDescription"
icon={GoalsIcon}/>
<Resource name="WasteManagement" options={{label:"Waste Management"}} 
list={WasteManagementList}
create={WasteManagementCreate}
edit={WasteManagementEdit}
recordRepresentation="wasteType"
icon={WasteManagementIcon}/>
<Resource name="Suppliers" options={{label:"Suppliers"}} 
list={SuppliersList}
create={SuppliersCreate}
edit={SuppliersEdit}
recordRepresentation="supplierName"
icon={SuppliersIcon}/>
<Resource name="Products" options={{label:"Products"}} 
list={ProductsList}
create={ProductsCreate}
edit={ProductsEdit}
recordRepresentation="name"
icon={ProductsIcon}/>
<Resource name="Employees" options={{label:"Employees"}} 
list={EmployeesList}
create={EmployeesCreate}
edit={EmployeesEdit}
recordRepresentation="id"
icon={EmployeesIcon}/>
<Resource name="Reports" options={{label:"Reports"}} 
list={ReportsList}
create={ReportsCreate}
edit={ReportsEdit}
recordRepresentation="description"
icon={ReportsIcon}/>
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
