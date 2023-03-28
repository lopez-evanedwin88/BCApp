class Person extends Realm.Object<Person> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  occupation!: string;
  company!: string;
  email_address!: string;
  phone_number!: string;
  linkedIn_URL?: string;
  created_at!: number;

  static schema = {
    name: 'Person',
    properties: {
      _id: 'objectId',
      name: 'string',
      occupation: 'string',
      company: 'string',
      email_address: 'string',
      phone_number: 'string',
      linkedIn_URL: 'string?',
      created_at: 'int',
    },
    primaryKey: '_id',
  };
}

export default Person;
