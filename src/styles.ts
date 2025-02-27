import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    display: block !important;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  img {
    max-width: 100%;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }
`
