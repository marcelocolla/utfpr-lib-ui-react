import React from 'react'

import { Typography } from '@material-ui/core'

import { EmptyIcon } from '../Icons/EmptyIcon'
import { EmptyStateRoot } from './styles'

type EmptyStateProps = {
  title?: string
  message?: string
}

export const EmptyState = ({ title = 'Nenhum registro encontrado!', message }: EmptyStateProps) => {
  return (
    <EmptyStateRoot>
      <EmptyIcon />

      <div>
        <Typography variant="subtitle1">{title}</Typography>
        {!!message && <Typography variant="body2">{message}</Typography>}
      </div>
    </EmptyStateRoot>
  )
}
