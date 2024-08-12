// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
   
    <div>
      <Header />
      <div className="relative">
        <img src={'banner1.jpeg'} alt="Banner" className="w-full h-64 object-cover opacity-75" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Do not <span className="text-red-400">just</span> scroll, go <span className="text-red-400">live</span> it.</h1>
        </div>
      </div>
    </div>
  )
}
