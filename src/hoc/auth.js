import React, { useEffect, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default function(ComposedComponent, reload) {
  const Auth = props => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      setLoading(false)
      if (!props.user.isAuth) {
        if (reload) {
          props.history.push('/')
        }
      } else {
        if (reload === false) {
          props.history.push('/details')
        }
      }
    }, [props.user.isAuth])

    if (loading) return <div>loading...</div>

    return <ComposedComponent {...props} user={props.user} />
  }

  const mapStateToProps = state => {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(withRouter(Auth))
}
