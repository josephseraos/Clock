import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment'

const App = () => {

    const [time, setTime] = useState('00:00:00')
    const [isShowing, setIsShowing] = useState(true)

    const toggleShowing = () => setIsShowing(!isShowing)
    

    setInterval(() => {
        setTime(Moment().format('HH:mm:ss'))
    }, 1000)

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        color: 'white',
        fontSize: 70,
    }
})

export default App

// export default function App() {
//     const timeNow = (format=null) => {
//         return Moment().format(format?format:'H:mm:s')
//     }

//     const [time, setTime] = useState(timeNow())

//     setInterval(() => {
//         setTime(timeNow())
//     })

//     return (
//         <View style={styles.container}>
//             <Text>
//                 {`São exatamente ${time}`}
//             </Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
