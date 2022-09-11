import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'x1' },
  { href: '/', label: 'x2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='flex items-center justify-between layout h-14'>
        <UnderlineLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnderlineLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          {/* <CommandMenu /> */}
        </nav>
      </div>
    </header>
  );
}
