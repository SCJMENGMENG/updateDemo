/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
} from 'react-native';
import RNUpdate from "react-native-update-app"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
    }

    // auto update
    autoCheckHardUpdate = async () => {
        // you can like this
        // let res = await request()
        let res = {
            "data": {
                "version": "1.7",
                "filename": "wechat",
                "url": "http://222.169.40.2:8666/data/wisegame/1d68c0b23cfdf238/weixin_1340.apk?business_id=9034&task_id=6637471880647409681",
                "desc": "修复bug"
            }, "error": {"code": 0}
        }

        if (res) {
            return res.data
        }
    }

    // press update
    onHanderUpdate = ()=>{
        // you can like this
        // let res = await request()
        let res = {
            "data": {
                "version": "1.7",
                "filename": "wechat",
                "url": "http://222.169.40.2:8666/data/wisegame/1d68c0b23cfdf238/weixin_1340.apk?business_id=9034&task_id=6637471880647409681",
                "desc": "修复bug"
            }, "error": {"code": 0}
        }
        global.$RNUpdate.updateApp(res.data)
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#fff',justifyContent: 'center'}}>
                <RNUpdate
                    ref={r => global.$RNUpdate = r}
                    onBeforeStart={this.autoCheckHardUpdate}
                    progressBarColor="#f50"/>
                <Button title='update' onPress={this.onHanderUpdate}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
