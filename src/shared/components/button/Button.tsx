import { TouchableOpacityProps } from "react-native";
import { theme } from "../../themes/theme";
import { ButtonContainer, ButtonSecondary } from "./button.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  shadow?: boolean;
};

const Button = ({title, margin, type, onPress, shadow, ...props}: ButtonProps) => {

  const renderText = (color: string) => (
    <>
      <Text 
        type={textTypes.BUTTON_SEMIBOLD}
        color={color}>
        {title}
      </Text>
    </>
  )

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary>
          {renderText(theme.colors.neutralTheme.white)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default: 
      return (
        <ButtonContainer {...props} margin={margin}>
          {renderText(theme.colors.neutralTheme.white)}
        </ButtonContainer>
      );
  }
}

export default Button;