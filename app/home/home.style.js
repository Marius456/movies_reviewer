import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.lightWhite, 
        justifyContent: 'center'
    },
    titleContainer: {
        width: "auto",
        height: "auto",
        alignSelf: 'center',
        justifyContent: 'center',
    },
    homeTitle: {
        fontWeight: 'bold'
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