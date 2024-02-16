import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${ record.name }"` : ""}</span>;
};

export const CustomersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="customerId" />
<EmailField source="email" />
<ReadOnlyPasswordField source="password" />
<TextField source="name" />
<NumberField source="age" />
<TextField source="gender" />
<NumberField source="weight" />
<NumberField source="height" />



<TextField source="billingAddress" />
<TextField source="country" />
<TextField source="phone" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CustomersEdit = () => (
                    <Edit title={<CustomersTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<NumberInput source="customerId"   /></Grid>
<Grid item xs={4}>
<TextInput source="email"   /></Grid>
<Grid item xs={4}>
<PasswordInput source="password"   /></Grid>
<Grid item xs={4}>
<TextInput source="name"   /></Grid>
<Grid item xs={4}>
<NumberInput source="age"   /></Grid>
<Grid item xs={4}>
<TextInput source="gender"   /></Grid>
<Grid item xs={4}>
<NumberInput source="weight"   /></Grid>
<Grid item xs={4}>
<NumberInput source="height"   /></Grid>
<Grid item xs={4}>
<TextInput source="healthConditions"   /></Grid>
<Grid item xs={4}>
<TextInput source="goals"   /></Grid>
<Grid item xs={4}>
<TextInput source="dietaryPreferences"   /></Grid>
<Grid item xs={4}>
<TextInput source="billingAddress"   /></Grid>
<Grid item xs={4}>
<TextInput source="country"   /></Grid>
<Grid item xs={4}>
<TextInput source="phone"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const CustomersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<NumberInput source="customerId"   /></Grid>
<Grid item xs={4}>
<TextInput source="email"   /></Grid>
<Grid item xs={4}>
<PasswordInput source="password"   /></Grid>
<Grid item xs={4}>
<TextInput source="name"   /></Grid>
<Grid item xs={4}>
<NumberInput source="age"   /></Grid>
<Grid item xs={4}>
<TextInput source="gender"   /></Grid>
<Grid item xs={4}>
<NumberInput source="weight"   /></Grid>
<Grid item xs={4}>
<NumberInput source="height"   /></Grid>
<Grid item xs={4}>
<TextInput source="healthConditions"   /></Grid>
<Grid item xs={4}>
<TextInput source="goals"   /></Grid>
<Grid item xs={4}>
<TextInput source="dietaryPreferences"   /></Grid>
<Grid item xs={4}>
<TextInput source="billingAddress"   /></Grid>
<Grid item xs={4}>
<TextInput source="country"   /></Grid>
<Grid item xs={4}>
<TextInput source="phone"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

    ];


