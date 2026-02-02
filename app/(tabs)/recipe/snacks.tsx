import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Snacks() {
  return (
     <View style={styles.container}>
       <Text>hey</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#e2ede5",
     marginBottom: 50,
     padding: 16,
   },
 });
 