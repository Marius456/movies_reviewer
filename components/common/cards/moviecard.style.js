import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: (selectedMovie, item) => ({
        width: 250,
        padding: 24,
        backgroundColor: selectedMovie === item.id ? "#312651" : "#FFF",
        borderRadius: 16,
        justifyContent: "space-between",
        shadowColor: "#F3F4F8",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    }),

    imageContainer: (selectedMovie, item) => ({
        width: 200,
        height: 300,
        backgroundColor: selectedMovie === item.id ? "#FFF" : "#F3F4F8",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    }),

    movieImage: {
        width: "100%",
        height: "100%",
    },

    movieTitle: (selectedMovie, item) => ({
        fontSize: 16,
        color:  selectedMovie === item.id ? "#F3F4F8" : "#312651",
        marginTop: 12 / 1.5,
        flexWrap: 'wrap'
    }),
});

export default styles;