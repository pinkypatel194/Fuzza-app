import React from 'react';
import { View, Text, StyleSheet, Image ,FlatList, Button} from 'react-native';

const ProductDetails = ({ route,navigation }) => {
    const { product } = route.params;
    console.log(product);
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: {product.price}</Text>
            <Text style={styles.description}>Discount: {product.discountPercentage}</Text>
            <Text style={styles.description}>Rating: {product.rating}</Text>
            <Text style={styles.description}>Stock: {product.stock}</Text>
            <Text style={styles.description}>Brand: {product.brand}</Text>
            <Text style={styles.description}>Category: {product.category}</Text>

            <Button 
                title=' Back '
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ecef',
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 200,
        margin: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});
export default ProductDetails;