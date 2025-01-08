import { Text, View } from "react-native"
import styled from "styled-components/native";

const TextNew = styled.Text`
  height: 100;
`

const App = () => {
  return (
    <View>
      <Text>Teste</Text>
      <TextNew>Styled components</TextNew>
    </View>
  )
}

export default App;