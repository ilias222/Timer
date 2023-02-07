import { useState } from "react"
import { Text, StyleSheet } from "react-native"

export const Buttons = (props) => {
    const [toggle, setToggle] = useState(true)

    return (
        <Text
        style = {toggle ? styles.backColorDefault : styles.backColor}
        type = 'button' 
        onPress= {() => {
        props.press();
        setToggle(() => false);
        setTimeout(() => setToggle(true), 100)
        }}
        >
        {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    backColor: {
        opacity: 10,
        backgroundColor: 'beline',
        fontSize: 18,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 10,
        width: 100,
        textAlign: "center",
        color: 'gray',
        marginBottom: 10,
        marginTop: 10
      },
    backColorDefault: {
        backgroundColor: '#fff0',
        fontSize: 18,
        borderColor: 'black',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 10,
        width: 100,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10
    }
})