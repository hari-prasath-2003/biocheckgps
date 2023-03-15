import * as LocalAuthentication from "expo-local-authentication";
import * as Location from 'expo-location';
const handle = async (id) => {
    try {
        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login with Biometrics",
            disableDeviceFallback: true,
            cancelLabel: "Cancel",
        });
        if (biometricAuth.success) {
            let location = await Location.getCurrentPositionAsync({});
            const res = await fetch("http://10.10.177.5:3000/attendance", { mode: "no-cors", method: "POST", headers: { "Content-Type": "Application/json" }, body: JSON.stringify({ id: id, location: location }) })
        }
        else {
            throw new Error("hello")
        }

    } catch (error) {
        throw new Error("bad")
        console.log(error);
    }
};

export default handle