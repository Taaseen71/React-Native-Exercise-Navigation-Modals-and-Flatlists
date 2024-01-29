import { StyleSheet } from "react-native";

const globalStyle = (arg1, arg2, arg3, arg4) => StyleSheet.create({
    flex: {
        flex:arg1
    },
    flexDirection: {
        flexDirection: arg1,
        backgroundColor: arg2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
            flex: arg1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 12
    },
    darkMode: {
        color: 'white',
        backgroundColor: 'black'
    },
    TextInputComponent:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.2,
        borderRadius: 5,
        backgroundColor: 'lavender',
        padding: 10,
        minWidth: 200
    },


    borders: {
        borderWidth: 1,
        backgroundColor: arg1
    },
    bcolor: {
        backgroundColor: arg1,
    },

})

export default globalStyle;