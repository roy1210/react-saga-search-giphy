import React from 'react'
import { Spring } from 'react-spring/renderprops'
import { ResultWrapper } from './styled'


const Result = ({ result, i }) => {
  return (
    <ResultWrapper key={i}>
      <div className="rows">
        <Spring
          from={{ opacity: 0, transform: 'translateY(30px)' }}
          to={{
            opacity: 1, transform: 'translateY(30px)'
          }}
          config={{ delay: i * 100 }}
        >
          {springProps =>
            <div style={springProps}>
              <img src={result.toJS().images.original.url} />
            </div>}
        </Spring>
      </div>
    </ResultWrapper>
  )
}

export default Result
