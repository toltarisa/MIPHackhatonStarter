import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class CardShowcaseExample extends Component {

  constructor() {
    super();

    this.state = {
      AnnouncomentData: [],
    };
  }

  componentDidMount = () => {
    this.getAnnouncementData();
  }

  getAnnouncementData = () => {
    const url = 'http://10.103.174.191:5000/getAnnouncement';
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ AnnouncomentData: res.data })
      })
      .catch(err => {
        throw err;
      });
  };

  // Description, Date, Location
  render() {
    const { AnnouncomentData } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        {AnnouncomentData.map((data, index) => (
          <Card key={index}>
            <CardItem>
              <Image source={require('../assets/images/11062.jpg')} style={{ width: 70, height: 70, }} />
              <Body style={styles.body}>
                <Text style={styles.textTitle}>{data.Title}</Text>
                <Text style={styles.textDescription}>{data.Description}</Text>
                <Body style={styles.body2}>
                  <Text style={styles.textDate}>{new Date(data.Date).getDate() + '/' + new Date(data.Date).getMonth() + '/' + new Date(data.Date).getFullYear()}</Text>
                  <Text style={styles.textLocation}>{data.Location}</Text>
                </Body>
              </Body>
            </CardItem>
          </Card>
        ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {},
  body: {
    flexDirection: 'column'
  },
  body2: {
    flexDirection: 'row',
  },
  textTitle: {
    paddingLeft: '10%',
    fontWeight: '700',
    flex: 1,
    paddingBottom: '3%',
  },
  textDescription: {
    paddingLeft: '2%',
    paddingBottom: '5%',
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    marginLeft: '5%',
  },
  textDate: {
    flex: 1,
    fontSize: 12,
    color: '#879092'
  },
  textLocation: {
    flex: 1,
    paddingLeft: '25%',
    fontSize: 12,
  }

})