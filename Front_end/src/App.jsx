import Root from './Pages/Root'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllSaveData from './Pages/All-Save-Data'
import GodHand from './OneSaveOnly/G/GodHand'
import NOT_FOUND from './Components/NOT_FOUND'
import GodOfWar from './OneSaveOnly/G/GodOfWar'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/all-save-game' element={<AllSaveData />} />
        <Route path='/*' element={<NOT_FOUND />} />

        {/* rute Game  */}
        <Route path='/god-hand-usa' element={<GodHand />} />
        <Route path='/god-of-war-usa' element={<GodOfWar />} />
      </Routes>
    </>
  )
}
