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
const NotificationsTitle = () => {
  const record = useRecordContext();
  return <span>Notifications {record ? `"${ record.type }"` : ""}</span>;
};

export const NotificationsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="notificationId" />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="type" />

<DateField source="dateScheduled" />
<TextField source="status" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const NotificationsEdit = () => (
                    <Edit title={<NotificationsTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<NumberInput source="notificationId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="customerId"  reference="Customers"   /></Grid>
<Grid item xs={4}>
<TextInput source="type"   /></Grid>
<Grid item xs={4}>
<TextInput source="message"   /></Grid>
<Grid item xs={4}>
<DateInput source="dateScheduled"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const NotificationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<NumberInput source="notificationId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="customerId"  reference="Customers"   /></Grid>
<Grid item xs={4}>
<TextInput source="type"   /></Grid>
<Grid item xs={4}>
<TextInput source="message"   /></Grid>
<Grid item xs={4}>
<DateInput source="dateScheduled"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,

    ];


