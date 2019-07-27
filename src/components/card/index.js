import React from 'react'
import { Card, Image, Heading, Text } from 'rebass'

export default ({ src, title, body, weight }) => (
  <div>
    <Card
      fontWeight='bold'
      width={[350, 500]}
      bg='#f6f6ff'
      borderRadius={8}
      boxShadow='0 2px 16px rgba(0, 0, 0, 0.15)'
    >
      <Image
        src={`data:image/jpeg;base64,${src}`}
        height={[200, 300]}
        width={[350, 500]}
      />
      <Heading
        fontFamily='roboto'
        lineHeight='title'
        pt='2'
        px='3'
        fontSize={[2, 3, 4]}
      >
        {title}
      </Heading>
      <Text
        fontFamily='roboto'
        px='3'
        py='2'
        fontSize={[1, 2, 3]}
        lineHeight='copy'
      >
        {body} And weight is {weight}
      </Text>
    </Card>
  </div>
)
