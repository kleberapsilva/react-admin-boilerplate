import React from 'react';
import { TextInput, SelectInput } from 'react-admin';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { validateRequired } from 'utils/formValidate';

const states = [
  { id: 1, name: 'SP' },
  { id: 2, name: 'RJ' },
  { id: 3, name: 'MG' },
];
const cities = [
  { id: 1, name: 'São Paulo' },
  { id: 2, name: 'Rio de Janeiro' },
];
const addressType = [
  { id: 1, name: 'Residencial' },
  { id: 2, name: 'Comercial' },
];

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  space: {
    paddingRight: theme.spacing.unit * 4,
  },
});

const AddressContactsPartial = props => (
  <div {...props}>
    <div className="fullWidth">
      <TextInput source="Cep" validate={validateRequired} />
    </div>
    <TextInput source="Endereço" fullWidth />
    <div>
      <TextInput source="Número" />
    </div>
    <div>
      <TextInput source="Complemento" />
    </div>
    <div>
      <SelectInput
        source="Estado"
        choices={states}
        optionText="name"
        optionValue="id"
      />
    </div>
    <SelectInput
      source="Cidade"
      choices={cities}
      optionText="name"
      optionValue="id"
    />
    <div>
      <SelectInput
        source="Tipo de Endereço"
        choices={addressType}
        optionText="name"
        optionValue="id"
      />
    </div>
    <div>
      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={styles.button}
      >
        <AddIcon />
      </Button>
    </div>
  </div>
);

export default AddressContactsPartial;
