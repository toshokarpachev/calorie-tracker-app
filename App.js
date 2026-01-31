import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, Plus } from 'lucide-react-native';


export default function App() {
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
        <View style={styles.section}>
          <Text>List of Meals</Text>

        </View>
        {/* App Bar */}
        <View style={styles.endSection}> 
          <Home/>
          <Plus/>

        </View>


        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const colors = {
  white: '#fff',
  background:  '#dedede',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  section: {
     boxShadow: [{offsetX:5, offsetY:5, blurRadius:10, color:'#0005'}],

    backgroundColor: colors.white,
    borderColor: '#a7a7a7',
    borderStyle: 'solid',
    borderRadius:10,
    borderWidth: 1,
    width:'90%',
    padding: 20,

  },

  header: {
   
   
  },
  heading: {
    textAlign:'center',
    fontSize:26,
    fontWeight:'bold',
  },
  endSection: {
    width:'100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderTopColor: '#a7a7a7',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical:20
    

  }
});
