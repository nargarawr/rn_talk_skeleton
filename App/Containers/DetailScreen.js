import React, { Component } from 'react'
import { Container, Content, Header, Card, CardItem, Text, Button } from 'native-base'
import { Image, Alert } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  onPressBook () {
    Alert.alert(
      'Successfully Booked!',
      'Mr. Ruffles is excited to see you!',
      [
        {text: 'View more dogs',
          onPress: () => {
            this.props.navigation.navigate('ListScreen')
          }
        },
        {text: 'View my bookings',
          onPress: () => {
            this.props.navigation.navigate('BookingHistoryScreen')
          }
        }
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Text style={styles.title}>Mr. Ruffles</Text>
            </CardItem>
            <CardItem>
              <Text>Breed: Jack Russel</Text>
            </CardItem>
            <CardItem>
              <Text>Age: 3 Months Old</Text>
            </CardItem>
            <CardItem>
              <Text>Distance: 2 Miles</Text>
            </CardItem>
          </Card>
          <Button block
            onPress={() => { this.onPressBook() }}>
            <Text>Book Mr. Ruffles</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
