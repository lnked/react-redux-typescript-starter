import * as React from 'react'

import { E } from 'layouts'
import { Image } from 'components'

import { A, B, AB, AnotherBuild } from './components'

const About = ({ ui, app }: any) => (
  <div>
    <div>ui: {JSON.stringify(ui)}</div>
    <div>app: {JSON.stringify(app)}</div>
    <h2>About</h2>
    <A />
    <B />
    <E />
    <AB />
    <AnotherBuild />
    <Image width={100} height={100} src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" />
    <Image src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" circle />
  </div>
)

export default About
