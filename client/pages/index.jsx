import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

import Head from 'next/head'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return (
    <div
      className={`${style.wrapper} overflow-x-hidden`}
      style={{
        // backgroundImage:'#ff99d3'
        backgroundImage:
          'radial-gradient(at 66% 78%, hsla(319,67%,77%,1) 0, transparent 51%), radial-gradient(at 5% 51%, hsla(342,83%,60%,1) 0, transparent 57%),  radial-gradient(at 65% 63%, hsla(125,60%,64%,1) 0, transparent 46%),  radial-gradient(at 77% 46%, hsla(242,93%,62%,1) 0, transparent 49%),  radial-gradient(at 94% 14%, hsla(14,84%,73%,1) 0, transparent 45%),  radial-gradient(at 11% 28%, hsla(4,90%,75%,1) 0, transparent 59%)',
      }}
    >
      <Head>
        <title>Uniswap</title>
        <meta property="og:title" content="Uniswap" key="title" />
      </Head>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}
