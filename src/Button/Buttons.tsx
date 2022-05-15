import React from 'react'

import { PlusIcon } from 'Icons/PlusIcon/PlusIcon'
import { ReportIcon } from 'Icons/ReportIcon/ReportIcon'

import { Button } from './Button'
import * as S from './styles'

type ButtonProps = {
  onClickLeft?: () => void
  onClickRight?: () => void
}

export const ButtonDeseg = (props: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      {/* não sei adicionar icone*/}
      <Button type="button" name="relatorioButton" onClickFunction={props.onClickLeft} title="Relatório">
        <ReportIcon color="white" />
      </Button>

      <Button type="button" name="solicitacoesButton" path="/solicitacoes" title="Solicitações">
        Solicitações
      </Button>

      <Button type="button" name="cadastroButton" onClickFunction={props.onClickRight} title="Cadastrar usuário">
        <PlusIcon color="white" />
      </Button>
    </S.ButtonWrapper>
  )
}

export const ButtonProfessor = () => {
  return (
    <S.ButtonWrapper>
      <Button type="button" name="solicitacoesButton" path="/solicitacoes" title="Solicitações">
        Solicitações
      </Button>
    </S.ButtonWrapper>
  )
}

export const ButtonVigilante = () => {
  return (
    <S.ButtonWrapper>
      <Button type="button" name="visitasButton" path="/visitas" title="Visitas">
        Visitas
      </Button>

      <Button type="button" name="liberacoesButton" path="/liberacoes" title="Liberações">
        Liberações
      </Button>
    </S.ButtonWrapper>
  )
}
