import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'lightWhite', 
        justifyContent: 'center'
    },
    titleContainer: {
        width: "auto",
        height: "auto",
        alignSelf: 'center',
        justifyContent: 'center',
    },
    homeTitle: {
        fontWeight: 500,
        fontSize: 32,
        padding: 40
    },
    homeBtn: {
        width: "40%",
        height: "auto",
        alignSelf: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        textAlign: 'center',
    },
    homeBtnText: {
        color: 'blue',
        fontWeight: 'bold'
    }
    
});

export default styles;