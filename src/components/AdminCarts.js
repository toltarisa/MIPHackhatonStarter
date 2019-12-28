import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  ImageBackground,
} from 'react-native';
import {Container, Content, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductSelling from './ProductSelling';
import ListProduct from './ListProducts';
import CreateJob from './CreateJob';
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
                <Content style={styles.content}></Content>
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
            <View>
              <Text>Ürün İlanı</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={require('../assets/images/handshake.png')}
            style={{width: 150}}>
            <TouchableOpacity
              onPress={() => this.setModalVisible2(true)}
              style={styles.card}>
              <View>
                <Text>İş İlanı</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
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
            <View>
              <Text>Duyuru</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setModalVisible4(true)}
            style={styles.card}>
            <View>
              <Text>Mesaj Gönder</Text>
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
            <View>
              <Text>Ürünleri Listele</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: '10%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    width: 150,
    height: 120,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});
