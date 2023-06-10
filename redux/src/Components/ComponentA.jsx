import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'


export default function ComponentA() {
  return (
    <div>
      <h1 style={{border:"2px"}}>Component A</h1>
      <ComponentB/>
      <ComponentC/>
    </div>
  )
}
