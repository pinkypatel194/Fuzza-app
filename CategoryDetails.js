import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import data from './data';
import { useNavigation } from '@react-navigation/native';

const CategoryDetails = ({ route }) => {
    const navigation = useNavigation();
    const { category } = route.params;
    const filteredProducts = data.items.filter(item => item.category === category);
    
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleProductClick(item.id)}>
            <View style={styles.box}>
                <View style={styles.box3}>
                    <Image source={item.image} style={styles.productImage} />
                </View>
                <Text style={styles.Text}>{item.name}</Text>
                <Text style={styles.Text2}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleProductClick = (productId) => {
        navigation.navigate('ProductDetails', { productId });
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.Chairs}>{category} Products</Text>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07141F',
    },
    Chairs: {
        color: 'white',
        fontSize: 15,
        padding: 15,
        marginTop: 20,
        marginLeft: 120,
    },
    box: {
        marginTop: 10,
        width: 180,
        height: 230,
        backgroundColor: '#122636',
        margin: 3,
        borderRadius: 10,
        marginLeft: 7,
        borderColor: '#707070',
    },
    box3: {
        width: 155,
        height: 145,
        backgroundColor: '#1F303E',
        padding: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    Text: {
        color: '#FEFEFF',
        fontSize: 12,
        padding: 10,
        fontWeight: 'bold',
    },
    Text2: {
        fontSize: 12,
        marginLeft: 10,
        marginTop:-8,
        color: '#FEFEFF',
    },
    productImage: {
        width: 120,
        height: 120,
        margin: 0,
        padding: 10,
    },
    flatListContainer: {
        paddingBottom: 20,
    },
});

export default CategoryDetails;