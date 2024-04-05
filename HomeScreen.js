import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState();
    useEffect(() => {
        getProductData();
    }, []);
    const getProductData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setData(response.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text>ID: {item.id}</Text>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text>Title: {item.title}</Text>
            <Text>Price: {item.price}</Text>
            <Button title='More Details' onPress={() => navigation.navigate('ProductDetails', { product: item })}/>
        </View>
    );
    return (
        <ScrollView>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    thumbnail: {
        width: 300,
        height: 230,
        marginBottom: 10,
    },
});
export default HomeScreen;