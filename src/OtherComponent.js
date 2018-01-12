import React from 'react'
import Comp2 from './Comp2'

const OtherComponent = (props) => (
    <div>
        <Comp2 text={props.text}/>
    </div>
)


export default OtherComponent