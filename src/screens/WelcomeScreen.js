import React, {Component} from 'react';
import _ from 'lodash';
import {AsyncStorage} from 'react-native';
import Slides from "../components/Slides";
import {AppLoading} from 'expo'

const SLIDE_DATA = [
    {text: 'Welcome to our app', color: '#03A9F4'},
    {text: 'Use this to get job', color: '#009688'},
    {text: 'Set your location, swipe way', color: '#03A9F4'}
];

class WelcomeScreen extends Component{
    state = { token : null};
    async componentWillMount(){
        let token = await AsyncStorage.getItem('fb_token');
        if (token){
            this.props.navigation.navigate('map')
            this.setState({token});
        } else {
            this.setState({token : false})
        }
    }
    onSlideComplete = ()=>{
        this.props.navigation.navigate('auth');
    };
    render(){
        if (_.isNull(this.state.token)){
            return <AppLoading/>
        }
        return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete}/>
    }
}

export default WelcomeScreen;

