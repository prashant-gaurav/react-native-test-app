/*---------------------------------------------------------------*
 *   @author: Prashant Gaurav                                    *
 *   @app   : TestApp                                            *
 *---------------------------------------------------------------*/
import React, {Component} from 'react'
import {StatusBar, StyleSheet, View, FlatList, Text} from 'react-native'
import ListItem from '../components/ListItem'
import {connect} from 'react-redux'

class HomeScreen extends Component {

    /*--------------- User List View To Display Users Details     ---------------*/
    usersList = () => {
        return (
            <FlatList style={styles.listContainer}
                      data={this.props.data}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={info => (
                          <ListItem userDetails={info}/>
                      )}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(255,255,255,0)' translucent={true}/>
                <View style={styles.listContainer}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}> Employee List</Text>
                    </View>
                    {this.usersList()}
                </View>
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
    listContainer: {
        width: '100%',

    }
});
/*-------------------------Redux Map State To Props---------------------------*/
const mapStateToProps = state => {
    return {
        data: state.users.users
    }
}

export default connect(mapStateToProps)(HomeScreen)