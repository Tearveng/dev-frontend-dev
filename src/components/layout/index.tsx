import React from 'react';
import { Header } from '../Header';

export const Layout = ({children, navigation}: any) => {
    return(
        <>
            <Header navigation={navigation}></Header>
                {children}
        </>
    )
}
