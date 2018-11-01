import { StackNavigator } from 'react-navigation'
import ListScreenV1 from '../Containers/ListScreenV1'
import ListScreenV2 from '../Containers/ListScreenV2'
import ListScreenV3 from '../Containers/ListScreenV3'
import DetailScreen from '../Containers/DetailScreen'
import BookingHistoryScreen from '../Containers/BookingHistoryScreen'
import ListScreen from '../Containers/ListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ListScreenV1: { screen: ListScreenV1 },
  ListScreenV2: { screen: ListScreenV2 },
  ListScreenV3: { screen: ListScreenV3 },
  DetailScreen: { screen: DetailScreen },
  BookingHistoryScreen: { screen: BookingHistoryScreen },
  ListScreen: { screen: ListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
