import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {styles} from "../styles/styles";
import {MaterialIcons} from "@expo/vector-icons";

type InputProps = {
    label: string,
    isPassword?: boolean,
    icon: string

};

export const InputComponent = (props: InputProps) => {
    const [text, setText] = useState('');
    return(
        <View style={{ marginTop: 10 }}>
            <View style={styles.container}
            >
                <MaterialIcons
                    style={{ marginLeft: 8 }}
                    name={props.icon as any}
                    size={24}
                    color="gray"
                />

                <TextInput
                    value={text}
                    onChangeText={(text) => setText(text)}
                    style={styles.inputStyle}
                    placeholder={props.label}
                    secureTextEntry={props.isPassword}
                    accessibilityLabel={props.label}
                />
            </View>
        </View>

    );
};


