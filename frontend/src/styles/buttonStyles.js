import { StyleSheet } from "react-native";
const buttonStyles = StyleSheet.create({
    grayOutlinedButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    grayOutlinedIconButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10
    },
    filledButton: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: '#f9d264'
    },
    filledButtonText: {
        color: 'white',
        fontWeight: '700'
    },
    grayOutlinedButtonText: {
        fontFamily: 'Colton-Semi-Bold',
        color: 'black',
        // fontWeight: '700'
    },
});

export default buttonStyles;