import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyForm} from '@src/components/commons/my_form';
import {MyRadioButton} from '@src/components/commons/my_radio_button';
import {MyText} from '@src/components/commons/my_text';
import {Slide, SlideProvider} from '@src/components/commons/slide';
import {Layout} from '@src/components/layout';
import {View} from 'native-base';
import React from 'react';

export const SlideScreen = () => {
  const Child = ({text}: {text: string}) => (
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
    </View>
  );
  const obj = {
    slideContent: [
      {
        stepName: 'My Radio Test',
        child: (
          <MyRadioButton
            data={[
              {text: 'Hello', value: '1', isSelected: true},
              {text: 'Hi', value: '2'},
              {text: 'How Are You?', value: '3'},
              {text: 'I am good.', value: '4'},
            ]}
          />
        ),
      },
      {
        stepName: 'My Form Test',
        child: (
          <MyForm
            form={{height: '100%', width: '90%', space: 3}}
            input={[
              {
                name: 'name',
                color: 'black',
                isRequired: true,
                label: 'Name',
                placeholder: 'Your name here...',
              },
              {
                name: 'email',
                color: 'black',
                isRequired: true,
                label: 'Email',
                placeholder: 'Your email here...',
              },
              {
                name: 'gender',
                color: 'black',
                isRequired: true,
                label: 'Gener',
                type: 'radio',
                radioData: [
                  {text: 'Male', value: '1', isSelected: true},
                  {text: 'Female', value: '2'},
                  {text: 'Other', value: '3'},
                ],
              },
              {
                name: 'job',
                color: 'black',
                isRequired: true,
                label: 'Job',
                type: 'select',
                selectData: [
                  {id: 1, value: 'IT', text: 'IT'},
                  {id: 2, value: 'Tester', text: 'Tester'},
                ],
              },
              {
                name: 'password',
                color: 'black',
                isRequired: true,
                label: 'Password',
                type: 'password',
                placeholder: 'Your password here...',
              },
              {
                name: 'confirmPassword',
                color: 'black',
                isRequired: true,
                label: 'Confirm Password',
                placeholder: 'Type your password again...',
              },
            ]}
            button={{
              buttons: [
                {text: 'Submit', type: 'submit', colorScheme: 'success'},
              ],
            }}
          />
        ),
      },
      {
        stepName: 'My Child Test',
        child: <Child text="Child Three" />,
      },
      {
        stepName: 'My Child another Test',
        child: <Child text="Child Three dfgsdg" />,
      },
      {
        stepName: 'My Child ashfl;kak;jsd Test',
        child: <Child text="Child Three sdgsdfg" />,
      },
    ],
  };

  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();

  return (
    <Layout navigation={navigation}>
      <SlideProvider
        initialSlide={{index: 0, isFirst: false, isLast: false, totalSteps: 5}}
      >
        <Slide
          height={'80%'}
          width={'100%'}
          {...obj}
          button={{
            leftButton: {text: 'Previous', type: 'danger', variant: 'outline'},
            rightButton: {
              text: 'Next Step',
              type: 'success',
              variant: 'solid',
            },
          }}
          onDone={a => console.log(a)}
          onNext={a => {
            if (a?.index === 1) {
              console.log('on Next 01', a);
            }
            if (a?.index === 2) {
              console.log('on Next 02', a);
            }
            if (a?.index === 3) {
              console.log('on Next 03', a);
            }
            if (a?.index === 4) {
              console.log('on Next 04', a);
            }
            if (a?.index === 0) {
              console.log('on Next 0', a);
            }
          }}
          onBack={a => console.log('on Back', a)}
        />
      </SlideProvider>
    </Layout>
  );
};
