import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Input = ({ showSearchIcon, placeholder, pressable, onPress, style }) => {

    const renderInput = () => (
        <View style={[styles.container, style]}>
            {
                showSearchIcon ? (
                    <Image style={styles.icon} source={require('../../../assets/search.png')} />
                ) : null
            }
            <TextInput editable={!pressable} placeholderTextColor={colors.lightGrey} style={styles.input} placeholder={placeholder} />
        </View>
    )

    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
    return renderInput();
}

Input.defaultProps = {
    placeholder: 'Search recipe',
    showSearchIcon: true
}

export default React.memo(Input);