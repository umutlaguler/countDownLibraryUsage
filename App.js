import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';

class App extends Component {
    render() {
        return(
            <SafeAreaView style = {{flex: 1, alignItems: 'center', backgroundColor:'brown'}}>
                <Text>this page is names detail</Text>
                <CountDown
                 until={60 * 10 + 30}
                 size={30}
                 onFinish={() => alert('Finished')}
                 digitStyle={{backgroundColor: '#FFF'}}
                 timeToShow={['M', 'S']}
                 timeLabels={{m: '', s: ''}}
                 separatorStyle={{color: 'white'}}
                 timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                 digitStyle={{backgroundColor: 'brown', borderWidth: 0, borderColor: '#1CC625'}}
                 showSeparator
                />
            </SafeAreaView>
        )
    }
}

export default App;