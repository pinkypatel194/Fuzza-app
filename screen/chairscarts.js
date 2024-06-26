import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import chair from '../assets/Chairs10.png'
import dotline from '../assets/dotline.png'
import discount from '../assets/discount.png'
import star from '../assets/starr.png'
import freeDelivery from '../assets/FreeDelivery.png'
import cod from '../assets/cod.png'
import retrn1 from '../assets/return.png'
import cart from '../assets/cart.png'
import reviwerspic from '../assets/reviewserpic.png'
const Chaircart = ({ navigation }) => {
    
    const [pincode, setPincode] = useState('');
    const [pincodeError, setPincodeError] = useState('');
    const [quantity, setQuantity] = useState(1);
    const handleCheckPincode = () => {
        if (pincode.trim().length !== 6) {
            setPincodeError('Please enter a valid 6-digit pincode');
        } else {
            setPincodeError('');
        }
    };
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleaddcart = () => {
        navigation.navigate('addcart')
    }

    return (
        <View style={styles.con}>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.heading}> Sofa </Text></View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={chair} style={styles.bedset} />
                    <Image source={chair} style={styles.bedset} />
                    <Image source={chair} style={styles.bedset} />
                    <Image source={chair} style={styles.bedset} />
                </ScrollView>
                <Image source={dotline} style={styles.dotline} />
                <View style={{ flexDirection: 'row' }}><Text style={styles.productname}>Modern round shape...</Text>
                    <Image source={discount} style={styles.discount} /><Text style={styles.discountprice}>20% OFF</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rating}>4.0</Text>
                    <Image source={star} style={styles.ratingstar} />
                    <Image source={star} style={styles.ratingstar} />
                    <Image source={star} style={styles.ratingstar} />
                    <Image source={star} style={styles.ratingstar} />
                    <Image source={star} style={styles.ratingstar} />
                    <Text style={styles.reviews}>158 Reviews</Text>
                </View>
                <View style={{ flexDirection: 'row' }}><Text style={styles.price}>$102.25</Text>
                    <Text style={styles.worngprice}>$120.00</Text></View>
                <View style={styles.productno}>
                    <TouchableOpacity onPress={decrementQuantity}>
                        <Text style={styles.dicrement}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.productnumber}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity}>
                        <Text style={styles.increment}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.descrpiton}>The buddy chair with modern comfort and durable</Text><Text style={styles.descrpitonpoint}>fabric.</Text>
                <Text style={styles.checkDelivery}>Check Delivery</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.pincode}
                        placeholder="Pincode"
                        placeholderTextColor={'#FFFFFF'}
                        onChangeText={(text) => setPincode(text)}
                        value={pincode}
                    />
                    <Text
                        style={styles.checkbox}
                        onPress={handleCheckPincode}>Check
                    </Text>
                </View>
                {pincodeError ? <Text style={styles.error}>{pincodeError}</Text> : null}
                <View>
                    <View style={styles.service}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={freeDelivery} style={{ marginTop: 20, marginLeft: 10 }} />
                            <Text style={styles.servicefree}>Free</Text>
                            <Text style={styles.servicedelivery}>Delivery</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={cod} style={{ marginTop: 20, marginLeft: 20 }} />
                            <Text style={styles.servicefree}>COD</Text>
                            <Text style={styles.servicedelivery}>Available</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={retrn1} style={{ marginTop: 20, marginLeft: 20 }} />
                            <Text style={styles.servicefree}>21 days</Text>
                            <Text style={styles.servicedelivery1}>return</Text>
                        </View>
                    </View>
                    <Text style={styles.Details}>Details</Text>
                    <View style={styles.detalis1}>
                        <Text style={styles.Detailsline1}>This product is eligible for returns and size</Text>
                        <Text style={styles.Detailsline2}> replacements. Please initiate the return from the </Text>
                        <Text style={styles.Detailsline3}> “My Orders” section ...Read More </Text>
                    </View>
                    <View style={styles.addcart} >
                        <TouchableOpacity onPress={() => handleaddcart()}>
                            <Image source={cart} style={{ marginLeft: 10, marginTop: 18, height: 20, width: 25 }} />
                        </TouchableOpacity>
                        <Text style={styles.addtocart} onPress={() => handleaddcart()}>Add To Cart</Text>
                        <Text style={styles.addtocartprice}>$102.25</Text>
                    </View>
                    <Text style={styles.reviewscount}>430 Reviews</Text>
                    <View style={styles.reviwescommnet}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={reviwerspic} style={{ height: 50, width: 50, marginTop: 20, marginLeft: 15 }} />
                            <Text style={styles.reviwersname}>Rina Jones</Text>
                            <Image source={star} style={{ height: 15, width: 15, marginTop: 25, marginLeft: 130 }} />
                            <Text style={styles.starrating}>4.0</Text>
                        </View>
                        <Text style={styles.seenmsg}>Just Now</Text>
                        <Text style={styles.comment}>I adore this item. Just fantastic!! they create the </Text>
                        <Text style={styles.comment1}>actual seen in the picture !!</Text>
                    </View>
                </View>
                <View style={styles.reviwescommnet}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={reviwerspic} style={{ height: 50, width: 50, marginTop: 20, marginLeft: 15 }} />
                        <Text style={styles.reviwersname}>Smith Williams</Text>
                        <Image source={star} style={{ height: 15, width: 15, marginTop: 25, marginLeft: 110 }} />
                        <Text style={styles.starrating}>4.0</Text>
                    </View>
                    <Text style={styles.seenmsg}>1 min ago</Text>
                    <Text style={styles.comment}>The best product quality.! It's amazing, Love it...!! </Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#122636'
    },
    heading: {
        color: "#F5FCFF",
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 160,
        marginTop: 45
    },
    arrowicon: {
        height: 24,
        width: 24,
        marginLeft: 16,
        marginTop: 40,
        fontWeight: 'bold'
    },
    bedset: {
        height: 250,
        width: 250,
        marginLeft: 15,
        marginTop: 20
    },
    dotline: {
        marginTop: 10
    },
    productname: {
        color: "#F5FCFF",
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10
    },
    discount: {
        marginLeft: 125,
        marginTop: 20
    },
    discountprice: {
        marginLeft: -55,
        marginTop: 24,
        color: '#E93030',
        fontSize: 12
    },
    rating: {
        color: '#D9D9D9',
        fontSize: 12,
        marginLeft: 10
    },
    ratingstar: {
        height: 13,
        width: 13,
        marginLeft: 2,
        marginTop: 2
    },
    reviews: {
        color: '#D9D9D9',
        fontSize: 12,
        marginLeft: 5
    }, price: {
        color: '#F5FCFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10
    },
    worngprice: {
        fontSize: 12,
        marginTop: 25,
        marginLeft: 14,
        color: '#D9D9D9',
        textDecorationLine: 'line-through'
    },
    productno: {
        height: 50,
        width: 150,
        marginLeft: 202,
        borderRadius: 10,
        backgroundColor: '#07141F',
        flexDirection: 'row'
    },
    dicrement: {
        fontSize: 25,
        color: "#F5FCFF",
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        lineHeight: 30
    },
    productnumber: {
        marginTop: 10,
        marginLeft: 30,
        fontSize: 20,
        color: '#F5FCFF',
    },
    increment: {
        marginTop: 10,
        marginLeft: 30,
        color: "#F5FCFF",
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 30
    },
    descrpiton: {
        color: "#FFFFFF",
        fontSize: 12,
        marginLeft: 10,
        marginTop: 15
    },
    descrpitonpoint: {
        color: "#FFFFFF",
        fontSize: 12,
        marginLeft: 10,
        marginTop: 2
    },
    checkDelivery: {
        color: "#FFFFFF",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20
    },
    error: {
        color: 'red',
        marginLeft: 10,
        marginTop: 5
    },
    pincode: {
        borderWidth: 2,
        height: 45,
        width: 330,
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#B8BEC3',
        paddingLeft: 20,
        color: '#D9D9D9'
    },
    checkbox: {
        height: 41,
        width: 70,
        marginLeft: -72,
        marginTop: 22,
        backgroundColor: '#B8BEC3',
        borderRadius: 2,
        paddingTop: 10,
        paddingLeft: 15
    },
    service: {
        height: 70, width: 330,
        marginLeft: 10,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#07141F',
        flexDirection: 'row'
    },
    servicefree: {
        marginTop: 20,
        marginLeft: 10,
        color: "#FFFFFF",
        fontSize: 12
    },
    servicedelivery: {
        marginTop: 35,
        marginLeft: -23,
        color: "#FFFFFF",
        fontSize: 12
    },
    servicedelivery1: {
        marginTop: 35,
        marginLeft: -40,
        color: "#FFFFFF",
        fontSize: 12
    }, Details: {
        color: "#F5FCFF",
        fontSize: 15,
        marginTop: 20,
        marginLeft: 10
    }, detalis1: {
        height: 100,
        width: 330,
        marginLeft: 10,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#07141F',
        flexDirection: 'row'
    }, Detailsline1: {
        color: '#D9D9D9',
        marginTop: 10, marginLeft: 18
    }, Detailsline2: {
        color: '#D9D9D9',
        marginTop: 35, marginLeft: -266
    }, Detailsline3: {
        color: '#D9D9D9',
        marginTop: 60, marginLeft: -310
    }, addcart: {
        height: 55,
        width: 330,
        marginLeft: 10,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    }, addtocart: {
        marginLeft: 10, marginTop: 18, color: '#000000', fontSize: 16
    }, addtocartprice: {
        marginLeft: 120, marginTop: 18, color: '#000000', fontSize: 16, fontWeight: "bold"
    },
    reviewscount: {
        color: '#FFFFFF',
        marginTop: 20,
        marginLeft: 10,
        fontSize: 15
    },
    reviwescommnet: {
        height: 125,
        width: 330,
        marginLeft: 10,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#07141F',

    }, reviwersname: {
        color: '#F5FCFF',
        fontSize: 14,
        marginTop: 23,
        marginLeft: 10
    }, starrating: {
        color: "#D9D9D9",
        fontSize: 13,
        marginLeft: 10, marginTop: 23
    }, seenmsg: {
        color: '#9BA3AA',
        fontSize: 12, marginLeft: 75, marginTop: -25
    }, comment: {
        color: '#F5FCFF',
        fontSize: 12, marginLeft: 20, marginTop: 20
    }, comment1: {
        color: '#F5FCFF',
        fontSize: 12, marginLeft: 20, marginTop: 2
    },
})
export default Chaircart