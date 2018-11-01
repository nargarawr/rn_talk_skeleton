import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Container, Header ,Content, Card, CardItem, Button } from 'native-base'
import { connect } from 'react-redux'

class DetailScreen extends Component {

  constructor (props) {
    super(props)
    const { dog } = this.props.navigation.state.params
    this.state = {
      dog
    }
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: this.state.dog.ImageURL}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Text>{this.state.dog.Name}</Text>
            </CardItem>
            <CardItem>
              <Text>Breed: {this.state.dog.Breed}</Text>
            </CardItem>
            <CardItem>
              <Text>Age: {this.state.dog.Age}</Text>
            </CardItem>
            <CardItem>
              <Text>Distance: {this.state.dog.Distance}</Text>
            </CardItem>
          </Card>
          <Button block>
            <Text>Book {this.state.dog.Name}</Text>
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
