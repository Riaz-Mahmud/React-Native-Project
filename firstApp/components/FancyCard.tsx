import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style= {styles.headingText}>Trending Places</Text>
            <View style= {[styles.card, styles.cardElecated]}>
                <Image
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                }}
                style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React</Text>
                    <Text style={styles.cardLabel}>JavaScript Library</Text>
                    <Text style={styles.cardDescription}>A JavaScript library for building user interfaces. Declarative, component-based and learn once, write anywhere. The most popular front-end library for building user interfaces. React makes it painless to create interactive UIs.</Text>
                    <Text style={styles.cardFooter}>Learn More</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    card:{
        width: '100%',
        marginEnd: 10,
        borderRadius: 6,
    },
    cardElecated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1,
        },
    },
    cardImage:{
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription:{
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter:{
        color: '#000000',
        marginBottom: 8,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
})