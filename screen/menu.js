import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const Menu = () => {
    const [isRTLEnabled, setIsRTLEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    const toggleRTLSwitch = () => setIsRTLEnabled(previousState => !previousState);
    const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.profile}>Hello, Pinky!</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>RTL</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#F5FCFF' }}
                    thumbColor={isRTLEnabled ? '#D9D9D9' : '#D9D9D9'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleRTLSwitch}
                    value={isRTLEnabled}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>DARK MODE</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#F5FCFF' }}
                    thumbColor={isDarkModeEnabled ? '#D9D9D9' : '#D9D9D9'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleDarkModeSwitch}
                    value={isDarkModeEnabled}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07141F',
    },
    header: {
        marginVertical: 20,
        marginLeft: 20,
    },
    profile: {
        color: '#FEFEFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    label: {
        color: '#FEFEFF',
        fontSize: 16,
        marginRight: 10,
    },
});

export default Menu ;
