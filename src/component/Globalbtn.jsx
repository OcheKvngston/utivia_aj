import React from 'react'
import classes from "../component/global.module.css"

const Globalbtn = (props) => {
  return (
    <button className={`${classes.button} ${classes[props.shadow]} ${classes[props.outline]} ${classes[props.varient]}`}>{props.children}</button>
  )
}

export default Globalbtn