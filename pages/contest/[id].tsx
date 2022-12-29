import React from 'react'
import ContestDetailContainer from '../../components/containers/ContestDetailContainer'
import Header from '../../layouts/Header'
import MainLayout from '../../layouts/MainLayout'

function ContestDetail() {
  return (
    <MainLayout>
        <Header title='asa | Sayembara'/>
        <ContestDetailContainer/>
    </MainLayout>
  )
}

export default ContestDetail