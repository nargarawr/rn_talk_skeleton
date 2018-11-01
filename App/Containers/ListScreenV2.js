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
          Name: 'Mr. Ruffles',
          Breed: 'Jack Russel',
          Age: '3 Months Old',
          Distance: '2 Miles',
          ImageURL: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'
        },
        {
          Name: 'Harry',
          Breed: 'Border Collie',
          Age: '2 Years Old',
          Distance: '1 Mile',
          ImageURL: 'https://data.whicdn.com/images/310592877/original.jpg?t=1523534081'
        },
        {
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
          <TouchableOpacity onPress={() => { this.onPressDog(this.state.dogs[0]) }}>
            <DogCard dog={this.state.dogs[0]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.onPressDog(this.state.dogs[1]) }}>
            <DogCard dog={this.state.dogs[1]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.onPressDog(this.state.dogs[2]) }}>
            <DogCard dog={this.state.dogs[2]} />
          </TouchableOpacity>
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
