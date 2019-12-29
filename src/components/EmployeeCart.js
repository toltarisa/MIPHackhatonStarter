import React, {Component} from 'react';
import {StyleSheet, View, Picker, Image, Text} from 'react-native';
import {Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const ls = require('react-native-local-storage');
import {ToastAndroid} from 'react-native';
export default class extends Component {
  constructor() {
    super();

    this.state = {
      selected2: undefined,
      Text: '',
      UserId: '',
    };
  }
  componentDidMount = () => {
    this.getMarketData();
  };
  getMarketData = async () => {
    //const url = 'http://10.103.174.191:5000/getOrderCompany';
    try {
      const data = await ls.get('id');
      this.setState({UserId: data});
    } catch (error) {
      throw error;
    }
  };

  sendOrderData = () => {
    const url = 'http://10.103.174.191:5000/setOrder';
    const {UserId, selected2, Text} = this.state;
    const CompanyId = selected2;
    axios
      .post(url, {UserId, Text, CompanyId})
      .then(res => {
        if (res.status === 200) {
          ToastAndroid.show('Siparişiniz Alındı', ToastAndroid.SHORT);
          this.setState({selected2: undefined, Text: '', UserId: ''});
        } else {
          ToastAndroid.show(
            'Siparişiniz alınırken bir hata oluştu',
            ToastAndroid.SHORT,
          );
        }
      })
      .catch(err => {
        throw err;
      });
  };
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <Item style={{flex: 1, marginBottom: 20}} picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-dropdown" />}
            style={{flex: 1}}
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}>
            <Picker.Item label="Market Seç" value="" />
            <Picker.Item label={'Papatya Market'} value={'1'} />
            <Picker.Item label={'Özyeğenler Restaurant'} value={'2'} />
          </Picker>
        </Item>
        <Item style={{flex: 1, marginBottom: 20}}>
          <Input
            onChange={e => this.setState({Text: e.nativeEvent.text})}
            placeholder="Ürünü girin"
          />
        </Item>

        <Button
          onPress={() => this.sendOrderData()}
          style={{
            flex: 1,
            marginVertical: 30,
          }}
          rounded>
          <Icon
            style={{marginHorizontal: 10}}
            color={'white'}
            name="ios-basket"
            size={30}
          />
          <Text style={{color: 'white'}}>Sipariş Ver</Text>
        </Button>
        <View style={{flex: 1}}>
          <Image
            style={{resizeMode: 'contain', width: 200, height: 200}}
            source={require('../assets/images/order.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
