import { StyleSheet} from 'react-native';

const InfoCardStyle = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 1,
      margin: 2,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
    Image: {
      width: '100%',
      height: 200,
    },
  });

  export default InfoCardStyle


