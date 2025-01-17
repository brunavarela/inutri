import styled from 'styled-components/native';
import { theme } from '../../themes/theme'

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;

  padding-right: ${(props: any) => props.hasSecureTextEntry ? '60px' : '16px'};

  border-width: 1px;
  border-color: ${(props: any) => props.isError ? theme.colors.extraTheme.error : theme.colors.neutralTheme.gray};
`;

// export const IconEye = styled(Icon)`
//   position: absolute;
//   right: 16px;
//   top: 12px;
// `;

