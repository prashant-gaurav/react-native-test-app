/*---------------------------------------------------------------*
 *   @author: Prashant Gaurav                                    *
 *   @app   : TestApp                                            *
 *---------------------------------------------------------------*/
import React from 'react'
import {Provider} from 'react-redux'
import {createStackNavigator, createAppContainer,} from 'react-navigation'
import configureStore from './store'
import LoginScreen from '../source/screens/LoginScreen'
import HomeScreen from '../source/screens/HomeScreen'

const store = configureStore()
let RootStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
});

let Navigation = createAppContainer(RootStack);

export default class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}