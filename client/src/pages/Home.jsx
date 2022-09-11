import { useState } from 'react'
import { MetadataContext } from '../components/Contexts'
import log from '../scripts/log'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="center-items center-text position-relative top bottom left right">
      <article className="Home responsive-padding">
        <h2>
          Singin' Together
        </h2>
        <p>
          {/*<MetadataContext.Consumer>
            {metadata => metadata.APP_NAME}
          </MetadataContext.Consumer>*/}
          Campsongs
          is a place to share
          your favorite song lyrics and chords.
        </p>
        <div className="card">
          <button className="button"
          onClick={() => setCount((count) => count + 1)}>
            <span>count is {count}</span>
          </button>
          <button className="button"
          onClick={_ => log.debug("debut test")}>
            <span>DEV debug message</span>
          </button>
        </div>
      </article>
    </div>
  )
}

export default Home
