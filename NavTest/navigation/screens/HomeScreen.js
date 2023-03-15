import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, BackHandler } from 'react-native';
import Navbar from '../../component/Navbar';
import Card from '../../component/card';

export default function HomeScreen({ route, navigation }) {
    const [pending, setPending] = useState(route.params.pending)
    const name = route.params
    console.log(pending, "\n")
    return (
        <View style={{ flex: 1 }}>
            <Navbar name={route.params.profile.name} id={route.params.profile.uid} post={route.params.profile.post} />
            <View style={{ flex: 1, padding: "5%", paddingTop: "15%", }}>
                <Text style={{ fontFamily: "Roboto", fontSize: 23, fontWeight: "bold" }}>Biometric Schedule</Text>
                <ScrollView>
                    {
                        pending.map((data) => {
                            { console.log(data._id) }
                            return <Card location={data.location} setPending={setPending} date={data.date} biometricTime={new Date(data.biometricTime)} key={data._id} cid={data._id}></Card>
                        })
                    }

                </ScrollView>
            </View>

        </View>
    );
}
