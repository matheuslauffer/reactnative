import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Visor = props => (
    <View>
        <TextInput 
            placeholder='Resultado'
            editable={false}
            style={styles.visor}
            value={props.resultado}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});

export { Visor };
