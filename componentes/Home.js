import React from "react";
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Bem-vindo!</Text>
        <Image source={{uri: 'http://via.placeholder.com/150'}} style={styles.image}/>
        <Button title="Perfil" onPress={() => navigation.native('Perfil')}/>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
    image: { widht: 150, height: 150, marginTop:20 }
});