import React from 'react'
import { Button } from '../button'

export const Header = () => {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' />
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}
