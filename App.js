import React from 'react'
import {   StyleSheet, View } from 'react-native'
import AuthNavigation from './AuthNavigation'



const App = () => {
 
  return (
    <View style={styles.container}>
      <AuthNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"black",
    paddingTop:25,
    
  },
})
