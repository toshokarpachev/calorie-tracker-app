import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, Plus } from 'lucide-react-native';
import { styles } from './styles';
import MealSection from './components/meal-section/MealSection';
import AddMeal from './components/add-meal/AddMeal';
import { useState } from 'react';


export default function App() {

  const [showAddMeal, setShowAddMeal] = useState(false);
  const addMealPressHandler = () => {
    setShowAddMeal(true);

  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header*/}
        <View style={[styles.endSection, styles.header]}>
          <Text style={styles.heading}>Calorie Tracker</Text>

        </View>

        {/* Overview*/}
        <View style={styles.section}>
          <Text>Calorie Overview</Text>

        </View>
        {/* Meal Section */}
        <MealSection onAddMeal={addMealPressHandler} />

        {/* Add Meal Modal */}
        {showAddMeal && <AddMeal onClose = {() => setShowAddMeal(false)}/>}
        {/*<AddMeal visible={showAddMeal} />*/}

        {/* App Bar */}
        <View style={styles.endSection}>
          <Home />
          <TouchableOpacity onPress={addMealPressHandler}>
            <Plus />
          </TouchableOpacity>
          

        </View>


        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


