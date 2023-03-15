import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function Login({ navigation }) {
    const [uid, setUid] = useState("")
    async function getUserData() {
        console.log(uid)
        const res = await fetch("http://10.10.177.5:3000/" + uid, { mode: "no-cors" })

        const data = await res.json()
        console.log(data)
        navigation.navigate("home", data)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput onChangeText={(text) => {
                setUid(text)
            }} placeholder='Enter your ID' style={{
                borderColor: "#1B6ADF", borderWidth: 2, width: "70%", shadowColor: 'black',
                height: 30,
                paddingStart: 10,
                elevation: 3,
                borderRadius: 5,
                backgroundColor: 'rgba(255,255,255,1)'
            }}></TextInput>
            <TouchableOpacity style={{ width: "70%" }} onPress={() => {
                getUserData()
            }}>
                <Text style={{ marginTop: 10, textAlign: "center", width: "100%", textAlignVertical: "center", fontSize: 14, fontWeight: "bold", height: 30, color: "white", borderRadius: 5, backgroundColor: "#1B6ADF" }}>
                    LOGIN
                </Text>
            </TouchableOpacity>


        </View>
    );
}