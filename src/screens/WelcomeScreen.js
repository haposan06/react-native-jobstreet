import React, {Component} from 'react';
import {ScrollView,View,Text} from 'react-native';
import Slides from "../components/Slides";

const SLIDE_DATA = [
    {text: 'Welcome to our app', color: '#03A9F4'},
    {text: 'Use this to get job', color: '#009688'},
    {text: 'Set your location, swipe way', color: '#03A9F4'}
];

class WelcomeScreen extends Component{
    onSlideComplete = ()=>{
        this.props.navigation.navigate('auth');
    };
    render(){
        return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete}/>
    }
}

export default WelcomeScreen;

