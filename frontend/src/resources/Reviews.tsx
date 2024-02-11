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
const ReviewsTitle = () => {
  const record = useRecordContext();
  return <span>Reviews {record ? `"${ record.reviewId }"` : ""}</span>;
};

export const ReviewsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="reviewId" />
<ReferenceField source="productId" reference="Products"  />
<ReferenceField source="customerId" reference="Customers"  />
<ReferenceField source="vendorId" reference="Vendors"  />
<NumberField source="rating" />

<DateField source="date" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ReviewsEdit = () => (
                    <Edit title={<ReviewsTitle />}>
                      <SimpleForm>
                          <NumberInput source="reviewId"   />
<ReferenceInput source="productId"  reference="Products"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ReviewsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="reviewId"   />
<ReferenceInput source="productId"  reference="Products"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<NumberInput source="rating"   />
<TextInput source="reviewDetails"   />
<DateInput source="date"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="productId" label="productId" reference="Products"   alwaysOn/>,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
<ReferenceInput source="vendorId" label="vendorId" reference="Vendors"   alwaysOn/>,
,
,
,

    ];


