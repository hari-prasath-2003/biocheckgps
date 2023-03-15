import * as React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from "react-native-elements";
export default function Navbar({ name, id, post }) {
    return (
        <View style={{ paddingTop: "10%", paddingLeft: '10%', backgroundColor: "#1B6ADF", height: "30%", }}>
            <View style={{ alignItems: "flex-end", paddingHorizontal: "5%" }}>

                <Avatar
                    size="medium"
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={1}
                />
            </View>
            <View style={{ paddingVertical: "5%" }}>
                <Text

                    style={{ fontSize: 26, fontWeight: 'bold', color: "white" }}>{name}</Text>
                <Text

                    style={{ fontSize: 14, fontWeight: 'light', color: "rgba(255, 255, 255, 0.4)" }}>ID : {id} | {post}
                </Text>
            </View>
        </View>
    )
}