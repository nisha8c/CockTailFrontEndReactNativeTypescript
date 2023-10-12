import React from "react";
import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View} from "react-native";
import {styles} from "../styles/styles";
import {InputComponent} from "../components/InputComponent";
import {ButtonComponent} from "../components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";

export const LoginScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {

    };
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image
                    style={{ width: 150, height: 150, marginTop: 40 }}
                    source={{
                        uri: "https://assets.stickpng.com/images/58443ca6a6515b1e0ad75b7a.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", margin: 20, }}>
                    <Text style={styles.textStyle}>Login Here!</Text>
                </View>
                <InputComponent label={"E-mail"} icon={"email"}/>
                <InputComponent label={"Password"} isPassword={true} icon={"lock"}/>
                <ButtonComponent label={"Login"} onButtonPress={handleLogin} />
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}