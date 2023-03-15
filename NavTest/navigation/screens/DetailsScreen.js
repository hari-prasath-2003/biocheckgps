import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react'
import { ScrollView, View, Text, RefreshControl } from 'react-native';
import CardHistory from '../../component/cardHistory';

export default function DetailsScreen({ route, navigation }) {
    const [history, setHistory] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    useEffect(() => {
        getHistory()
    }, [])
    async function getHistory() {
        const res = await fetch("http://10.10.177.5:3000/history/" + route.params.uid, { mode: "no-cors" })

        const data = await res.json()
        setHistory(data)
        setRefreshing(false)
        console.log("came here")
    }


    return (
        <View style={{ flex: 1, padding: "5%", paddingTop: "20%" }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 23, fontWeight: "bold" }}>Bio Metric History</Text>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={getHistory} />
            }>
                {
                    history.map((data) => {
                        { console.log(data._id) }
                        return <CardHistory location={data.location} date={data.date} status={data.status} biometricTime={new Date(data.biometricTime)} key={data._id}></CardHistory>
                    })
                }

            </ScrollView>
        </View>

    );
}