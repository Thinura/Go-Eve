import React, {
    Component
} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from "react-native";

class Favourites extends Component {
    render() {
        return ( 
            <View style={styles.container}>
            <Text > Favourites </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Favourites;