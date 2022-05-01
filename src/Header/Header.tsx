import React from 'react'
import { useHistory } from 'react-router'

import { Button } from '@ui/Button/Button'
import { ArrowLeftIcon } from '@ui/Icons/ArrowLeftIcon'
import { Modal } from '@ui/Modal'

import { HeaderStyled, LogoutModalStyled } from './styles'

type HeaderProps = {
  header: string
  home?: boolean
  signOut: () => void
}

export const Header = ({ header, signOut, home: isHomePage }: HeaderProps) => {
  const history = useHistory()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    if (isHomePage) {
      setOpen(true)
    } else {
      history.goBack()
    }
  }

  return (
    <>
      <HeaderStyled>
        <div onClick={handleClick}>
          <ArrowLeftIcon />
        </div>
        <strong>{header}</strong>
      </HeaderStyled>

      <Modal visible={open} close={() => setOpen(false)} title="Deseja sair?">
        <LogoutModalStyled>
          <Button name="logoutBtnYes" onClickFunction={signOut}>
            Sim
          </Button>
          <Button name="logoutBtnNo" onClickFunction={() => setOpen(false)}>
            Não
          </Button>
        </LogoutModalStyled>
      </Modal>
    </>
  )
}
