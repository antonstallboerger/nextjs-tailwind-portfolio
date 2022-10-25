import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import React from 'react';
// import "@fontsource/inter";
// import { Inter } from '@next/font/google';

// const inter = Inter();
// import { Iconoir } from 'iconoir-react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anton Stallbörger</title>
        <meta name="description" content="Generated by create next app" />
        <meta
        property="og:image"
        content="https://my-og-img.vercel.app/api/og?title=my post title"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <Footer />
      
      </div>
  )
}

