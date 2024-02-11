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
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${ record.customerId }"` : ""}</span>;
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




<TextField source="country" />
<TextField source="phone" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CustomersEdit = () => (
                    <Edit title={<CustomersTitle />}>
                      <SimpleForm>
                          <NumberInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<NumberInput source="age"   />
<TextInput source="gender"   />
<NumberInput source="weight"   />
<NumberInput source="height"   />
<TextInput source="healthConditions"   />
<TextInput source="goals"   />
<TextInput source="dietaryPreferences"   />
<TextInput source="billingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
                      </SimpleForm>
                    </Edit>
                  );

export const CustomersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<NumberInput source="age"   />
<TextInput source="gender"   />
<NumberInput source="weight"   />
<NumberInput source="height"   />
<TextInput source="healthConditions"   />
<TextInput source="goals"   />
<TextInput source="dietaryPreferences"   />
<TextInput source="billingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
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


