
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSkills } from '../redux/skillSlice';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
    const skills = useSelector(selectSkills);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>
                {skills.map((skill) => (
                    <View key={skill.id} style={styles.pill}>
                        <Text style={styles.pillText}>{skill.name}</Text>
                    </View>
                ))}
            </View>

            <CustomButton
                title="Add New"
                onPress={() => navigation.navigate('Create')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the pills
        marginBottom: 40,
        marginTop: 20,
    },
    pill: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc', // Gray border for pills
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        minWidth: 80,
        alignItems: 'center',
    },
    pillText: {
        color: '#333',
        fontSize: 14,
    },
});

export default HomeScreen;
