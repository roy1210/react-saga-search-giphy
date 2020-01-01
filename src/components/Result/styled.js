import styled from 'styled-components'

export const ResultWrapper = styled.div`
  display: inline-block;
  
  .rows {
    display: grid;
    height: 200px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    
    img {
      display: grid;
      margin-right: 10px;
      margin-bottom: 10px;
      width: 400px;
      height: 220px;
      align-self: center
    }
  }
`