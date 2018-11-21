import React, {Component} from 'react';
import {View,Text, Platform, ScrollView, Linking} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {MapView} from 'expo'
import {connect} from 'react-redux';

class ReviewScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="favorite" size={30} color={tintColor} />;
            },
            headerRight: (
                <Button title="Settings" onPress={() => navigation.navigate('settings')}
                backgroundColor='rgba(0,0,0,0)'
                color='rgba(0, 122, 255, 1)'/>
                )
        }
    };
    renderLikedJobs(){
        return this.props.likedJobs.map(job =>{
            const {company, formattedRelativeTime, url, longitude, latitude, jobtitle, jobkey} = job;
            const initialRegion = {
                longitude,
                latitude,
                longitudeDelta: 0.02,
                latitudeDelta: 0.045
            };
            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{height: 200}}>
                        <MapView
                            style={{flex: 1}}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text styles={styles.italics}>{company}</Text>
                            <Text styles={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title='Apply Now!'
                            backgroundColor='#03A9F4'
                            onPress={()=> Linking.openURL(url)}
                        />
                    </View>
                </Card>
            )
        })
    };

    render(){
        console.log('inside render review scren');
        return(
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {likedJobs : state.likedJobs};
}
const styles = {
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics:{
        fontStyle: 'italic'
    }
}
export default connect(mapStateToProps)(ReviewScreen);

