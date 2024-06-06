import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elecatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's New in React 18?
                    </Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-d85625b/www.ciat.edu/wp-content/uploads/2022/10/react-logo.svg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={8}>
                        React 18 is the latest version of React. It comes with a lot of new features and improvements. Some of the key features include:
                        1. Automatic batching of updates
                        2. New APIs for working with concurrent mode
                        3. Improved server-side rendering
                        4. New JSX transform
                        5. New React events
                        6. New React DevTools
                        7. Improved performance
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://reactjs.org/blog/2022/10/20/react-18.html')}
                    >
                        <Text style={styles.socialLinks}>
                            Read More...
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    elecatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height: 100,
    },
    bodyContainer:{},
    footerContainer:{},
    socialLinks:{},
})