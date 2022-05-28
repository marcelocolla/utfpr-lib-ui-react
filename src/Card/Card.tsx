import React from 'react'
import styled from 'styled-components'

import { Button } from 'Button'
import { DeleteIcon } from 'Icons/DeleteIcon'
import { EditIcon } from 'Icons/EditIcon'
import { Modal } from 'Modal'

import { CardRoot } from './styles'

const avatar = require('assets/dog.png')

export const ButtonWrapperStyled = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
`

const DeleteModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

type CardProps = {
  imageUrl?: string
  key: number | string
  name: string
  leftInfo: string
  rightInfo: string
  removeDisabled?: boolean
  onEdition?: () => void
  onRemoval?: () => void
}

export const Card = (props: CardProps) => {
  const [open, setOpen] = React.useState(false)
  const [confirm, setConfirm] = React.useState(false)

  const handleClose = () => {
    setConfirm(false)
  }

  return (
    <React.Fragment>
      <CardRoot key={props.key} onClick={() => setOpen(!open)}>
        <div className={open ? 'card-open' : 'card-closed'}>
          {/* parte esquerda, avatar */}
          <div className="imageWrapper">
            <img src={props.imageUrl ?? avatar} alt="avatar" />
          </div>

          {/* parte direita, informações gerais */}
          <header>
            <h3>{props.name}</h3>

            <p>{props.leftInfo}</p>
            <strong>{props.rightInfo}</strong>
          </header>
        </div>

        {/* botões de editar e deletar */}
        <aside className={open ? 'options-open' : 'options-closed'}>
          <ButtonWrapperStyled>
            <Button name="editarButton" type="button" onClickFunction={props.onEdition}>
              <EditIcon color="white" />
            </Button>
            <Button
              name="removerButton"
              type="button"
              disabled={props.removeDisabled}
              onClickFunction={() => setConfirm(true)}
            >
              <DeleteIcon color="white" />
            </Button>
          </ButtonWrapperStyled>
        </aside>
      </CardRoot>

      <Modal visible={confirm} close={handleClose} title="Deseja remover esse registro?">
        <DeleteModalStyled>
          <Button name="deleteBtnYes" onClickFunction={props.onRemoval}>
            Sim
          </Button>
          <Button name="deleteBtnNo" onClickFunction={handleClose}>
            Não
          </Button>
        </DeleteModalStyled>
      </Modal>
    </React.Fragment>
  )
}
