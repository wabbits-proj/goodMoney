import { Dimensions, PixelRatio } from "react-native";

export const widthPercentageToDp = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) /100);
};

export const heightPercentageToDp = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) /100);
};

export function getAdjustedFontSize(size){
  let width = Dimensions.get('window').width;
  return parseInt(size) * width * (1.8 - 0.002 * width) / 400;
}

export function valueMoney(value){
  v = value;
  v = validNumber(v);
  v = v.replace(/[0-9]{12}/, 'inválido'); //LIMITA O MÁXIMO PARA 999.999.999,99
  v = v.replace(/(\d{1})(\d{8})$/, '$1.$2'); //COLOCA . ANTES DOS ULTIMOS 8 DIGITOS
  v = v.replace(/(\d{1})(\d{5})$/, '$1.$2'); //COLOCA . ANTES DOS ULTIMOS 5 DIGITOS
  v = v.replace(/(\d{1})(\d{1,2})$/, '$1,$2'); //COLOCA , ANTES DOS ULTIMOS 2 DIGITOS
  return v;
}

export function valueDate(date){
  let v = date.replace(/\D/g, '').slice(0, 8);
  if(v.length >= 5){
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  } else if(v.length >= 3){
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }

  return v;
}

export function validNumber(value){
  return value.replace(/\D/g, ''); //PERMITE DIGITAR APENAS NUMEROS
}