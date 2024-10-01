import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet, Platform } from "react-native";
import { primaryColor } from '../../includes/variable';

export default function Form({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(false);

    const handleSavePress = () => {
        onAddTask(title, status);

        setTitle('');
        setStatus(false);
    }


    return (
        <View style={styles.container}>
            <View style={styles.title.container}>
                <Text style={styles.title.label}>Add a new Task</Text>
            </View>

            <TextInput
                style={styles.textInput}
                placeholder='Enter the task title'
                value={title}
                onChangeText={setTitle}
            />
            <View style ={ styles.switch }>
            <Text style={styles.switchText}> Status: {status ? 'Done/true': 'Due/false'} </Text>
            </View>

            <Button disabled={title == ''} title='Save' color='#556B2F' onPress={handleSavePress} />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        container: {
            borderLeftWidth: 5,
            borderLeftColor: primaryColor,
            paddingLeft: 7,
            marginBottom: 10
        },
        label: {
            color: primaryColor,
            fontSize: 19,
            fontWeight: 'bold',
        }
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Platform.OS == 'ios' ? 10: 0,
        paddingBottom: 10,
        paddingTop: 10
    },
    switchText: {
        color: '#444',
        marginLeft: Platform.OS == 'ios' ? 10: 0
    }
});
