import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

class App extends Component {
  state = {
    count: 0
  };
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked the button {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundCOlor: "#000000",
    color: "white",
    padding: 20,
    marginBottom: 10
  }
});
export default App;
