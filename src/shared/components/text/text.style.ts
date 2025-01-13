import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  customMargin?:string;
  shadow?: boolean;
  fontSize: string;
  fontFamily: 'Causten-Bold' | 'Causten-SemiBold' | 'Causten-Light' | 'Causten-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: {color: any}) => (props.color ? `color: ${props.color};` : '')};
  ${(props: {customMargin: any}) => (props.customMargin ? `margin: ${props.customMargin};` : '')};
  ${(props: {shadow: any}) =>
    props.shadow
      ? `
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25); 
    `
      : ''};

  font-size: ${(props: {fontSize: any}) => props.fontSize};
  font-family: ${(props: {fontFamily: any}) => props.fontFamily};
  text-align: center;
`;
