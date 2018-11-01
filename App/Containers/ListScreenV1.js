import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Left, Body, Text, Right } from 'native-base'
import { connect } from 'react-redux'

class ListScreen extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Text>Mr. Ruffles</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Jack Russel</Text>
              </Left>
              <Body>
              <Text>3 Months Old</Text>
              </Body>
              <Right>
                <Text>2 Miles</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
              <Text>Harry</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://data.whicdn.com/images/310592877/original.jpg?t=1523534081'}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Border Collie</Text>
              </Left>
              <Body>
              <Text>2 Years Old</Text>
              </Body>
              <Right>
                <Text>1 Mile</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
              <Text>Houdini</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/C_lpU5DiJ0Y/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Terrier</Text>
              </Left>
              <Body>
              <Text>1 Month Old</Text>
              </Body>
              <Right>
                <Text>0.5 Miles</Text>
              </Right>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)
