import { View, Text,TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native/icons";
import { styles } from "../../styles";


export default function MealSection ({
    onAddMeal,
}) {
    return (
        <View style={[styles.section, styles.mealSection]}>
          <Text>Meals</Text>
          <TouchableOpacity
          hitSlop={10} 
          onPress={onAddMeal}>
            <Plus/>
          </TouchableOpacity>

        </View>
    );
}