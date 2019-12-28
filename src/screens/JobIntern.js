import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import JobListTab from './JobList';
import InternshipTab from './Internship';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="İş İlanları">
            <JobListTab />
          </Tab>
          <Tab heading="Staj İlanları">
            <InternshipTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}