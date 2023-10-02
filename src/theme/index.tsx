"use client";

import React from "react";
import { ConfigProvider } from "antd";

const WithTheme = ({children}: {
    children: React.ReactNode
}) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0D9488',
                },
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                        // borderRadius: 200,
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </ConfigProvider>
    </>
)

export default WithTheme;