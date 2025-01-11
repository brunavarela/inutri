import { Image, Text, TextInput, View } from "react-native"
import { ContainerLogin, ImageBG } from "../styles/login.style";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <ImageBG resizeMode="" source={require('../../../assets/images/background.png')}>
          <Text>Login</Text>
          <TextInput/>
        </ImageBG>
      </ContainerLogin>
    </View>
  )
}

export default Login;