'use client'
import React, { useRef, createContext, useContext, useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store'
import { Footer, Navbar, Herobanner, Footerbanner } from "@/components/index"


const Layout = ({ children }: { children: React.ReactNode}) => {
    const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
    return (
        <>
            <Provider store={storeRef.current}>
            <Navbar />
            <Herobanner />
            {children}
            <Footerbanner />
            </Provider>
        </>
    )
}

export default Layout
