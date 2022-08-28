import { useState } from 'react'
import { MetadataContext } from '../components/Contexts'
import log from '../scripts/log'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="center-items">
      <article className="Home responsive-padding">
        <h1>
          <MetadataContext.Consumer>
            {metadata => metadata.APP_NAME}
          </MetadataContext.Consumer>
        </h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={_ => log.debug("debut test")}>
            DEV debug message
          </button>
        </div>
      </article>
    </div>
  )
}

export default Home
