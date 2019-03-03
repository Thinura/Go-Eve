{
    /* 
     * Author : T.L. Kumarasinghe
     * Date : 01/03/2019
     * Description : The routes js contents the structure of the application.
     */
}
import React, {
    Component
} from 'react';
import {
    createAppContainer,
    DrawerActions,
    createDrawerNavigator,
    DrawerItems,
    createTabNavigator,
    createStackNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import {
    TextInput,
    AsyncStorage,
    Dimensions,
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import Organizer from './components/Organizer';
import Tickets from './components/Tickets';
import Home from "./components/Home";
import Login from "./components/Login";
import Notifications from "./components/Notifications";
import Favourites from "./components/Favourites";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView >
            <View style={{ alignItems: 'flex-start' }}>
            <Icon name='menu' size={30} onPress={() => (props.navigation.closeDrawer())} style={{ alignSelf: 'flex-end', paddingRight: 10, color: '#191919' }} />
                <Icon.Button name='home' size={25} onPress={() => { props.navigation.navigate('Home') }} style={{ backgroundColor: 'rgba(128,128,128,0.999)', }}>
                <Text style={{ color: '#191919' }}>Home</Text>
                </Icon.Button>
                <IconCommunity.Button name='clipboard-text' size={25} onPress={() => (props.navigation.navigate('Favourites'))} style={{ backgroundColor: 'rgba(128,128,128,0.999)' }}>
                <Text style={{ color: '#191919' }}>Favourites</Text>
                </IconCommunity.Button>
                <Icon.Button name='shopping-cart' size={25} onPress={() => { props.navigation.navigate('Tickets') }} style={{ backgroundColor: 'rgba(128,128,128,0.999)' }}>
                <Text style={{ color: '#191919' }}>Tickets</Text>
                </Icon.Button>
                <FontAwesome.Button name='user' size={25} onPress={() => (props.navigation.navigate('Notifications'))} style={{ backgroundColor: 'rgba(128,128,128,0.999)' }}>
                <Text style={{ color: '#191919' }}>Notifications</Text>
                </FontAwesome.Button>
                <IconCommunity.Button name='logout' size={25} onPress={() => { props.navigation.navigate('Organizer') }} style={{ backgroundColor: 'rgba(128,128,128,0.999)' }}>
                <Text style={{ color: '#191919' }}>Organizer</Text>
                </IconCommunity.Button>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const OrganizerStack = createStackNavigator({
    Organizer: {
        screen: Organizer,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#ee4237' },
            headerTitleStyle: {
                color: '#fff'
            },
            title: 'Orignizer',
            headerLeft: (
                <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
            )}),
    }
}, {
    showIcon: true,
});

const NotificationsStack = createStackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#ee4237' },
            headerTitleStyle: {
                color: '#fff'
            },
            title: 'Notifications',
            headerLeft: (
                <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
            )}),
    }
}, {
    showIcon: true,
});

const TicketsStack = createStackNavigator({
    Tickets: {
        screen: Tickets,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#ee4237' },
            headerTitleStyle: {
                color: '#fff'
            },
            title: 'Tickets',
            headerLeft: (
                <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
            )}),
    }
}, {
    showIcon: true,
});

const FavouritesStack = createStackNavigator({
    Favourites: {
        screen: Favourites,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#ee4237' },
            headerTitleStyle: {
                color: '#fff'
            },
            title: 'Favourites',
            headerLeft: (
                <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
            )}),
    }
}, {
    showIcon: true,
});

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#ee4237' },
            headerTitleStyle: {
                color: '#fff'
            },
            title: 'Home',
            headerLeft: (
                <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
            )}),
    }
}, {
    showIcon: true,
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Favourites: {
        screen: FavouritesStack
    },
    Tickets: {
        screen: TicketsStack
    },
    Notifications: {
        screen: NotificationsStack
    },
    Organizer: {
        screen: OrganizerStack
    }
}, {
    initialRouteName: 'Home',
    showIcon: true,
    contentComponent: CustomDrawerComponent,
    drawerWidth: (width / (4 / 3)),
    drawerBackgroundColor: 'rgba(128,128,128,0.9)',
});

const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    }
}, {
    showIcon: true,
    navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: '#ee4237' },
        headerTitleStyle: {
            color: '#fff'
        },
        title: 'Login',
        headerLeft: (
            <Icon name='menu' size={25} onPress={() => { navigation.openDrawer() }} style={{ padding: 10, color: '#191919' }} />
        )}),
});
const AuthStack = createStackNavigator({
    LoginStack: {
        screen: LoginStack
    }
}, {
    showIcon: true,
});

const MainContainer = createSwitchNavigator({
    // AuthStack: {
    //     screen: AuthStack,
    // },
    App: {
        screen: DrawerNavigator,
    },
}, {
    showIcon: true,
});
export const  Main = createAppContainer(MainContainer);