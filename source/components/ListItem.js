import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icons from 'react-native-ionicons'

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            {/* ---------------- Icons Section ----------------*/}
            <View style={styles.profile}>
                <Icons name='contact' size={70} color={'rgba(0,0,0,0.2)'}/>
            </View>
            {/* ---------------- Details Section ----------------*/}
            <View style={{flex: 7, flexDirection: 'column'}}>
                {/* ---------------- Id and Name ----------------*/}
                <View style={styles.name}>
                    <Text style={styles.nameText}>
                        {props.userDetails.item.id}{' . '}
                        {(props.userDetails.item.name).charAt(0).toUpperCase() + props.userDetails.item.name.slice(1)}
                    </Text>
                </View>
                {/* ---------------- Age and gender -------------*/}
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.text}>Age: {props.userDetails.item.age}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.text}> Gender: {props.userDetails.item.gender}</Text>
                    </View>
                </View>
                {/* ---------------- Mobile and Email -----------*/}
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.text}>Mob: {props.userDetails.item.phoneNo}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.text}>Email: {props.userDetails.item.email}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#d5d5d5',
        borderRadius:10,
    },
    profile: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        flex: 3, flexDirection: 'row', alignItems: 'center'

    },
    nameText: {
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 3,
        color: '#000'
    },
    text: {
        fontSize: 12,
        paddingLeft: 3,
        color: '#000'
    }
});
export default ListItem;