import { View, Text, Image } from 'react-native'; 

import Mensagem from './mensagem';

import logo from '../../../assets/002-1-react-native.png'; 

import styles from './styles';

export default function Atividade2 () { 

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                 Atividade2
            </Text>
            <Image source={logo} style={styles.imagem} /> 

            <Mensagem nome={'William '} idade={37}/>
            <Mensagem nome={'Bianca '} idade={20} />
            <Mensagem nome={'Antônio '} idade={72} />
        </View>
    );
}

