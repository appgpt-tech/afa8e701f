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
const loansTitle = () => {
  const record = useRecordContext();
  return <span>loans {record ? `"${ record.loanID }"` : ""}</span>;
};

export const loansList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="loanID" />
<ReferenceField source="bookID" reference="books"  />
<ReferenceField source="memberID" reference="members"  />
<DateField source="loanDate" />
<DateField source="dueDate" />
<DateField source="returnDate" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const loansEdit = () => (
                    <Edit title={<loansTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="loanID"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="bookID"  reference="books"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="memberID"  reference="members"   /></Grid>
<Grid item xs={4}>
<DateInput source="loanDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="dueDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="returnDate"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const loansCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="loanID"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="bookID"  reference="books"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="memberID"  reference="members"   /></Grid>
<Grid item xs={4}>
<DateInput source="loanDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="dueDate"   /></Grid>
<Grid item xs={4}>
<DateInput source="returnDate"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="bookID" label="bookID" reference="books"   alwaysOn/>,
<ReferenceInput source="memberID" label="memberID" reference="members"   alwaysOn/>,
,
,
,

    ];

