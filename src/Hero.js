import React, { useContext } from 'react';
import phone from './images/phone.svg';
import { AppContext } from './context';

export default function Hero() {
  const { closeSubmenu } = useContext(AppContext);

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero__container'>
        <article className='hero__info'>
          <h1>
            Payments infrastructure
            <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero__image'>
          <img src={phone} alt='phone' />
        </article>
      </div>
    </section>
  );
}
