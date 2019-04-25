/*---------------------------------------------------------------*
 *   @author: Prashant Gaurav                                    *
 *   @app   : TestApp                                            *
 *---------------------------------------------------------------*/
import React, {Component} from 'react';
import {View, Text, StatusBar, Button, StyleSheet, TextInput} from 'react-native';

const data = {
    "username": "prashant@gmail.com",
    "password": 'prashant123'
}

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            message: null,
            isValidUserName: null,
            isValidPassword: null
        }
    }

    /* ----------------------------- Input Validation ----------------------------- */
    _validateInput = (input, type) => {
        if (type === '_username') {
            if (input.length >= 2 && input.length <= 20) {
                this.setState({username: input, isValidUserName: true})
            } else {
                this.setState({input, isValidUserName: false})
            }
        } else if (type === '_password') {
            if (input.length >= 6 && input.length <= 20) {
                this.setState({password: input, isValidPassword: true})
            } else {
                this.setState({input, isValidPassword: false})
            }
        } else {
            console.log('Error while validating input')
        }
    }
    /* ----------------------------- Login             ----------------------------- */
    _validateUser = () => {
        let isValidUserName = data.username === this.state.username
        let isValidPassword = data.password === this.state.password
        if (isValidUserName && isValidPassword === true) {
            this.props.navigation.navigate('Home')
        } else {
            this.setState({message: 'Invalid Credentials'})
        }
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(255,255,255,0)' translucent={true}/>
                <Text style={styles.errorText}>{this.state.message}</Text>
                <TextInput
                    style={!this.state.isValidUserName ? [styles.inputs] : [styles.inputs, {
                        borderColor: 'rgba(26,149,95,1)',
                        borderWidth: 1
                    }]}
                    autoCapitalize='none'
                    clearButtonMode={'always'}
                    autoCorrect={false}
                    autoFocus={false}
                    blurOnSubmit={true}
                    keyboardType='default'
                    returnKeyType='next'
                    placeholder='Username (min length 3)'
                    placeholderTextColor='#AEAEAE'
                    onChangeText={(input) => this._validateInput(input, '_username')}
                />
                <TextInput
                    style={!this.state.isValidPassword ? [styles.inputs] : [styles.inputs, {
                        borderColor: 'rgba(26,149,95,1)',
                        borderWidth: 1
                    }]}
                    autoCapitalize='none'
                    clearButtonMode={'always'}
                    autoCorrect={false}
                    autoFocus={false}
                    blurOnSubmit={true}
                    keyboardType='default'
                    returnKeyType='done'
                    secureTextEntry={true}
                    placeholder='Password (min length 6)'
                    placeholderTextColor='#AEAEAE'
                    onChangeText={(input) => this._validateInput(input, '_password')}
                />
                <Button title="Login" color="#841584" onPress={this._validateUser}/>
            </View>
        );
    }
}

/*------------------------- Screen Styles       ---------------------------*/
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleSection: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#000',
        fontSize: 20
    },
    inputs: {
        margin: 6,
        paddingLeft: 10,
        height: 45,
        width: '70%',
        fontSize: 15,
        fontWeight: '200',
        color: '#000',
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        borderWidth: 0.4,
        borderColor: '#000'
    },
    errorText: {
        color: 'red',
        fontSize: 14,
    }
});
