import React from "react";
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoungeChair from "../assets/Chairs.png";
import LoungeLamp from "../assets/Lamps.png";
import LoungeTable from "../assets/Tables.png";
import deleted from "../assets/deleted.png";
import map from "../assets/map.png";
const Checkout = ({ navigation }) => {

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={style.Color}>
                <TouchableOpacity style={style.backIconContainer} onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={style.continue}>checkout</Text>
                <Text style={style.Shipping}>Shipping Address</Text>
                <View style={style.box4}>
                    <View style={{ flexDirection: 'row' }} >
                        <Image source={map} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 20, padding: 5, backgroundColor: '#FEFEFF' }} />
                        <Text style={style.Home}>Home</Text>
                        <Text style={style.Home1}>790 Hyde park rd,ontarite</Text>
                    </View>
                </View>
                <View style={style.box}  >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.box1}>
                            <Image source={LoungeChair} style={{ height: 80, width: 80, marginTop: 7, marginLeft: 4, padding: 10 }} />
                        </View>
                        <Text style={style.text}>Lounge Chair
                        </Text>
                        <Text style={style.text1}>Qty : 1    Blue </Text>
                        <Text style={style.text2}>$130</Text>
                        <Image source={deleted} style={{ height: 10, width: 10, marginLeft: 150, padding: 10 }} />
                    </View>
                </View>
                <View style={style.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.box1}>
                            <Image source={LoungeLamp} style={{ height: 75, width: 70, marginTop: 10, marginLeft: 15, padding: 10 }} />
                        </View>
                        <Text style={style.text}>Lounge Lamp</Text>
                        <Text style={style.text1}>Qty : 1     Block </Text>
                        <Text style={style.text2}>$150</Text>
                        <Image source={deleted} style={{ height: 10, width: 10, marginLeft: 150, padding: 10 }} />
                    </View>
                </View>
                <View style={style.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.box1}>
                            <Image source={LoungeTable} style={{ height: 75, width: 70, marginTop: 30, marginLeft: 15, padding: 10 }} />
                        </View>
                        <Text style={style.text}>Lounge Table</Text>
                        <Text style={style.text1}>Qty : 1    Brown </Text>
                        <Text style={style.text2}>$100</Text>
                        <Image source={deleted} style={{ height: 10, width: 10, marginLeft: 150, padding: 10 }} />
                    </View>
                </View>
                <Text style={style.Shipping}> Choose Shipping </Text>
                <View style={style.chooes}>
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('ChooseShipping')}>
                            <Image source={map} style={{ width: 30, height: 30, marginLeft: 10, marginTop: 15, padding: 5, backgroundColor: '#FEFEFF' }} />
                        </TouchableOpacity>
                        <Text style={style.Home2}>Choose Shiping Type</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
                    <Text style={style.Shipping}> Apply Coupon </Text>
                </TouchableOpacity>
                <View style={style.chooes}>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={style.code}>#G00GLE20</Text>
                    </View>
                </View>
                <View style={style.create}>
                        <TouchableOpacity onPress={() => navigation.navigate('SavedAddrees')}>
                    <View style={{ flexDirection: 'row' }} >
                            <Text style={style.payment}>Contioue to payment</Text>
                    </View>
                        </TouchableOpacity>
                </View>
                <View style={style.box5}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.check}>Shipping Charge </Text>
                        <Text style={style.text3}>$20.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.check}>Discount(10%) </Text>
                        <Text style={style.text3}>  $0.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={style.Total}>Grand Total   </Text>
                        <Text style={style.text3}> $230</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    continue: {
        marginTop: 20,
        marginLeft: 2,
        padding: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
    Color: {
        backgroundColor: '#07141F',
        flex: 1,
    },
    box: {
        height: 110,
        width: 340,
        backgroundColor: '#122636',
        marginLeft: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 7,
    },
    box1: {
        height: 90,
        width: 90,
        backgroundColor: '#1F303E',
        borderRadius: 7,
    },
    text: {
        marginLeft: 15,
        color: '#FEFEFF',
        fontSize: 14,
    },
    text1: {
        marginLeft: -85,
        marginTop: 25,
        color: '#FEFEFF',
        fontSize: 14,
    },
    text2: {
        marginLeft: -85,
        marginTop: 50,
        color: '#FEFEFF',
        fontSize: 14,
    },
    box2: {
        height: 70,
        width: 360,
        backgroundColor: '#122636',
        marginTop: 130,
        padding: 10,
    },
    navigator: {
        height: 71,
        width: 100,
        fontSize: 20,
        color: '#FEFEFF',
        marginLeft: 10,
    },
    font: {
        color: '#FEFEFF',
        marginLeft: 10,
    },
    Button: {
        backgroundColor: '#FEFEFF',
        alignSelf: 'flex-end',
        fontSize: 12
    },
    Shipping: {
        marginTop: 10,
        color: '#FEFEFF',
        fontSize: 15,
        marginLeft: 20,
    },
    box4: {
        height: 69,
        width: 350,
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 5,
        marginTop: 13,
        borderColor: '#FEFEFF',
        borderRadius: 10,
    },
    Home: {
        marginLeft: 16,
        marginTop: 10,
        color: '#FEFEFF',
        // fontWeight: 'bold',
    },
    Home2: {
        marginLeft: 16,
        marginTop: 20,
        color: '#FEFEFF',
        // fontWeight: 'bold',
    },
    Home1: {
        marginLeft: -37,
        marginTop: 30,
        color: '#FEFEFF',
        fontSize: 14,
    },
    chooes: {
        height: 60,
        width: 330,
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 20,
        borderColor: '#FEFEFF',
        borderRadius: 10,
    },
    code: {
        color: '#FEFEFF',
        marginTop: 20,
        marginLeft: 10,
        // fontWeight: 'bold'
    },
    create: {
        backgroundColor: '#FEFEFF',
        marginLeft: 20,
        marginTop: 20,
        height: 50,
        width: 330,
        borderRadius: 7
    },
    payment: {
        // textAlign: 'center',
        marginLeft: 90,
        marginTop: 15,
        fontWeight: 'bold'
    },
    box5: {
        height: 100,
        // width: 340,
        marginLeft: 10,
        backgroundColor: '#111B23'
    },
    check: {
        color: '#FEFEFF',
        marginLeft: 10,
        marginTop: 10,
        borderBottomWidth: 2,
        borderColor: '#FEFEFF'
    },
    Total: {
        marginLeft: 10,
        color: '#FEFEFF',
        marginTop: 10,
    },
    backIconContainer: {
        position: 'absolute',
        top: 35,
        left: 10,
        zIndex: 1,
    },
    text3: {
        marginLeft: 130,
        marginTop: 10,
        color: '#FEFEFF'
    }
})
export default Checkout; 