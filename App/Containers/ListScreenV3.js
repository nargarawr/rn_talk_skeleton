import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Header, Content } from 'native-base'
import { connect } from 'react-redux'
import DogCard from '../Components/DogCard'

class ListScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dogs: [
        {
          Id: 1,
          Name: 'Mr. Ruffles',
          Breed: 'Jack Russel',
          Age: '3 Months Old',
          Distance: '2 Miles',
          ImageURL: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'
        },
        {
          Id: 2,
          Name: 'Harry',
          Breed: 'Border Collie',
          Age: '2 Years Old',
          Distance: '1 Mile',
          ImageURL: 'https://data.whicdn.com/images/310592877/original.jpg?t=1523534081'
        },
        {
          Id: 3,
          Name: 'Houdini',
          Breed: 'Terrier',
          Age: '1 Month Old',
          Distance: '0.5 Miles',
          ImageURL: 'https://i.ytimg.com/vi/C_lpU5DiJ0Y/maxresdefault.jpg'
        }
      ]
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
