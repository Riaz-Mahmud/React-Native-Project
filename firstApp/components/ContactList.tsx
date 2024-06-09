import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            status: 'Just an extra ordinary techer',
            imageUrl: 'https://avatars.githubusercontent.com/u/58476836?v=4',
        },
        {
            uid: 2,
            name: 'Kajal Agarwal',
            status: 'Actress',
            imageUrl: 'https://avatars.githubusercontent.com/u/58476836?v=4',
        },
        {
            uid: 3,
            name: 'Samantha',
            status: 'Actress',
            imageUrl: 'https://avatars.githubusercontent.com/u/58476836?v=4',
        },
        {
            uid: 4,
            name: 'Nayanthara',
            status: 'Actress',
            imageUrl: 'https://avatars.githubusercontent.com/u/58476836?v=4',
        },
        {
            uid: 5,
            name: 'Thalapathy Vijay',
            status: 'Actor',
            imageUrl: 'https://avatars.githubusercontent.com/u/58476836?v=4',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>

                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 0,
    },
    container: {
        paddingHorizontal: 6,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 6,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 12,
        color: '#FFF',
    },
})