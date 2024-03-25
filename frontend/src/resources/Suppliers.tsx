// Source code generated by AppGPT (www.appgpt.tech)

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
const SuppliersTitle = () => {
  const record = useRecordContext();
  return <span>Suppliers {record ? `"${ record.supplierName }"` : ""}</span>;
};

export const SuppliersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="supplierName" />
<TextField source="productService" />
<NumberField source="sustainabilityRating" />
<TextField source="certifications" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SuppliersEdit = () => (
                    <Edit title={<SuppliersTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="supplierName"   /></Grid>
<Grid item xs={4}>
<TextInput source="productService"   /></Grid>
<Grid item xs={4}>
<NumberInput source="sustainabilityRating"   /></Grid>
<Grid item xs={4}>
<TextInput source="certifications"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const SuppliersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="supplierName"   /></Grid>
<Grid item xs={4}>
<TextInput source="productService"   /></Grid>
<Grid item xs={4}>
<NumberInput source="sustainabilityRating"   /></Grid>
<Grid item xs={4}>
<TextInput source="certifications"   /></Grid>
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

    ];

