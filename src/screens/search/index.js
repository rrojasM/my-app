import React from 'react';
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import Input from '../../components/input';
import styles from './styles';

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input />
        </SafeAreaView >
    )
}

export default React.memo(Search);
