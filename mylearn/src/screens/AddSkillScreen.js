
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addSkill } from '../redux/skillSlice';
import CustomButton from '../components/CustomButton';

const AddSkillScreen = ({ navigation }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSave = () => {
        if (!id || !name) {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        const skillId = parseInt(id);
        if (isNaN(skillId)) {
            Alert.alert('Error', 'ID must be a number');
            return;
        }

        dispatch(addSkill({ id: skillId, name }));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="ID (e.g. 8)"
                    value={id}
                    onChangeText={setId}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Skill Name (e.g. Bootstrap)"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <CustomButton title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginBottom: 40,
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        fontSize: 18,
        marginBottom: 20,
        color: '#333',
    },
});

export default AddSkillScreen;
