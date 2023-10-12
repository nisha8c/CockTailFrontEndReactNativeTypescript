import React, {useEffect} from "react";
import {SafeAreaView, Text} from "react-native";

export const AllCockTails = () => {
    const getAllCocktails = async () => {
        try {
            const cocktails = await fetch("")
                .then(res => res.json())
                .then(json => console.log(json));
        } catch (e: any) {
            console.log("Exception during getAllCocktails: ", e.message);
        }
    };

    useEffect(() => {
        getAllCocktails();
    }, []);
    return(
        <SafeAreaView>
            <Text>Products</Text>
        </SafeAreaView>
    );
};