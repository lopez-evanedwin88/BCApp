import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import {Route, Mode} from '../../constants/enums/Route';
import Images from '../../constants/Images';
import Person from '../../realm/models/Person';
import {RealmContext} from '../../realm/realmConfig';
import {color} from '../../styles/Base';
import globalStyles from '../../styles/GlobalStyles';
import styles from './styles';

const MainScreen = ({navigation}: {navigation: any}) => {
  const {useQuery} = RealmContext;
  const persons: any = useQuery(Person).sorted('created_at', true);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(Route.ITEM_SCREEN, {mode: Mode.VIEW, person: item})
      }>
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
              <Text>{item.email_address}</Text>
            </View>
          </View>
          <View style={globalStyles.flexDirectionRow}>
            <Image
              resizeMode="contain"
              source={Images.contact}
              style={[styles.imageStyle, {height: 20}]}
            />
            <View style={styles.itemViews}>
              <Text>{item.phone_number}</Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <View style={[globalStyles.flex1, {backgroundColor: color.white}]}>
      {persons.length !== 0 ? (
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
      ) : (
        <View style={styles.emptyTextStyleView}>
          <Text style={styles.emptyTextStyle}>List is empty</Text>
        </View>
      )}
      <View style={styles.btnBusinessStyle}>
        <Button
          title="Add Business Card"
          onPress={() => {
            navigation.navigate(Route.ITEM_SCREEN, {mode: Mode.NEW});
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;
