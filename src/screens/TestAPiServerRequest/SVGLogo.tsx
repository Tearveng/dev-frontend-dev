import React from 'react';
import {SvgXml} from 'react-native-svg';

export interface Props {
  width?: string | number;
  height?: string | number;
  xml: string;
  isWeb?: boolean;
}
const SvgView = ({width, height, xml}: Props) => {
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default SvgView;
