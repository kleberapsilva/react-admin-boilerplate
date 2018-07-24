import React from 'react';
import {
  Edit,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput,
  SimpleForm,
} from 'react-admin';

const PeolpleEdit = props => (
  <Edit title="Editar Pessoas" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiline: true }} />
      <LongTextInput source="body" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <DisabledInput label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

export default PeolpleEdit;
