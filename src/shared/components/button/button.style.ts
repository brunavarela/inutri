import styled from "styled-components/native"
import { theme } from "../../themes/theme";


interface ButtonContainerProps {
  margin?: string;
  shadow?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 217px;
  height: 53px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.orangeTheme.primaryOrange};
  ${(props: {margin: any}) => (props.margin? `margin: ${props.margin};` : '')};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: {margin: any}) => (props.margin ? `margin: ${props.margin};` : '')};
  background-color: ${theme.colors.greenTheme.tertiaryGreen};
`