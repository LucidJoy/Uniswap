import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import ethLogo from '../assets/eth.png'
import uniswapLogo from '../assets/uniswap.png'
import { TransactionContext } from '../context/TranscationContext'

const style = {
  wrapper: `p-4 flex w-screen justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  logoContainer: ` flex  bg-[rgb(25, 27, 31)] p-2 items-center justify-center rounded-full`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191b1f] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#323841]`,
  buttonsContainer: `flex w-1/4  justify-end items-center`,
  button: `flex items-center bg-[#191b1f] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const glassmorphism = {
  background: 'rgba( 25, 27, 31, 0.6 )',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  borderRadius: '16px',
}

const glassmorphismLogo = {
  background: 'rgba( 25, 27, 31, 0.8 )',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  borderRadius: '9999px',
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [userName, setUserName] = useState()
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  useEffect(() => {
    setUserName(`${currentAccount?.slice(0, 5)}...${currentAccount?.slice(-4)}`)
  }, [currentAccount])

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <div className={style.logoContainer} style={glassmorphismLogo}>
          <Image src={uniswapLogo} alt="logo" height={40} width={40} />
        </div>
      </div>

      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>

          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>

          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>

          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>

      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding} `}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="ethereum" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>

        {currentAccount ? (
          <div
            className={`${style.button} ${style.buttonPadding} cursor-default border-[#234169] text-center transition-all duration-200`}
            style={glassmorphism}
          >
            <div className={`${style.buttonTextContainer} px-2`}>
              {userName}
            </div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding} border-2 border-[#163256] text-center transition-all duration-200 hover:border-[#234169]`}
            style={{
              backgroundColor: '#172A42',
            }}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              <p className={`mr-1`}>Connect</p>
              <p>Wallet</p>
            </div>
          </div>
        )}

        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
