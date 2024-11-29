import React from 'react'
import Link from 'next/link';
import { navLinks } from './constant/constant';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean,
  closeNav: () => void
}

const MobileNav = ({closeNav, showNav}: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div>
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000]  w-full h-screen`}></div>

      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm-w-[60%] bg-black  space-y-6 z-[10000]`}>
      {navLinks.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url}>
                <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text[30px] font-medium hover:text-red-400">
                  {navlink.label}
                </p>
              </Link>
            );
          })}
          <CgClose onClick={closeNav} className='text-white absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6'/>
      </div>
    </div>
  )
}

export default MobileNav