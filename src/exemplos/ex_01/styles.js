import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        padding:8,
    },
    titulo:{
        //fontSize:20,
        fontsize: RFValue (40),
        color:'#fafafa',
    }, 
});
export default style;