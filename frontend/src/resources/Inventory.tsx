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
const InventoryTitle = () => {
  const record = useRecordContext();
  return <span>Inventory {record ? `"${ record.productId }"` : ""}</span>;
};

export const InventoryList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <ReferenceField source="productId" reference="Products"  />
<NumberField source="quantity" />
<NumberField source="lowStockThreshold" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const InventoryEdit = () => (
                    <Edit title={<InventoryTitle />}>
                      <SimpleForm>
                          <ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="quantity"   />
<NumberInput source="lowStockThreshold"   />
                      </SimpleForm>
                    </Edit>
                  );

export const InventoryCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <ReferenceInput source="productId"  reference="Products"   />
<NumberInput source="quantity"   />
<NumberInput source="lowStockThreshold"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
,
,

    ];


