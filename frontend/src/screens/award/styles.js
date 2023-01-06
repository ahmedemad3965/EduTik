
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInput: {
        margin: 10,
        backgroundColor: 'lightgray',
        padding: 5,
        borderRadius: 4,
    },
    prizeContainer: {
        // padding: 16,
        // alignItems: 'center',
        backgroundColor: '#1da2c6',
        marginHorizontal: 16,
        borderRadius: 16,
        width: 300,
        height: 250,
      },
      prizeImage: {
        width: 300,
        height: 128,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginBottom: 16,
      },
      prizeName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
        textAlign: 'left',
        marginLeft: 20,
        
    },
    prizeDescription: {
        fontSize: 16,
        color: 'white',
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 16,
      },
      createAccountButton: {
        flexDirection: 'row',
        backgroundColor: '#1da2c6',
        color: 'white',
        borderRadius: 10,
        padding: 20,
    }
});

export default styles;