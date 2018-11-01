import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Left, Body, Text, Right } from 'native-base'

export default class DogCard extends Component {
  render () {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{this.props.dog.Name}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: this.props.dog.ImageURL }} style={{height: 200, width: null, flex: 1}} />
        </CardItem>
        <CardItem>
          <Left>
            <Text>{this.props.dog.Breed}</Text>
          </Left>
          <Body>
            <Text>{this.props.dog.Age}</Text>
          </Body>
          <Right>
            <Text>{this.props.dog.Distance}</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}
