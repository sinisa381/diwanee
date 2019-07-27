import React, { useEffect } from 'react'
import { mq } from '../components/globals'
import { detailsPage } from '../redux/actions'
import { Box } from 'rebass'
import CardComponent from '../components/card'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Detail = props => {
  useEffect(() => {
    props.dispatch(detailsPage())
  }, [])

  const GenerateDiwaineeData = () => (
    <Grid>
      {props.user.details &&
        props.user.details.items
          .sort(function(a, b) {
            return b.order_weight - a.order_weight
          })
          .map((detail, i) => {
            return (
              <CardComponent
                key={i}
                src={detail.base64_img_jpg}
                title={detail.title}
                body={detail.body}
                weight={detail.order_weight}
              />
            )
          })}
    </Grid>
  )

  return (
    <Container>
      <Box mt='3' />
      <GenerateDiwaineeData />
      <Box mb='3' />
    </Container>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Detail)

const Grid = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  align-content: center;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
