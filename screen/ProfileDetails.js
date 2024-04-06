import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import ProfileImage from '../assets/setup.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';


const ProfileDetails = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [ID, setId] = useState(1);
  const [data, setData] = useState([]);
  const [profileDetails, setProfileDetails] = useState({
    Name: '',
    EmailId: '',
    Phonenumber: '',
  });

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleSave = () => {
    const newUser = {
      id: ID,
      ...profileDetails,
    };
    setData((prevData) => [...prevData, newUser]);
    setId(ID + 1);
    setProfileDetails({
      Name: '',
      EmailId: '',
      Phonenumber: '',
    });
    navigation.navigate('Profile', { name: newUser });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Profile</Text>
      <TouchableOpacity onPress={pickImage}>
        <Image source={image ? { uri: image } : ProfileImage} style={styles.profileImage} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#FEFEFF"
        value={profileDetails.Name}
        onChangeText={(text) => setProfileDetails({ ...profileDetails, Name: text })}
      />
      <Text style={styles.label}>Email Id</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter E-mail"
        placeholderTextColor="#FEFEFF"
        value={profileDetails.EmailId}
        onChangeText={(text) => setProfileDetails({ ...profileDetails, EmailId: text })}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone no"
        placeholderTextColor="#FEFEFF"
        value={profileDetails.Phonenumber}
        onChangeText={(text) => setProfileDetails({ ...profileDetails, Phonenumber: text })}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleSave}>
          <Text style={styles.buttonText1}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>Data:{JSON.stringify(item)}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07141F',
    flex: 1,
    padding: 20,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 90,
    alignSelf: 'center',
    marginBottom: 20,
  },
  separator: {
    borderBottomWidth: 2,
    borderColor: '#FEFEFF',
    marginBottom: 20,
  },
  label: {
    color: '#FEFEFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#122636',
    color: '#FEFEFF',
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#122636',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 170,
  },
  button1: {
    flex: 1,
    backgroundColor: '#FEFEFF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 170,
  },
  backIconContainer: {
    position: 'absolute',
    top: 35,
    left: 10,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonText1: {
    color: '#00000',
    textAlign: 'center',
  },
});

export default ProfileDetails;
