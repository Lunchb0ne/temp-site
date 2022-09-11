import Image from 'next/future/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import defImage from '~/images/large-og.png';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='flex flex-col items-center justify-center text-center layout mt-52'>
            {/* <Vercel className='text-5xl' /> */}
            <div className='flex items-center'>
              <Image
                src={defImage}
                alt='Stylized Picture'
                className='w-20 h-20 p-2 rounded-full'
              />
              <div className='text-left'>
                <h1 className='mt-4'>Abhishek Aryan</h1>
                <p className='mt-2 text-gray-500 text-md'>
                  Professional Code Kludge
                </p>
              </div>
            </div>

            <footer className='absolute text-gray-700 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Abhishek Aryan
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
