import React from 'react';
import { List, TextField, EditButton, Datagrid, ShowButton } from 'react-admin';

const PeopleList = props => (
  <List title="Listar Pessoas" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default PeopleList;
