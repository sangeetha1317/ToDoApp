import { Text, View, Switch } from "react-native";
import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../../includes/variable";
import { MaterialIcons } from '@expo/vector-icons';
export default function TaskItem({ id, title, status, onStatusChange, onTaskDelete }) {

    const handleDeletePress = () => {
        onTaskDelete(id);
    }

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.statusIdText}>Status: {status ? 'Done/true' : 'Due/false'}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.switch}>
                        <Switch
                            value={status}
                            onValueChange={(value) => onStatusChange(value, id)} />
                    </View>
                    <MaterialIcons.Button
                        name="delete"
                        size={24}
                        color={primaryColor}
                        backgroundColor='transparent'
                        underlayColor='#EEE8AA'
                        onPress={handleDeletePress}>
                    </MaterialIcons.Button>
                </View>
            </View>
        </View>
    )
}



const styles =  StyleSheet.create({ 
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal:10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColor
    },
    statusIdText: {
        fontSize: 14,
        paddingLeft: 5,
        color: secondaryColor
    },
    switch: {
        alignItems: 'center'
    },
    textContainer: {
        marginRight: 20,
        flex: 1
    }
});
