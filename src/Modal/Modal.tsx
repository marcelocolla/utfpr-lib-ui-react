import React from 'react'

import { PlusIcon } from '@ui/Icons/PlusIcon'

import * as S from './styles'

type ModalBasicProps = {
  close?: any
  title?: string
  visible: boolean
  children: React.ReactNode
}

export const Modal = ({ visible, close, children, title }: ModalBasicProps): JSX.Element => {
  if (!visible) {
    return <React.Fragment />
  }

  return (
    <S.Container>
      <S.Overlay onClick={close} />
      <S.Modal>
        <S.Header>
          <h2>{title}</h2>
          <div onClick={close}>
            <PlusIcon color="#bebebe" />
          </div>
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Modal>
    </S.Container>
  )
}
