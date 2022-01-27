import Head from 'next/head';
import React, { useState } from "react";
import { LayoutContainer } from './style';

export default function Layout({ children, background, header = "title" }: any) {

    return (
        <React.Fragment>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LayoutContainer background={background} >
                <main>
                    {children}
                </main>
            </LayoutContainer>
        </React.Fragment>
    );
}
