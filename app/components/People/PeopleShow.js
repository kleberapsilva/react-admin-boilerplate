import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';

const PeopleShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Nome Completo" />
      <TextField source="teaser" options={{ multiline: true }} />
      <DateField label="Publication date" source="published_at" />
      <TextField source="average_note" />
    </SimpleShowLayout>
  </Show>
);

export default PeopleShow;
