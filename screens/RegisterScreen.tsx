import React from "react";
import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View} from "react-native";
import {styles} from "../styles/styles";
import {InputComponent} from "../components/InputComponent";
import {ButtonComponent} from "../components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";

export const RegisterScreen = () => {
    const navigation = useNavigation();
    const handleRegister = () => {

    };
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image
                    style={{ width: 150, height: 150, marginTop: 35 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/59bedb177a216d0b052f128a.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", margin: 20, }}>
                    <Text style={styles.textStyle}>Register Here!</Text>
                </View>
                <InputComponent label={"Username"} icon={"person"}/>
                <InputComponent label={"E-mail"} icon={"email"}/>
                <InputComponent label={"Password"} isPassword={true} icon={"lock"}/>
                <InputComponent label={"Confirm Password"} isPassword={true} icon={"lock"}/>
                <ButtonComponent label={"Register"} onButtonPress={handleRegister} />
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Have an account? Login
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}