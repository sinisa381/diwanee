import React from 'react'
import theme from '../globals/theme'
import styled from 'styled-components'
import { ErrorMsg } from '../../components/shared'
const FormField = ({ formdata, change, id, error }) => {
  const showError = () => {
    let errorMessage = ''
    if (formdata.validation && !formdata.valid) {
      errorMessage = <ErrorMsg>{formdata.validationMessage}</ErrorMsg>
    }
    return errorMessage
  }

  const renderTemplate = () => {
    let template = null
    switch (formdata.element) {
      case 'input':
        template = (
          <React.Fragment>
            <Input
              error={error}
              {...formdata.config}
              value={formdata.value}
              onBlur={event => change({ event, id, blur: true })}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </React.Fragment>
        )
        break
    }
    return template
  }

  return <div>{renderTemplate()}</div>
}

export default FormField

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid
    ${props => (props.error ? theme.colors.red : theme.colors.blue)};
`
