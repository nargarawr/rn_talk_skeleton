import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Header, Content } from 'native-base'
import { connect } from 'react-redux'
import DogCard from '../Components/DogCard'

class ListScreen extends Component {

  componentDidMount() {
    fetch('http://craigknott.com/index/dog')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dogs: responseJson.data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  constructor (props) {
    super(props)

    this.state = {
      dogs: []
    }
  }

  onPressDog () {
    this.props.navigation.navigate('DetailScreen')
  }

  render () {
    return (
      <Container>
        <Header />
        <Content>
          {
            this.state.dogs.map((dog) => {
              return (
                <TouchableOpacity key={dog.Id} onPress={() => { this.onPressDog(dog) }}>
                  <DogCard dog={dog} />
                </TouchableOpacity>
              )
            })
          }
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
