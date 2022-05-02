import styled from 'styled-components'

export const HeaderStyled = styled.div`
  width: 100%;
  max-width: 33rem;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  align-self: center;

  > div {
    width: 2.8rem;
    height: 2.6rem;

    padding-right: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: rgba(221, 221, 223, 0.35);
    }
  }
  strong {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    justify-self: center;
  }
`

export const LogoutModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
