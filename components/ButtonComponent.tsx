import React from "react";
import {GestureResponderEvent, Pressable, Text} from "react-native";
import {styles} from "../styles/styles";

type ButtonProps = {
    label: string,
    onButtonPress: (event: GestureResponderEvent) => void;
};
export const ButtonComponent = (props: ButtonProps) => {
    return(
        <Pressable style={styles.button} onPress={props.onButtonPress}>
            <Text style={styles.buttonLabel}>{props.label}</Text>
        </Pressable>
    );
};