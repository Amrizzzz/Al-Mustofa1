import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Example from './home/people'
// import Home2 from '@/partikel/anotherHome'
import Module from '@/app/class/page'
import Home3 from './home'


export default function Home() {

  return (
    <div className="bg-white">
      <Home3 />
      {/* <Module/> */}
      {/* <Home1/> */}
      {/* <Example/> */}
      {/* Hello */}
    </div>
  )
}
