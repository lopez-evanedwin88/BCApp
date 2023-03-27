import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Images from '../../constants/Images';
import {color} from '../../styles/Base';
import globalStyles from '../../styles/GlobalStyles';
import styles from './styles';

const renderItem = ({item}: any) => {
  return (
    <ImageBackground source={Images.card_background} resizeMode="cover">
      <View style={globalStyles.padding8}>
        <View style={globalStyles.flexDirectionRow}>
          <Image
            resizeMode="contain"
            source={Images.arrow_right}
            style={styles.imageStyle}
          />
          <View style={styles.itemViews}>
            <Text style={styles.itemViewName}>{item.name}</Text>
            <Text style={styles.itemViewSubName}>
              {item.occupation} @ {item.company}
            </Text>
          </View>
        </View>
        <View style={globalStyles.flexDirectionRow}>
          <Image
            resizeMode="contain"
            source={Images.email}
            style={[styles.imageStyle, {height: 30}]}
          />
          <View style={styles.itemViews}>
            <Text>{item.emailAddress}</Text>
          </View>
        </View>
        <View style={globalStyles.flexDirectionRow}>
          <Image
            resizeMode="contain"
            source={Images.contact}
            style={[styles.imageStyle, {height: 20}]}
          />
          <View style={styles.itemViews}>
            <Text>{item.phoneNo}</Text>
          </View>
        </View>
        <View style={styles.lineStyle} />
        {/* <Text>{item.linkedInUrl}</Text> */}
      </View>
    </ImageBackground>
  );
};

const MainScreen = ({navigation}: {navigation: any}) => {
  const persons: any = [
    {
      name: 'Dongski1',
      occupation: 'Programmer1',
      company: 'Company1',
      emailAddress: 'dongski@gmail.com',
      phoneNo: '94474046',
      linkedInUrl: 'linked.com/evan-edwin-lopez',
    },
    {
      name: 'Dongski1',
      occupation: 'Programmer1',
      company: 'Company1',
      emailAddress: 'dongski@gmail.com',
      phoneNo: '94474046',
      linkedInUrl: 'linked.com/evan-edwin-lopez',
    },
    {
      name: 'Dongski1',
      occupation: 'Programmer1',
      company: 'Company1',
      emailAddress: 'dongski@gmail.com',
      phoneNo: '94474046',
      linkedInUrl: 'linked.com/evan-edwin-lopez',
    },
    {
      name: 'Dongski1',
      occupation: 'Programmer1',
      company: 'Company1',
      emailAddress: 'dongski@gmail.com',
      phoneNo: '94474046',
      linkedInUrl: 'linked.com/evan-edwin-lopez',
    },
  ];

  return (
    <View style={[globalStyles.flex1, {backgroundColor: color.white}]}>
      <FlatList
        refreshing={false}
        scrollEnabled={true}
        style={[globalStyles.width100p]}
        data={persons}
        onEndReached={() => {}}
        onEndReachedThreshold={0}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        ListFooterComponent={
          <ActivityIndicator
            style={globalStyles.marginVertical10}
            animating={false}
          />
        }
      />
      <View style={styles.btnBusinessStyle}>
        <Button title="Add Business Card" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MainScreen;
