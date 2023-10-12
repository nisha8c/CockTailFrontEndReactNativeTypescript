import React, {useState} from "react";
import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, View} from "react-native";
import {styles} from "../styles/styles";
import {InputComponent} from "../components/InputComponent";
import {ButtonComponent} from "../components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: { data: any };
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export const LoginScreen = ({navigation}: { navigation: LoginScreenNavigationProp }) => {
    const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "kminchelle",
                password: "0lelplR",
                // expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log('Data: ', json);
                navigation.navigate("Main", {data: json});
            });
    };
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image
                    style={{ width: 150, height: 150, marginTop: 40 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/59bedb177a216d0b052f128a.png",
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