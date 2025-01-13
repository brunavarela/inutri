import { View } from "react-native"
import Text from '../../../shared/components/text/Text'
import { ContainerLandingPage, ImageBG, SpotImage, ViewContent } from "../styles/landingPage.style";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";
import Button from "../../../shared/components/button/Button";

const LandingPage = () => {
  return (
    <View>
      <ContainerLandingPage>
        <ImageBG source={require('../../../assets/images/background.png')}>
          <ViewContent>
            <SpotImage resizeMode="contain" source={require('../../../assets/images/logo.png')} />
            <Text  
              color={theme.colors.neutralTheme.white} 
              type={textTypes.SUB_TITLE_SEMIBOLD}
              shadow={true}
              > Ajudando a cuidar de você
            </Text>
            <Button 
              type={theme.buttons.buttonsTheme.primary}
              margin="24px"
              shadow={true}
              title="Começar"
            />
          </ViewContent>
        </ImageBG>
      </ContainerLandingPage>
    </View>
  )
}

export default LandingPage; 