import { Image, Text, TextInput, View } from "react-native"
import { ContainerLogin, SpotImage } from "../styles/login.style";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <SpotImage source={require('../../../assets/images/background.png')}>
          <SpotImage source={require('../../../assets/images/logo.png')} />
          <Text>Ajudando a cuidar de você</Text>
          <TextInput/>
        </SpotImage>
      </ContainerLogin>
    </View>
  )
}

export default Login;