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
const ShoppingCartTitle = () => {
  const record = useRecordContext();
  return <span>ShoppingCart {record ? `"${ record.cartId }"` : ""}</span>;
};

export const ShoppingCartList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="cartId" />
<ReferenceField source="customerId" reference="Customers"  />
<ReferenceField source="productId" reference="Products"  />
<NumberField source="price" />
<NumberField source="quantity" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ShoppingCartEdit = () => (
                    <Edit title={<ShoppingCartTitle />}>
                      <SimpleForm>
                          <NumberInput source="cartId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ShoppingCartCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="cartId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="price"   />
<NumberInput source="quantity"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
,
,

    ];


