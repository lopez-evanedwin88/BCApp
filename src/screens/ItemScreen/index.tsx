import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Alert, Image, TextInput, View} from 'react-native';
import {BSON} from 'realm';
import Button from '../../components/Button';
import {Mode} from '../../constants/enums/Route';
import Images from '../../constants/Images';
import Person from '../../realm/models/Person';
import {RealmContext} from '../../realm/realmConfig';
import {color} from '../../styles/Base';
import globalStyles from '../../styles/GlobalStyles';
import styles from './styles';
import Contacts from 'react-native-contacts';

const ItemScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  const [mode, setMode] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title:
        route.params.mode === Mode.VIEW
          ? 'View Business Card'
          : 'Add Business Card',
    });
  }, [navigation, route]);

  useLayoutEffect(() => {
    if (route.params.mode === Mode.VIEW) {
      setMode(false);
      setName(route.params.person.name || ' ');
      setOccupation(route.params.person.occupation || ' ');
      setCompany(route.params.person.company || ' ');
      setEmail(route.params.person.email_address || ' ');
      setContactNumber(route.params.person.phone_number || ' ');
      setLinkedIn(route.params.person.linkedIn_URL || ' ');
    }
  }, [route]);

  const save = () => {
    if (!name) {
      Alert.alert('Field Required', 'Please enter name');
      return;
    }
    if (!occupation) {
      Alert.alert('Field Required', 'Please enter occupation');
      return;
    }
    if (!company) {
      Alert.alert('Field Required', 'Please enter company');
      return;
    }
    if (!email) {
      Alert.alert('Field Required', 'Please enter email');
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      Alert.alert('Not a valid email address', 'Please enter a valid email');
      return;
    }
    if (!contactNumber) {
      Alert.alert('Field Required', 'Please enter contact number');
      return;
    }
    //Save data to realm
    realm.write(() => {
      const generatedObjectId = new BSON.ObjectId();
      // eslint-disable-next-line no-new
      new Person(realm, {
        _id: generatedObjectId,
        name: name,
        occupation: occupation,
        company: company,
        email_address: email,
        phone_number: contactNumber,
        linkedIn_URL: linkedIn,
        created_at: new Date().getTime(),
      });

      Alert.alert(
        'Created a business card',
        'You have successfully added a business card',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
            style: 'default',
          },
        ],
        {
          cancelable: false,
        },
      );
    });
  };

  const deletePerson = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this record?',
      [
        {
          text: 'Yes',
          onPress: () => {
            realm.write(() => {
              realm.delete(route.params.person);
            });

            Alert.alert(
              'Succesfully removed',
              '',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.goBack(),
                  style: 'default',
                },
              ],
              {
                cancelable: false,
              },
            );
          },
          style: 'default',
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  const exportToContacts = () => {
    var newPerson = {
      displayName: name,
      givenName: name,
      jobTitle: occupation,
      company: company,
      emailAddresses: [
        {
          label: 'work',
          email: email,
        },
      ],
      phoneNumbers: [
        {
          label: 'mobile',
          number: contactNumber,
        },
      ],
    };

    Contacts.openContactForm(newPerson).then(contacts => {
      contacts &&
        Alert.alert(
          'Successfully added to Contacts',
          '',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
          ],
          {
            cancelable: false,
          },
        );
    });
  };

  return (
    <View
      style={[
        globalStyles.flex1,
        {backgroundColor: color.white},
        globalStyles.padding8,
      ]}>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.name}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter Name"
          style={styles.txtInputStyle}
          value={name}
          onChangeText={text => setName(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.occupation}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter Occupation / Title"
          style={styles.txtInputStyle}
          value={occupation}
          onChangeText={text => setOccupation(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.company}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter Company name"
          style={styles.txtInputStyle}
          value={company}
          onChangeText={text => setCompany(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.email}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter Email Address"
          style={styles.txtInputStyle}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.contact}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter Phone Number"
          style={styles.txtInputStyle}
          value={contactNumber}
          onChangeText={text => setContactNumber(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      <View style={[globalStyles.flexDirectionRow, styles.txtInputStyleView]}>
        <Image
          resizeMode="contain"
          source={Images.linked_in}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Enter linkedIn URL"
          style={styles.txtInputStyle}
          value={linkedIn}
          onChangeText={text => setLinkedIn(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={mode}
          selectTextOnFocus={mode}
        />
      </View>
      {mode && (
        <View style={globalStyles.padding8}>
          <Button
            style={{backgroundColor: color.green}}
            title="Save"
            onPress={save}
          />
        </View>
      )}
      {!mode && (
        <>
          <View style={globalStyles.padding8}>
            <Button
              style={styles.exportBtnStyle}
              title="Export as Phone Contact"
              textStyle={{color: color.green}}
              onPress={exportToContacts}
            />
          </View>
          <View style={globalStyles.padding8}>
            <Button
              style={{backgroundColor: color.red}}
              title="Delete Item"
              onPress={deletePerson}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ItemScreen;
