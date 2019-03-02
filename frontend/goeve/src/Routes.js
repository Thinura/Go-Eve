{/* 
  * Author : T.L. Kumarasinghe
  * Date : 01/03/2019
  * Description : The routes js contents the structure of the application.
*/}
import React, {
    Component
} from 'react';
import {
    DrawerActions,
    createDrawerNavigator,
    DrawerItems,
    createTabNavigator,
    createStackNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from "react-navigation";

const OrganizerStack = createStackNavigator({
    Organizer: {
        screen: Organizer
    }
}, {
    showIcon: true
});

const NotificationsStack = createStackNavigator({
    Notifications: {
        screen: Notifications
    }
}, {
    showIcon: true
});

const TicketsStack = createStackNavigator({
    Tickets: {
        screen: Tickets
    }
}, {
    showIcon: true
});

const FavouritesStack = createStackNavigator({
    Favourites: {
        screen: Favourites
    }
}, {
    showIcon: true
});

const HomeStack = createStackNavigator({
    Home: {
        screen: Home
    }
}, {
    showIcon: true
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
    showIcon: true,
});

const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    }
}, {
    showIcon: true
});
const AuthStack = createStackNavigator({
    LoginStack: {
        screen: LoginStack
    }
}, {
    showIcon: true,
});

export const Main = createSwitchNavigator({
    AuthStack: {
        screen: AuthStack,
    },
    App: {
        screen: DrawerNavigator,
    },
}, {
    showIcon: true,
});