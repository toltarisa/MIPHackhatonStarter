import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Card,
  CardItem,
  Body,
  Button,
  Content,
  Form,
  Item,
  Input,
  Container,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
export default class extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
      JobData: [],
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount = () => {
    this.getJobData();
  };

  getJobData = () => {
    const url = 'http://10.103.174.191:5000/getJob';
    axios
      .get(url)
      .then(res => this.setState({JobData: res.data}))
      .catch(err => {
        throw err;
      });
  };

  render() {
    const {JobData} = this.state;
    return (
      <View style={styles.main}>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>
            <View style={{marginTop: 22, flex: 1}}>
              <View style={{flex: 1}}>
                <Container>
                  <Content style={styles.content}>
                    <Form style={styles.form}>
                      <Item style={styles.item} last>
                        <Input style={styles.input} placeholder="Adi" />
                      </Item>
                      <Item style={styles.item} last>
                        <Input style={styles.input} placeholder="Soyadi" />
                      </Item>
                      <Item style={styles.item} last>
                        <Input style={styles.input} placeholder="Tel No" />
                      </Item>
                      <Item style={styles.item} last>
                        <Input style={styles.input} />
                      </Item>
                      <View>
                        <Button
                          onPress={() => {
                            this.setModalVisible(true);
                          }}
                          small
                          success
                          style={{width: '30%', height: 50, padding: 10}}>
                          <Icon color={'#fff'} name="ios-checkmark" size={30} />
                          <Text style={{fontSize: 15, color: '#fff'}}>
                            Gönder
                          </Text>
                        </Button>
                      </View>
                    </Form>
                  </Content>
                </Container>

                <View>
                  <Button
                    style={styles.hidebtn}
                    primary
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon
                      style={{marginLeft: 10}}
                      color={'#fff'}
                      name="ios-arrow-back"
                      size={20}
                    />
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            {JobData.map((data, index) => (
              <View key={index} style={styles.card}>
                <Content>
                  <Card>
                    <CardItem header>
                      <Text>{data.Title}</Text>
                    </CardItem>
                    <CardItem>
                      <Body style={{flex: 1, justifyContent: 'space-between'}}>
                        <Text>{data.Text}</Text>
                        <Text>{data.Category}</Text>
                      </Body>
                    </CardItem>
                    <CardItem footer style={styles.footer}>
                      <Text>{data.Company}</Text>
                      <Button
                        onPress={() => {
                          this.setModalVisible(true);
                        }}
                        small
                        success
                        style={styles.button}>
                        <Icon color={'#fff'} name="ios-checkmark" size={20} />
                        <Text style={styles.textColor}>Başvur</Text>
                      </Button>
                    </CardItem>
                  </Card>
                </Content>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  menu: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scroll: {},
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
  },
  textColor: {
    color: '#fff',
    marginHorizontal: 10,
  },
  content: {},
  form: {
    padding: 10,
  },
  item: {
    marginVertical: 10,
  },
  input: {
    padding: 5,
    fontSize: 16,
  },
  hidebtn: {
    width: 35,
    margin: 20,
  },
});
