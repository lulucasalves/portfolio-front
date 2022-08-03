import Link from 'next/link'
import React from 'react'

export const MyLink = React.forwardRef((props: any, ref: any) => (
  <Link {...props} ref={ref} />
))
