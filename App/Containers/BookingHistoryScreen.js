import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Text, Right } from 'native-base'
import { connect } from 'react-redux'

class BookingHistoryScreen extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782' }} />
              </Left>
              <Body>
                <Text>Mr Ruffles</Text>
                <Text note> November 3rd, 6:00PM </Text>
              </Body>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://data.whicdn.com/images/310592877/original.jpg?t=1523534081' }} />
              </Left>
              <Body>
                <Text>Harry</Text>
                <Text note> October 30th, 6:00PM </Text>
              </Body>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.ytimg.com/vi/C_lpU5DiJ0Y/maxresdefault.jpg' }} />
              </Left>
              <Body>
                <Text>Houdini</Text>
                <Text note> October 25th, 5:00PM </Text>
              </Body>
            </ListItem>
          </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistoryScreen)
