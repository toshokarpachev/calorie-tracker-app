import { Modal, Text } from "react-native";

export default function AddMeal({
    visible,
}){
    return (
        <Modal visible={visible}>
            <Text>Add Meals</Text>
        </Modal>

    );
}