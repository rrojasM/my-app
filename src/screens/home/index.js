import React from 'react';
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import styles from './styles';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Input pressable onPress={() => navigation.navigate('Search')} />
        </SafeAreaView >
    )
}

export default React.memo(Home);
