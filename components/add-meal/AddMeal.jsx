import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddMeal({
    visible,
    onClose,
}) {
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            transparent
        >

            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text>Add Meals</Text>
                    <View>
                        <Text>Food Name</Text>
                        <TextInput placeholder="e.g. Pizza slace" />
                    </View>
                    <View>
                        <Text>Calories</Text>
                        <TextInput placeholder="0" keyboardType='number-pad'/>
                    </View>
                    <View>
                        <Button title="Back"/>
                        <Button title="Add" />
                    </View>
                </View>
            </View>

        </Modal>

    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        justifyContent: 'space-between'
    },
})