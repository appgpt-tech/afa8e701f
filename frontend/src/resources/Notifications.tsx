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
  return <span>Notifications {record ? `"${ record.notificationId }"` : ""}</span>;
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
                          <NumberInput source="notificationId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<TextInput source="message"   />
<DateInput source="dateScheduled"   />
<TextInput source="status"   />
                      </SimpleForm>
                    </Edit>
                  );

export const NotificationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="notificationId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="type"   />
<TextInput source="message"   />
<DateInput source="dateScheduled"   />
<TextInput source="status"   />
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


