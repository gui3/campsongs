
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

import LogoFire from '../components/LogoFire'

export default function About () {
    return (
        <article className="About">
            <h1>About...</h1>
            <section>
                <h2>...this website</h2>
                <p>
                    Bla bla bla
                </p>
                <LogoFire dynamic size="128"/>
            </section>

            <section>
                <h2>...the team behind</h2>
                <p>
                    Bla bla bla
                </p>
                {/**@TODO insert profile pic here ;) */}
            </section>

            <section>
                <h2>...{"&"} technologies we used</h2>
                <p>
                    Bla bla bla
                </p>
                <div>
                    <img src={viteLogo} 
                    className="logo vite" alt="Vite logo" />
                    <img src={reactLogo} 
                    className="logo react" alt="React logo" />
                </div>
            </section>
        </article>
    )
}
