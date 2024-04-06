import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import searchIcon from '../assets/search.png';
// import arrow from '../assets/arrowRight.png';
import data from '../data';

const categoryImages = {
    "Sofas": require('../assets/sofa1.png'),
    "Dining Tables": require('../assets/DiningTables.png'),
    "Chairs": require('../assets/Chairs.png'),
    "Bookshelves": require('../assets/Bookshelves1.png'),
    "Coffee Tables": require('../assets/CoffeeTables.png'),
    "Beds": require('../assets/Beds.png'),
    "Lamps": require('../assets/Lamps7.png'),
    "Outdoor Furniture": require('../assets/OutdoorFurniture.png'),
    "Bar Stools": require('../assets/BarStools.png'),
    "Shelves": require('../assets/Shelves.png'),
    "Bar Tables": require('../assets/BarTables.png'),
    "Coat Racks": require('../assets/CoatRacks.png'),
    "Armchairs": require('../assets/Armchairs.png'),
    "Desks": require('../assets/Desks.png'),
    "Lighting": require('../assets/Lighting.png'),
    "Ottomans": require('../assets/Ottomans.png'),
    "Mirrors": require('../assets/Mirrors.png'),
    "Sideboards": require('../assets/Sideboards.png'),
    "Benches": require('../assets/Benches.png'),
    "Loveseats": require('../assets/Loveseats.png'),
    "Kitchen Islands": require('../assets/KitchenIslands.png'),
    "Office Chairs": require('../assets/OfficeChairs.png'),
    "TV Stands": require('../assets/TVStands.png'),
    "Bar Carts": require('../assets/BarCarts.png'),
    "Decor": require('../assets/Decor.png'),
    "Chaise Lounges": require('../assets/ChaiseLounges.png'),
    "Bar Cabinets": require('../assets/BarCabinets.png'),
    "Wall Art": require('../assets/WallArt.png'),
    "End Tables": require('../assets/EndTables.png'),
    "Wine Cabinets": require('../assets/WineCabinets.png'),
    "Tables": require('../assets/Tables.png'),
    "Console Tables": require('../assets/ConsoleTables.png'),
    "Dining Benches": require('../assets/DiningBenches1.png'),
};

