---
to: "src/components/<%= type %>/<%= name %>/index.tsx"
---
import React from 'react'
import styles from './index.module.css'

export type T<%= h.inflection.camelize(name) %> = React.PropsWithChildren;

const <%= h.inflection.camelize(name) %>: React.FC<T<%= h.inflection.camelize(name) %>> = ({...rest}) => {
  return <div className={styles.base} {...rest}>Component</div>
}

export default <%= h.inflection.camelize(name) %>