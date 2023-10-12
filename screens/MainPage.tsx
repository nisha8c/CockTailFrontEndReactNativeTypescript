import React from "react";
import {Image, Pressable, SafeAreaView, Text, View} from "react-native";
import {RouteProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
    Main: { data: any };
};

type MainPageRouteProp = RouteProp<RootStackParamList, 'Main'>;

export const MainPage = ({route}: { route: MainPageRouteProp }) => {
    const navigation = useNavigation();
    const {data} = route.params;
    return(
        <SafeAreaView>
            <Text>Welcome {data.firstName} {data.lastName}</Text>
            <View>
                <Image
                    style={{ width: 150, height: 150, marginTop: 40 }}
                    source={{
                        uri: data.image,
                    }}
                />
            </View>
            <Pressable
                onPress={() => navigation.navigate("AllProducts")}
                style={{ marginTop: 15 }}
            >
                <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                    Shop Here!
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};