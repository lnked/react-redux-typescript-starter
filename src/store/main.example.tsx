import * as React from 'react'
import { observer } from 'mobx-react'

function Dashboard ({ store }: any) {
  return (
    <div>
      <p>{store.reviewCount}</p>
      <p>{store.averageScore}</p>
    </div>
  )
}

export default observer(Dashboard)
