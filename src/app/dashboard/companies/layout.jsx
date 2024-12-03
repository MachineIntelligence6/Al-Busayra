import { CompaniesProvider } from '@/context/companiesContext'
import React from 'react'

function layout({children}) {
  return (
    <CompaniesProvider>{children}</CompaniesProvider>
  )
}

export default layout