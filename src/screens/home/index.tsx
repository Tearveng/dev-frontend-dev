import React from 'react';
import {View} from 'native-base';
import {style} from '@styles/style';
import {ViewPdf} from '@src/components/templates/pdf';
import {Layout} from "@components/layout";

export interface Props {
    route: any;
    navigation: any;
}

export function HomeScreen({navigation}: any) {
    return (
        <Layout navigation={navigation}>
            <View style={style.container}>
                <ViewPdf/>
            </View>
        </Layout>
    );
}
