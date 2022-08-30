export default [
    {
        path: "/",
        data: (req, res) => console.log("HELLO FROM ROUTE") || 1
    },
    {
        path: "/metadata",
        method: "GET",
        type: "CONFIG",
        description: "Get app metadata",
        data: (req, res, next) => {
            const {metadata} = res.locals
            metadata.ENV = process.env.NODE_ENV
            return metadata
        },
        mock: (samples, req, res) => {
            return { 
                APP_NAME: "Mock (dev mode)",
                APP_VERSION: "mock.0.0",
                ENV: "mock"
            }
        }
    },
    {
        path: "/songs",
        method: "GET",
        type: "SONGS",
        description: "maximum number of public songs",
        data: async (req, res, next) => {
            const songs = await res.locals.db("songs")
            return songs
        },
        mock: (samples, req, res) => samples.songs
    },
    {
        path: "/songs/search",
        method: "get",
        type: "SONGS",
        description: "Researches a song using querystring",
        data: (req, res, next) => {
            /** @TODO */
        },
        mock: (samples, req, res) => {
            /** @TODO improve */
            //console.log(searchParams.get("text"))
            return sample_songs.data.filter(
                song => song.text.includes(searchParams.get("text"))
            )
        }
    },
    {
        path: "/song/:id",
        method: "GET",
        type: "SONG",
        description: "get one song by its ID",
        data: async (req, res, next) => {
            const id = req.params.id
            if (!id) next(new Error("invalid id: " + id))

            const songs = await res.locals.db("songs")
            .whereRaw("songId = ?", [req.params.id])
        
            if (songs.length > 0) return songs[0] 
            throw new Error("No song with this id")
        },
        mock: (samples, req, res) => {
            const data = samples.songs.data.find(
                song => song.songId.toString() === req.params.get("id")
            )
            if (!data) throw new Error("no song with this id")
            return data
        }
    }
]
