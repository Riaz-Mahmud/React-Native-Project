import { 
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        ToastAndroid.show('Opening Website...', ToastAndroid.SHORT)
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
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={10} style={styles.bodyText} >
                        React 18 is the latest version of React. It comes with a lot of new features and improvements. Some of the key features include:
                        {"\n"}
                        1. Automatic batching of updates
                        {"\n"}
                        2. New APIs for working with concurrent mode
                        {"\n"}
                        3. Improved server-side rendering
                        {"\n"}
                        4. New JSX transform
                        {"\n"}
                        5. New React events
                        {"\n"}
                        6. New React DevTools
                        {"\n"}
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
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    card: {
        width: '100%',
        borderRadius: 6,
    },
    elecatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',

    },
    cardImage: {
        height: 190,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyContainer: {
        padding: 10,
    },
    bodyText: {
        fontSize: 14,
        color: '#000000',
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
    },
})