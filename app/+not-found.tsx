import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (<>
        <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
        <View
            style={styles.container}
        >
        </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#25292e", flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white"
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff"
    }
});