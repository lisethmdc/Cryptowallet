import React from 'react';
import IncomeArea from '../../components/IncomeArea/IncomeArea';
import './styles.scss';
import imageWallet from '../../assets/images/HomeOffice.png';

export default function Wallet() {
  return (
    <>
    <div>
      <IncomeArea /> 
    </div>
    <div className='imageArea'>
      <img className='img-wallet' src={imageWallet} alt='ilustración wallet'/>
    </div>
    </>

  )
}
