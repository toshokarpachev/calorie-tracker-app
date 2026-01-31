import { View, Text,TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native/icons";
import { styles } from "../../styles";


export default function MealSection () {
    return (
        <View style={[styles.section, styles.mealSection]}>
          <Text>Meals</Text>
          <TouchableOpacity
          hitSlop={10} 
          onPress={() => null}>
            <Plus/>
          </TouchableOpacity>

        </View>
    );
}