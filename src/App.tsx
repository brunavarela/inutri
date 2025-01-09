import { SafeAreaView, Text, View } from "react-native"
import styled from "styled-components/native";
import Login from "./modules/login";

const TextNew = styled.Text`
  height: 100;
`

const App = () => {
  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  )
}

export default App;