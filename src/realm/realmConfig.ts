import {createRealmContext} from '@realm/react';
import Person from './models/Person';
export const RealmContext = createRealmContext({
  // Pass all of your models into the schema value.
  path: 'BCApp.realm',
  schema: [Person],
});
