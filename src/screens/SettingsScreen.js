import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Button} from 'react-native-elements'
import {connect} from 'react-redux';
import {clearLikedJobs} from "../actions";

class SettingsScreen extends Component{
    render(){
        return(
            <View>
                <Button title='Reset liked jobs' large onPress={()=>this.props.clearLikedJobs} icon={{name: 'delete-forever'}}
                    backgroundColor='#F44336'
                />
            </View>
        )
    }
}

export default connect(null, clearLikedJobs)(SettingsScreen);

