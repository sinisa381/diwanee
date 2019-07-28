import React, { useState } from 'react'
import theme from '../components/globals/theme'
import styled from 'styled-components'
import FormField from '../components/form/form_fields'
import { ErrorMsg, NullError } from '../components/shared'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { update, generateData } from '../components/form/form_actions'
import { loginUser, clearErrorMessage } from '../redux/actions'
import { Box, Flex } from 'rebass'
const Login = props => {
  const [formData, setFormData] = useState(initialState)
  const [formError, setFormError] = useState(false)

  const submitForm = e => {
    e.preventDefault()
    let dataToSubmit = generateData(formData, 'login')
    props
      .dispatch(loginUser(dataToSubmit))
      .then(res => {
        if (res.payload.status === 'ok') {
          props.history.push('/details')
        } else {
          setFormError(true)
          setTimeout(() => {
            props.dispatch(clearErrorMessage())
            setFormError(false)
          }, 2000)
        }
      })
      .catch(err => {
        setFormError(true)
        props.dispatch(clearErrorMessage())
        throw new Error(err)
      })
  }
  const updateForm = element => {
    const newFormData = update(element, formData, 'login')
    setFormData(newFormData)
  }
  return (
    <Main justifyContent='center' bg='blacks.7'>
      <Box m='5'>
        <form onSubmit={submitForm}>
          <Flex flexDirection='column' alignItems='center'>
            <FormField
              id={'user'}
              formdata={formData.user}
              change={element => updateForm(element)}
              error={formError}
            />
            <Box my='3' />
            <FormField
              id={'pass'}
              formdata={formData.pass}
              change={element => updateForm(element)}
              error={formError}
            />

            {props.user.errorMessage ? (
              <ErrorMsg mt='2'>Wrong username or password</ErrorMsg>
            ) : (
              <NullError mt='2' color='transparent'>
                NullError
              </NullError>
            )}
            <Box my='3' width={220}>
              <Button type='submit' onClick={submitForm}>
                login
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Main>
  )
}

const initialState = {
  user: {
    element: 'input',
    value: '',
    config: {
      name: 'email_input',
      type: 'text',
      placeholder: 'username'
    },
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    validationMessage: ''
  },
  pass: {
    element: 'input',
    value: '',
    config: {
      name: 'password_input',
      type: 'password',
      placeholder: 'password'
    },
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    validationMessage: ''
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(withRouter(Login))

const Button = styled.button`
  border: none;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.whites[9]};
  font-size: 1.2rem;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 4px;
  flex-grow: 1;
  width: 100%;
  transition: all 0.1s;
  &:hover {
    background-color: ${theme.colors.whites[10]};
    color: ${theme.colors.blue};
  }
`
const Main = styled(Flex)`
  min-height: calc(100vh - 100px);
  background: url(/altitude-clouds-cold-2387634.jpg) no-repeat;
  background-position: center;
  background-size: cover;
`
