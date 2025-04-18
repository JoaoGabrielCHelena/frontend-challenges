import React from "react"
import styles from "./Grid.module.scss"

interface containerProps extends React.HTMLAttributes<HTMLDivElement> {
  rowGap?: number,
  fullMobile?: boolean
}

function Container(props: containerProps) {
  let { children, className, rowGap, fullMobile, ...rest } = props

  return (
    <div style={{rowGap: (rowGap) ? `${rowGap}px` : "0"}} className={`${fullMobile ? styles.fullMobile : "" } ${styles.grid} ${className ? className : ""}`} {...rest}>
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
