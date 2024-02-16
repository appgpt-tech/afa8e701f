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
const SupportTicketsTitle = () => {
  const record = useRecordContext();
  return <span>SupportTickets {record ? `"${ record.description }"` : ""}</span>;
};

export const SupportTicketsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="ticketId" />
<ReferenceField source="userId" reference="Users"  />
<ReferenceField source="customerId" reference="Customers"  />

<TextField source="status" />
<DateField source="creationDate" />
<DateField source="resolutionDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SupportTicketsEdit = () => (
                    <Edit title={<SupportTicketsTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<NumberInput source="ticketId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="userId"  reference="Users"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="customerId"  reference="Customers"   /></Grid>
<Grid item xs={4}>
<TextInput source="description"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
<Grid item xs={4}>
<DateInput source="creationDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="resolutionDate"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const SupportTicketsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<NumberInput source="ticketId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="userId"  reference="Users"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="customerId"  reference="Customers"   /></Grid>
<Grid item xs={4}>
<TextInput source="description"   /></Grid>
<Grid item xs={4}>
<TextInput source="status"   /></Grid>
<Grid item xs={4}>
<DateInput source="creationDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="resolutionDate"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="userId" label="userId" reference="Users"   alwaysOn/>,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,

    ];


