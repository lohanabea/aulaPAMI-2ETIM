import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#52a9e3',
        padding:8,
    },
    titulo:{
        fontSize:20,
        //fontsize: RFValue (40),
        color:'#fafafa',
        textAlign:'center',
    }, 
});
export default style;