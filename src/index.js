import {StyleSheet, View} from "react-native"
import {FilePicker} from "./components"

export default () => {
    return(
        <View style={styles.container}>
            <FilePicker />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})