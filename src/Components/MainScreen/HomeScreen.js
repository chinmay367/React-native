import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import styles from './styles/styleCard';
import {recipes} from '../../data/dataArray'

export default function Main(){
   const onPressRecipe = item => (
        <Text>add</Text>
    );
    
    const  renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>Category Name</Text>
          </View>
        </TouchableHighlight>
      );
    
        return (
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={recipes}
              renderItem={renderRecipes}
              keyExtractor={item => `${item.recipeId}`}
            />
          </View>
        );
}