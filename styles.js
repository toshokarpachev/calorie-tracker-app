import { StyleSheet } from 'react-native';

export const colors = {
  white: '#fff',
  background: '#dedede',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  section: {
    boxShadow: [{ offsetX: 5, offsetY: 5, blurRadius: 10, color: '#0005' }],

    backgroundColor: colors.white,
    borderColor: '#a7a7a7',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    padding: 20,

  },

  header: {


  },
  heading: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  mealSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  endSection: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderTopColor: '#a7a7a7',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20


  }
});