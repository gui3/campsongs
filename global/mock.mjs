import sample_songs from "./mocks/songs.json"

export const mockRoutes = {
    "/api/songs": {
        name: "Songs",
        //index: true,
        path: "songs",
        mock: _ => sample_songs
        //element: <Home />
    },
    "/api/songs/search": {
        name: "Search",
        path: "songs/:search",
        mock: (params) => {
            return {
                valid: true,
                type: "SONGS",
                data: sample_songs.data.filter(
                    song => song.text.includes(params.get("text"))
                )
            }
        }
        //element: <Contact />
    },
    "/api/metadata": {
        name: "Metadata",
        path: "metadata",
        mock: _ => {
            return { 
                valid: true, 
                type: "METADATA",
                data: { 
                    APP_NAME: "Mock (dev mode)",
                    APP_VERSION: "mock.0.0"
                } 
            } 
        }
        //element: <About />
    },
    error: err => {
        return {
            valid: false,
            type: "ERROR",
            data: null,
            error: err.message
        }
    }
}

export default function mock(path) {
    try {
        const url = new URL(path, "https://fake-url.mock")
        return mockRoutes[url.pathname].mock(url.searchParams)
    }
    catch (error) {
        if (path === "/api/DEAD_END") throw error
        return mockRoutes.error(error)
    }
}