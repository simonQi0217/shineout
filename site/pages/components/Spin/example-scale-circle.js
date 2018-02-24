/**
* cn - scale-circle
* en - scale-circle
*/
import React from 'react'
import { Spin } from 'shineout'

export default function () {
  const style = { display: 'flex' }
  return (
    <div style={style}>
      <Spin size={18} type="scale-circle" color="green" />
      <Spin type="scale-circle" />
      <Spin size="54px" type="scale-circle" color="#dc3545" />
    </div>
  )
}