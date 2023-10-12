import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        lineHeight: 15,
        letterSpacing: 1.5,
        marginBottom: 5,
        marginTop: 30,
    },

    inputStyle: {
        color: "gray",
        marginVertical: 10,
        width: 300,
        fontSize: 16,
    },

    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,

    },

    button: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        marginTop: 40,
    },

    buttonLabel: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});