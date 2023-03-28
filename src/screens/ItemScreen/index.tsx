import React, {useEffect, useState} from 'react';
import {Alert, Image, TextInput, View} from 'react-native';
import {BSON} from 'realm';
import Button from '../../components/Button';
import Images from '../../constants/Images';
import Person from '../../realm/models/Person';
import {RealmContext} from '../../realm/realmConfig';
import {color} from '../../styles/Base';
import globalStyles from '../../styles/GlobalStyles';
import styles from './styles';

const ItemScreen = ({navigation}: {navigation: any}) => {
  const {useRealm} = RealmContext;
  const realm = useRealm();
  useEffect(() => {
    navigation.setOptions({title: 'Add Business Card'});
  }, [navigation]);

  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

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
        />
      </View>
      <View style={globalStyles.padding8}>
        <Button
          style={{backgroundColor: color.green}}
          title="Save"
          onPress={save}
        />
      </View>
    </View>
  );
};

export default ItemScreen;