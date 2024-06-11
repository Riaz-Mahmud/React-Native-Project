import React from "react";
import type { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";


type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): React.JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonFlag}>{props.flag}</Text>
            <Text style={styles.buttonCountry}>{props.name}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'center',
    },
    buttonFlag:{
        fontSize: 28,
        color: '#ffffff',
        marginBottom: 4,
    },
    buttonCountry:{
        fontSize: 14,
        color: '#2d3436',
    }
});

export default CurrencyButton;