export default function CategoriesScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showNotification, setShowNotification] = useState(true);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = Object.keys(categoryImages).filter(category =>
            category.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };
    const handleBack = () => {
        navigation.goBack();
    };

    const renderCategoryItem = ({ item }) => {
        let imageStyle = styles.categoryItemImage;
        if (item === "Sofas") {
            imageStyle = [styles.categoryItemImage, styles.sofaImage];
        } else if (item === "Dining Tables") {
            imageStyle = [styles.categoryItemImage, styles.diningTableImage];
        } else if (item === "Chairs") {
            imageStyle = [styles.categoryItemImage, styles.ChairsImage];
        } else if (item === "Bookshelves") {
            imageStyle = [styles.categoryItemImage, styles.BookshelvesImage];
        } else if (item === "Coffee Tables") {
            imageStyle = [styles.categoryItemImage, styles.CoffeeTablesImage];
        } else if (item === "Beds") {
            imageStyle = [styles.categoryItemImage, styles.BedsImage];
        } else if (item === "Lamps") {
            imageStyle = [styles.categoryItemImage, styles.LampsImage];
        } else if (item === "Outdoor Furniture") {
            imageStyle = [styles.categoryItemImage, styles.OutdoorFurnitureImage];
        } else if (item === "Bar Stools") {
            imageStyle = [styles.categoryItemImage, styles.BarStoolsImage];
        } else if (item === "Shelves") {
            imageStyle = [styles.categoryItemImage, styles.ShelvesStoolsImage];
        } else if (item === "Bar Tables") {
            imageStyle = [styles.categoryItemImage, styles.BarTablesImage];
        } else if (item === "Coat Racks") {
            imageStyle = [styles.categoryItemImage, styles.CoatRacksImage];
        } else if (item === "Armchairs") {
            imageStyle = [styles.categoryItemImage, styles.ArmchairsImage];
        } else if (item === "Desks") {
            imageStyle = [styles.categoryItemImage, styles.DesksImage];
        } else if (item === "Lighting") {
            imageStyle = [styles.categoryItemImage, styles.LightingImage];
        } else if (item === "Ottomans") {
            imageStyle = [styles.categoryItemImage, styles.OttomansImage];
        } else if (item === "Mirrors") {
            imageStyle = [styles.categoryItemImage, styles.MirrorsImage];
        } else if (item === "Sideboards") {
            imageStyle = [styles.categoryItemImage, styles.SideboardsImage];
        } else if (item === "Benches") {
            imageStyle = [styles.categoryItemImage, styles.BenchesImage];
        } else if (item === "Loveseats") {
            imageStyle = [styles.categoryItemImage, styles.LoveseatsImage];
        } else if (item === "Kitchen Islands") {
            imageStyle = [styles.categoryItemImage, styles.KitchenIslandsImage];
        } else if (item === "Office Chairs") {
            imageStyle = [styles.categoryItemImage, styles.OfficeChairsImage];
        } else if (item === "TV Stands") {
            imageStyle = [styles.categoryItemImage, styles.TVStandsImage];
        } else if (item === "Bar Carts") {
            imageStyle = [styles.categoryItemImage, styles.BarCartsImage];
        } else if (item === "Decor") {
            imageStyle = [styles.categoryItemImage, styles.DecorImage];
        } else if (item === "Chaise Lounges") {
            imageStyle = [styles.categoryItemImage, styles.ChaiseLoungesImage];
        } else if (item === "Bar Cabinets") {
            imageStyle = [styles.categoryItemImage, styles.BarCabinetsImage];
        } else if (item === "Wall Art") {
            imageStyle = [styles.categoryItemImage, styles.WallArtImage];
        } else if (item === "Accent Chairs") {
            imageStyle = [styles.categoryItemImage, styles.AccentChairsImage];
        } else if (item === "End Tables") {
            imageStyle = [styles.categoryItemImage, styles.EndTablesImage];
        } else if (item === "Wine Cabinets") {
            imageStyle = [styles.categoryItemImage, styles.WineCabinetsImage];
        } else if (item === "Tables") {
            imageStyle = [styles.categoryItemImage, styles.TablesImage];
        } else if (item === "Console Tables") {
            imageStyle = [styles.categoryItemImage, styles.ConsoleTablesImage];
        } else if (item === "Dining Benches") {
            imageStyle = [styles.categoryItemImage, styles.DiningBenchesImage];
        } else if (item === "Bookcases") {
            imageStyle = [styles.categoryItemImage, styles.BookcasesImage];
        }
        return (
            <TouchableOpacity
                style={styles.categoryItemContainer}
                onPress={() => navigation.navigate('CategoryDetails', { category: item })}
            >
                <Text style={styles.categoryItemText}>{item}</Text>
                <Image
                    source={categoryImages[item]}
                    resizeMode="cover"
                    style={imageStyle}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIconContainer} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.sectionStyle}>
                <Image
                    source={searchIcon}
                    style={styles.imageStyle}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search categories"
                    placeholderTextColor='#ffffff'
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            {showNotification && (
                <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate('Notification')}>
                    <View style={styles.notificationIconContainer}>
                        <Ionicons name="notifications" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            )}
            <FlatList
                data={filteredData.length === 0 ? Object.keys(categoryImages) : filteredData}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07141F',
    },
    title: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        marginTop: 32,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
    },
    categoryItemContainer: {
        backgroundColor: '#122636',
        height: 160,
        width: 280,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    categoryItemText: {
        fontSize: 20,
        color: 'white',
        height: 100,
        textAlign: 'center',
        padding: 10,
    },
    notificationContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#07141F',
    },
    title: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        marginTop: 32,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    backIconContainer: {
        position: 'absolute',
        top: 35,
        left: 10,
        zIndex: 1,
    },
    searchInput: {
        width: '80%',
        height: 40,
        color: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    categoryItemContainer: {
        backgroundColor: '#122636',
        height: 160,
        width: 280,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    categoryItemImage: {
        width: 100,
        margin: 30,
    },
    categoryItemText: {
        fontSize: 20,
        color: 'white',
        height: 100,
        padding: 10,
    },
    sofaImage: {
        width: 180,
        height: 180,
        marginLeft: 100,
    },
    diningTableImage: {
        width: 190,
        height: 100,
    },
    ChairsImage: {
        width: 200,
        height: 170,
        marginLeft: 90,
    },
    BookshelvesImage: {
        width: 200,
        marginLeft: 40,
        height: 160,
    },
    CoffeeTablesImage: {
        width: 170,
        height: 120,
        marginLeft: 40,
    },
    notificationContainer: {
        position: 'absolute',
        top: 30,
        right: 25,
    },
    notificationIconContainer: {
        backgroundColor: '#122636',
        borderRadius: 20,
        width: 35,
        borderColor: '#1C2F3D',
        borderWidth: 2.5,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BedsImage: {
        width: 200,
        height: 150,
        marginLeft: 90,
    },
    LampsImage: {
        width: 200,
        marginLeft: 90,
        height: 140,
    },
    OutdoorFurnitureImage: {
        width: 150,
        height: 200,
        marginLeft: 20,
    },
    BarStoolsImage: {
        width: 200,
        height: 150,
    },
    ShelvesStoolsImage: {
        width: 150,
        height: 200,
        marginLeft: 100,
    },
    BarTablesImage: {
        width: 150,
        height: 150,
        marginLeft: 90,
    },
    CoatRacksImage: {
        width: 120,
        height: 150,
        marginLeft: 90,
    },
    ArmchairsImage: {
        width: 160,
        height: 180,
        marginBottom: 60,
        marginLeft: 70,
    },
    DesksImage: {
        width: 200,
        height: 190,
        marginLeft: 90,
    },
    LightingImage: {
        width: 100,
        height: 140,
        marginLeft: 130,
    },
    OttomansImage: {
        height: 140,
        width: 130,
        marginLeft: 100,
    },
    MirrorsImage: {
        height: 160,
        width: 140,
        marginLeft: 120,
    },
    SideboardsImage: {
        height: 200,
        width: 200,
        marginLeft: 50,
        marginBottom: 40,
    },
    BenchesImage: {
        height: 200,
        width: 180,
        marginLeft: 80,
    },
    LoveseatsImage: {
        height: 120,
        width: 210,
        marginLeft: 50,
        marginBottom: 50,
    },
    KitchenIslandsImage: {
        height: 150,
        width: 170,
        marginLeft: 30,
        marginBottom: 40,
    },
    OfficeChairsImage: {
        height: 200,
        width: 100,
        marginLeft: 90,
        marginBottom: 40,
    },
    TVStandsImage: {
        height: 140,
        width: 150,
        marginLeft: 90,
    },
    BarCartsImage: {
        height: 160,
        width: 150,
        marginLeft: 90,
    },
    DecorImage: {
        height: 140,
        width: 110,
        marginLeft: 120,
    },
    ChaiseLoungesImage: {
        height: 140,
        width: 170,
        marginLeft: 20,
    },
    BarCabinetsImage: {
        height: 160,
        width: 120,
        marginLeft: 80,
    },
    WallArtImage: {
        height: 170,
        width: 120,
        marginLeft: 130,
    },
    EndTablesImage: {
        height: 160,
        width: 160,
        marginLeft: 80,
    },
    WineCabinetsImage: {
        height: 150,
        width: 150,
        marginLeft: 50,
    },
    TablesImage: {
        height: 160,
        width: 170,
        marginLeft: 90,
        marginBottom: 40,
    },
    ConsoleTablesImage: {
        height: 170,
        width: 170,
        marginLeft: 30,
        marginBottom: 60,
    },
    DiningBenchesImage: {
        height: 180,
        width: 200,
        marginLeft: 20,
        marginBottom: 30,
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#192D3C',
        height: 40,
        borderRadius: 5,
        marginLeft: 3,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});
