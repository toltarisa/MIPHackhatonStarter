import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
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



export default class extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const JobData = [
      {
        id: 1,
        title: 'Demir Ustası',
        description:
          'Talaşlı İmalat, Kalıp Tasarımı ve İmalatı konularında minimum 10 yıl tecrübeli,Üniversitelerin Makine Mühendisliği bölümlerinden mezun,AutoCAD ve SolidWorks programlarına hakim,5 yıl yöneticilik deneyimine sahip olmalı',
        company: 'BMS Çelik Hasır',
        cv: '',
      },
      {
        id: 2,
        title: 'Marangoz',
        description:
          'Marangoz ustası,mobilya ustası ve en az 4 sene marangoz veya mobilya işinde çalışmış elemanlar aranıyor.İlgili adayların başvurularını bekliyoruz',
        company: 'Gencer Ambalaj',
        cv: '',
      },
      {
        id: 3,
        title: 'Elektronik Teknisyeni',
        description:
          'MYO ve/veya Teknik Liselein Elektronik, Elektrik-Elektronik, Mekatraonik vb. bölümlerinden mezun,Elekronik devre şemaları ve kumanda devrelerini okuyabilen,Elektronik bakım/arıza-sorun çözme konusunda en az 3 yıl fabrika/seri üretim tecrübesine sahip,ercihen Siemens, Beckoff Ürün ailesinde tecrübeli,',
        company: 'Delron Elektronik',
        cv: '',
      },
      {
        id: 4,
        title: 'Elektrik teknisyeni',
        description:
          'Meslek Liseleri veya Meslek Yüksek Okullarının ilgili bölümlerinden mezun olan, Konusu ile alakalı Mesleki Yeterlilik Belgelerine sahip olan, Konusunda 3 yıl ve üzeri tecrübeye sahip,Tercihen Fabrika / Üretim Tesisi veya Şantiye geçmişi olan,Vardiyalı çalışma sistemine uygun olan,',
        company: 'Vestel',
        cv: '',
      },
      {
        id: 5,
        title: 'Tekstil Mühendisi',
        description:
          'Tercihen Siemens, Beckoff Ürün ailesinde tecrübeli,İş takibi kuvvetli,Dosya düzenleme ve oluşturma; sistemsel takip yeteneğine sahip,Bilgisayar ofis programlarına hakim,Takım çalışmalarına yatkın,zaman yönetimi ve iletişim becerileri güçlü,',
        company: 'Fabrik Konfeksiyon',
        cv: '',
      },
    ];
    return (
      <View style={styles.main}>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { }}>
            <View style={{ marginTop: 22, flex: 1 }}>
              <View style={{ flex: 1 }}>
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
                          style={{ width: '30%', height: 50, padding: 10 }}>
                          <Icon color={'#fff'} name="ios-checkmark" size={30} />
                          <Text style={{ fontSize: 15, color: '#fff' }}>
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
                      style={{ marginLeft: 10 }}
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
            {JobData.map(data => (
              <View key={data.id} style={styles.card}>
                <Content>
                  <Card>
                    <CardItem header>
                      <Text>{data.title}</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{data.description}</Text>
                      </Body>
                    </CardItem>
                    <CardItem footer style={styles.footer}>
                      <Text>{data.company}</Text>
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
