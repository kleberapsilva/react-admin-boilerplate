/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import portugueseMessages from 'ra-language-portuguese';
import People from 'components/People/';

//  import { Switch, Route } from 'react-router-dom';
//  import HomePage from 'containers/HomePage/Loadable';
//  import NotFoundPage from 'containers/NotFoundPage/Loadable';
//  import PropTypes from 'prop-types';

const messages = { pt: portugueseMessages };
const i18nProvider = locale => messages[locale];
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    locale="pt"
    i18nProvider={i18nProvider}
    title="BiWeb"
    dataProvider={dataProvider}
  >
    <Resource name="users" options={{ label: 'Pessoas' }} {...People} />
  </Admin>
);
export default App;
