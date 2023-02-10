import {Button, View} from "native-base";
import {MyText} from "@components/commons/my_text";
import React from "react";
import {useSlide} from "@components/commons/slide";

export const Child = ({text}: {text: string}) => {
  const {next} = useSlide()
  return (
    <View
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent="center"
      alignItems="center"
    >
      <MyText fontSize="3xl" type="primary">
        Hello From {text}
      </MyText>
      <Button onPress={next}>Hello</Button>
    </View>
  );
}