import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import handle from "../function/fingerprint"

export default function Card(props) {
    const navigation = useNavigation()
    console.log(props.cid)
    return (
        <TouchableOpacity onPress={async () => {
            try {

                await handle(props.cid)
                props.setPending((prev) => { return prev.filter((data) => { return data._id != props.cid }) })
            } catch {
                console.log("working");
                return
            }
        }
        }>
            <View
                style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, padding: 20, paddingBottom: 10, height: 100, }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ fontWeight: "bold", fontSize: 20, color: "#1B6ADF", }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#1B6ADF", }}>{props.date.split(" ")[1]}</Text>
                        <Text style={{ fontWeight: "semibold", fontSize: 14, color: "#1B6ADF", }}>{props.date.split(" ")[0]}</Text>
                    </View>
                    <View style={{ flex: 1, padding: 5, paddingHorizontal: 20, }}>
                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <Icon
                                containerStyle={{ backgroundColor: "transparent" }}
                                name='location-pin'
                                type='entypo'
                                size={20}
                                color='#1B6ADF'
                                style={{ overlayColor: "transparent", }}
                            />
                            <Text style={{ paddingStart: 5 }}>
                                {props.location}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", flex: 1, paddingStart: 3, }}>
                            <Icon
                                containerStyle={{ backgroundColor: "transparent" }}
                                name='clock'
                                type='fontisto'
                                size={16}
                                color='#1B6ADF'
                                style={{ overlayColor: "transparent", }}
                            />
                            <Text style={{ paddingStart: 5 }}>
                                {console.log(props.biometricTime.toLocaleTimeString().slice(0, 2))}
                                Bio Metric-Time : {props.biometricTime.toLocaleTimeString().slice(0, 2) > 12 ? props.biometricTime.toLocaleTimeString().slice(0, 2) % 12 + props.biometricTime.toLocaleTimeString().slice(2, 5) + " PM" : props.biometricTime.toLocaleTimeString().slice(0, 5) + " AM"}
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

