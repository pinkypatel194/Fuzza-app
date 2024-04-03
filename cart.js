import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import data from './data'; 
import arrow from './assets/back.png';
import discount from './assets/discount.png';
import freeDelivery from './assets/FreeDelivery.png';
import retrn1 from './assets/return.png';
import star from './assets/starr.png';

const ProductDetails = ({ route }) => {
  const { productId } = route.params;
  const product = data.items.find(item => item.id === productId);

  const renderRatingStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Image key={i} source={star} style={styles.starIcon} />);
      } else if (i - 0.5 === rating) {
        stars.push(<Image key={i} source={star} style={[styles.starIcon, { width: 15 }]} />);
      } else {
        stars.push(<Image key={i} source={star} style={[styles.starIcon, { opacity: 0.3 }]} />);
      }
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        {product && (
          <>
            <View style={styles.header}>
              <Image source={arrow} style={styles.arrowIcon} />
              <Text style={styles.heading}>{product.category}</Text>
            </View>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.divider}>-----------------------------------------------------</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Image source={discount} style={styles.discount} />
                <Text style={styles.discountPrice}>{product.discount} off</Text>
              </View>
              <View style={styles.ratingContainer}>{renderRatingStars(product.rating)}</View>
              <Text style={styles.reviews}>158 Reviews</Text>
              <Text style={styles.wrongPrice}>{product.wrongprice}</Text>
              <View style={styles.productNo}>
                <Text style={styles.decrement}>-</Text>
                <Text style={styles.productNumber}>1</Text>
                <Text style={styles.increment}>+</Text>
              </View>
              <Text style={styles.description}>{product.description}</Text>
              <TextInput
                style={styles.pincode}
                placeholder='Pincode'
                placeholderTextColor={'#FFFFFF'}
              />
              <Text style={styles.checkDelivery}>Check Delivery</Text>
              <View style={styles.servicesContainer}>
                <View style={styles.serviceItem}>
                  <Image source={freeDelivery} style={styles.serviceIcon} />
                  <Text style={styles.serviceText}>COD Available</Text>
                </View>
                <View style={styles.serviceItem}>
                  <Image source={retrn1} style={styles.serviceIcon} />
                  <Text style={styles.serviceText}>21 Days Return</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  discount: {
    marginLeft: 110,
    marginTop: 1,
  },
  discountPrice: {
    color: '#E93030',
    fontSize: 16,
    marginTop: 4,
    marginLeft: -52,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 2,
  },
  arrowIcon: {
    height: 30,
    width: 30,
    marginTop: 15,
    marginLeft: -180,
  },
  heading: {
    color: '#F5FCFF',
    fontSize: 19,
    textAlign: 'center',
    marginLeft: 15,
    marginTop: 19,
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 360,
    height: 260,
  },
  divider: {
    color: '#fff',
    fontSize: 25,
    marginTop: 1,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  productInfo: {
    flexDirection: 'row',
  },
  productName: {
    color: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop:-10,
    marginLeft: -2,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: -15,
  },
  reviews: {
    color: '#D9D9D9',
    fontSize: 16,
    marginTop: 2,
  },
  wrongPrice: {
    color: '#D9D9D9',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginTop: -5,
  },
  productNo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  decrement: {
    color: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  productNumber: {
    color: '#F5FCFF',
    fontSize: 20,
    marginHorizontal: 20,
  },
  increment: {
    color: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  description: {
    color: '#F5FCFF',
    fontSize: 12,
    marginTop: 10,
  },
  pincode: {
    borderWidth: 2,
    height: 45,
    width: '100%',
    borderRadius: 10,
    borderColor: '#B8BEC3',
    paddingLeft: 20,
    color: '#D9D9D9',
    marginTop: 10,
  },
  checkDelivery: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  serviceText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default ProductDetails;