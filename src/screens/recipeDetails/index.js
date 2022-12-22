import React from 'react';
import { Image, SafeAreaView, View, Text, ScrollView } from 'react-native';
import Title from '../../components/title';
import styles from './styles';

const RecipeDetails = ({ route }) => {

    const { item } = route?.params || {};

    const nutrition = item?.nutrition;
    delete nutrition?.updated_at;
    const nutritionKeys = Object.keys(nutrition || {});

    const instructions = item?.instructions || [];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
                <Title style={{ marginBottom: 24 }} text={item?.name} />
                {
                    nutritionKeys?.map(key => (
                        <View key={key} style={styles.row}>
                            <Text style={styles.key}>{key}</Text>
                            <Text style={styles.value}>{nutrition[key]}</Text>
                        </View>
                    ))
                }

                <Title style={{ marginTop: 24, marginBottom: 8 }} text="Instructions" />

                {
                    instructions?.map((instruction, index) => (
                        <View key={instruction?.id} style={styles.instructionRow}>
                            <Text style={styles.index}>{index + 1}</Text>
                            <Text style={styles.instructionText}>{instruction?.display_text}</Text>
                        </View>
                    ))
                }

                {!instructions?.length ? (
                    <Text style={[styles.value, { marginTop: 10 }]}>No instructions found.</Text>
                ) : null}
            </ScrollView>
        </SafeAreaView >
    )
}

export default React.memo(RecipeDetails);
