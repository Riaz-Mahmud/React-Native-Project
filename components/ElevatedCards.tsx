import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style = {styles.headingText}>
                ElevatedCards
            </Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style = {[styles.card, styles.cardElecated]}>
                    <Text>Tap</Text>
                </View>
                <View style = {[styles.card, styles.cardElecated]}>
                    <Text>Me</Text>
                </View>
                <View style = {[styles.card, styles.cardElecated]}>
                    <Text>to</Text>
                </View>
                <View style = {[styles.card, styles.cardElecated]}>
                    <Text>Scroll</Text>
                </View>
                <View style = {[styles.card, styles.cardElecated]}>
                    <Text>more..</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
        marginEnd: 0,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElecated:{
        backgroundColor: '#5DA3FA',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1,
        },
        shadowColor: '#EF5354',
        shadowOpacity: 0.5,
    }
})