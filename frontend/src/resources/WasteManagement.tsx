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
const WasteManagementTitle = () => {
  const record = useRecordContext();
  return <span>WasteManagement {record ? `"${ record.wasteType }"` : ""}</span>;
};

export const WasteManagementList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="wasteType" />
<NumberField source="quantityGenerated" />
<TextField source="recyclingMethod" />
<TextField source="reductionInitiatives" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const WasteManagementEdit = () => (
                    <Edit title={<WasteManagementTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="wasteType"   /></Grid>
<Grid item xs={4}>
<NumberInput source="quantityGenerated"   /></Grid>
<Grid item xs={4}>
<TextInput source="recyclingMethod"   /></Grid>
<Grid item xs={4}>
<TextInput source="reductionInitiatives"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const WasteManagementCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="wasteType"   /></Grid>
<Grid item xs={4}>
<NumberInput source="quantityGenerated"   /></Grid>
<Grid item xs={4}>
<TextInput source="recyclingMethod"   /></Grid>
<Grid item xs={4}>
<TextInput source="reductionInitiatives"   /></Grid>
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


