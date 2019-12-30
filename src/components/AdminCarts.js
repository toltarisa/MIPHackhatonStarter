import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Modal} from 'react-native';
import {Container, Content, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductSelling from './ProductSelling';
import ListProduct from './ListProducts';
import CreateJob from './CreateJob';
import Anket from './Anket';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      modalVisible4: false,
      modalVisible5: false,
    };
  }

  setModalVisible1(visible) {
    this.setState({modalVisible1: visible});
  }
  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
  }
  setModalVisible3(visible) {
    this.setState({modalVisible3: visible});
  }
  setModalVisible4(visible) {
    this.setState({modalVisible4: visible});
  }
  setModalVisible5(visible) {
    this.setState({modalVisible5: visible});
  }
  render() {
    return (
      <View style={styles.main}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible1}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <Container>
                <Content style={styles.content}>
                  <ProductSelling />
                </Content>
              </Container>
            </View>
          </View>
          <View>
            <Button
              style={styles.hidebtn}
              primary
              onPress={() => {
                this.setModalVisible1(!this.state.modalVisible1);
              }}>
              <Icon
                style={{marginLeft: 10}}
                color={'#fff'}
                name="ios-arrow-back"
                size={20}
              />
            </Button>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible2}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <Container>
                <Content style={styles.content}>
                  <CreateJob />
                </Content>
              </Container>
            </View>
          </View>
          <View>
            <Button
              style={styles.hidebtn}
              primary
              onPress={() => {
                this.setModalVisible2(!this.state.modalVisible2);
              }}>
              <Icon
                style={{marginLeft: 10}}
                color={'#fff'}
                name="ios-arrow-back"
                size={20}
              />
            </Button>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible3}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <Container>
                <Content style={styles.content}></Content>
              </Container>
            </View>
          </View>
          <View>
            <Button
              style={styles.hidebtn}
              primary
              onPress={() => {
                this.setModalVisible3(!this.state.modalVisible3);
              }}>
              <Icon
                style={{marginLeft: 10}}
                color={'#fff'}
                name="ios-arrow-back"
                size={20}
              />
            </Button>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible4}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <Container>
                <Content style={styles.content}>
                  <Anket />
                </Content>
              </Container>
            </View>
          </View>
          <View>
            <Button
              style={styles.hidebtn}
              primary
              onPress={() => {
                this.setModalVisible4(!this.state.modalVisible4);
              }}>
              <Icon
                style={{marginLeft: 10}}
                color={'#fff'}
                name="ios-arrow-back"
                size={20}
              />
            </Button>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible5}
          onRequestClose={() => {}}>
          <View style={{marginTop: 22, flex: 1}}>
            <View style={{flex: 1}}>
              <Container>
                <Content style={styles.content}>
                  <ListProduct />
                </Content>
              </Container>
            </View>
          </View>
          <View>
            <Button
              style={styles.hidebtn}
              primary
              onPress={() => {
                this.setModalVisible5(!this.state.modalVisible5);
              }}>
              <Icon
                style={{marginLeft: 10}}
                color={'#fff'}
                name="ios-arrow-back"
                size={20}
              />
              <Text style={{color: '#fff', marginRight: 10}}>Geri Gel</Text>
            </Button>
          </View>
        </Modal>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.setModalVisible1(true)}
            style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-basket" size={40} />

              <Text style={styles.textColor}>Ürün İlanı</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setModalVisible2(true)}
            style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-briefcase" size={40} />
              <Text style={styles.textColor}>İş İlanı</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.setModalVisible3(true)}
            style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-notifications-outline" size={40} />
              <Text style={styles.textColor}>Duyuru</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setModalVisible4(true)}
            style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-send" size={40} />
              <Text style={styles.textColor}>Anket Oluştur</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => this.setModalVisible5(true)}
            style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-list" size={40} />
              <Text style={styles.textColor}>Ürünleri Listele</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.textCenter}>
              <Icon name="ios-add-circle-outline" size={40} />
              <Text style={styles.textColor}>Eklenecek</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  card: {
    flex: 1,
    width: 150,
    height: 120,
    borderRadius: 25,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      x: 20,
      y: 20,
    },
  },

  textCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
