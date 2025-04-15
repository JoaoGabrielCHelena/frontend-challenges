import React from "react"
import styles from "./Grid.module.scss"

function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  let { children, className, ...rest } = props

  return (
    <div className={`${styles.grid} ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  )
}

interface GridType {
  container: typeof Container;
  [key: string]: any;
}

let Grid: GridType = {
  container: Container,
  ...styles,
}

export default Grid
