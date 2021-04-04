import React from 'react'
import { View,FlatList, Dimensions } from 'react-native'
import CarItem from '../carItems';
import cars from './cars';
import styles from './style';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
         <FlatList 
         data={cars}
         renderItem={({item}) => <CarItem car={item}/>}
         showsVerticalScrollIndicator={false}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}
/>
        </View>
    )
}

export default CarsList;
