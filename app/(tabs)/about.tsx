import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> About Screen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
})

export default AboutScreen
