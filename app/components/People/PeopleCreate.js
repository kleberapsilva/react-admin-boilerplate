import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  SelectInput,
  SelectArrayInput,
  TextInput,
  DateInput,
  LongTextInput,
} from 'react-admin';
import { validateRequired, validCPF } from 'utils/formValidate';
import { CpfMask } from 'utils/masks';
import AddressContactsPartial from './AddressContactsPartial';

const PeopleCreate = props => (
  <Create title="Criar novo" {...props}>
    <TabbedForm>
      <FormTab label="Dados Básicos">
        <SelectInput
          validate={validateRequired}
          source="Tipo"
          choices={[
            { id: 'PF', name: 'Pessoa Física' },
            { id: 'PJ', name: 'Pessoa Jurídica' },
            { id: 'PFSRB', name: 'Pessoa Física sem residencia no Brasil' },
            { id: 'PJSRB', name: 'Pessoa Jurídica sem residencia no Brasil' },
            { id: 'OP', name: 'Órgão Publico' },
          ]}
        />
        <SelectInput
          source="Sexo"
          choices={[
            { id: 'M', name: 'Masculino' },
            { id: 'F', name: 'Feminino' },
          ]}
        />
        <SelectArrayInput
          validate={validateRequired}
          label="Papeis"
          source="Papeis"
          choices={[
            { id: '1', name: 'Acionista' },
            { id: '2', name: 'Tomador e Locatário' },
            { id: '3', name: 'Cliente' },
            { id: '4', name: 'Corretor' },
            { id: '5', name: 'Fornecedor' },
            { id: '6', name: 'Beneficiário' },
            { id: '7', name: 'Produtor' },
            { id: '8', name: 'Funcionário' },
            { id: '9', name: 'Congênere' },
            { id: '10', name: 'Ressegurador' },
            { id: '11', name: 'Cônjuge' },
            { id: '12', name: 'Terceiro de sinistro' },
            { id: '13', name: 'Representante Legal' },
          ]}
        />
        <TextInput source="Nome Completo" />
        <TextInput label="CPF" source="CPF" validate={validCPF} {...CpfMask} />
        <TextInput label="RG" source="RG" />
        <TextInput source="Orgão Expeditor" />
        <DateInput source="Data de Nascimento" />
        <TextInput
          label="Passaporte/País de expedição"
          source="Passaporte/País de expedição"
        />
        <TextInput label="Equandramento em PPE" source="Equandramento em PPE" />
        <TextInput source="Razão Social (denominação)" />
        <TextInput source="Atividade Principal" />
        <TextInput label="CNPJ" source="CNPJ" />
        <TextInput
          label="Nome Completo"
          source="nomeCompleto"
          validate={validateRequired}
        />
        <TextInput source="teaser" options={{ multiline: true }} />
        <LongTextInput source="body" />
        <TextInput label="Publication date" source="published_at" />
        <TextInput source="average_note" />
      </FormTab>
      <FormTab label="Endereço">
        <AddressContactsPartial />
      </FormTab>
      <FormTab label="Meio de Pagamento">
        <TextInput source="Nome Completo" />
      </FormTab>
      <FormTab label="Documentos">
        <TextInput source="Nome Completo" />
      </FormTab>
      <FormTab label="Situação">
        <TextInput source="Nome Completo" />
      </FormTab>
      <FormTab label="Contatos Adicionais">
        <TextInput source="Nome Completo" />
      </FormTab>
    </TabbedForm>
  </Create>
);

export default PeopleCreate;
