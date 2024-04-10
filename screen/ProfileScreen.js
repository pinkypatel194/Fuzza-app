import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileImage from "../assets/setup.png";
import chackout from "../assets/chackout1.png"
import Orders from "../assets/Orders.png";
import Wishlist from "../assets/Wishlist.png";
import Payment from "../assets/Ewallet.png";
import Home from "../assets/service.png";
import Notification from "../assets/Notification.png";
import Settings from "../assets/Settings.png";
import Terms from "../assets/Terms.png";

const Profile = ({ navigation, route }) => {
    const { name } = route.params ?? {};

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={style.Color}>
                <TouchableOpacity style={style.backIconContainer} onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={style.continue}>Profile</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileDetails')}>
                        <Image source={ProfileImage} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FEFEFF', marginLeft: 20, marginTop: 24 }}>pinky</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <Image source={chackout} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 20, backgroundColor: '#FEFEFF', marginLeft: 150 }} />
                    </TouchableOpacity>
                </View>
                <View style={style.border}></View>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Orders} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Order History')}>
                        <Text style={style.Text1}>Orders</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}>Ongoing orders, Recent orders..</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Wishlist} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
                        <Text style={style.Text1}>Wishlist</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}> Your save product...</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Payment} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Payment Method')}>
                        <Text style={style.Text1}>Payment</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}> Saved card, Wallets...</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Home} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Saved Addrees')}>
                        <Text style={style.Text1}>Saved Address</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}> Home, Office..</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Notification} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Text style={style.Text1}>Notification</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}> Offers, Order tracking messages...</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Settings} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Text style={style.Text1}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}>app settings, Dark mode...</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={Terms} style={{ height: 30, width: 30, marginTop: 50, marginLeft: 20, backgroundColor: '#122636', borderRadius: 3 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('Terms and conditions')}>
                        <Text style={style.Text1}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.Text2}> Terms & Conditions...</Text>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    continue: {
        marginTop: 0,
        marginLeft: 10,
        padding: 20,
        color: 'white',
        fontSize: 15,
        // fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    Color: {
        backgroundColor: '#07141F',
        flex: 1,
    },
    box: {
        height: 158,
        width: 428,
        backgroundColor: '#122636',
    },
    Text: {
        color: '#FEFEFF',
        marginTop: 20
    },
    Text1: {
        color: '#FEFEFF',
        marginTop: 50,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    Text2: {
        color: '#FEFEFF',
        marginLeft: 80,
        fontSize: 12,
    },
    backIconContainer: {
        position: 'absolute',
        top: 35,
        left: 10,
        zIndex: 1,
    },
    border: {
        marginTop: 30,
        borderBottomWidth: 3,
        borderColor: '#FEFEFF',
    }
})

export default Profile;