process.env.NODE_ENV = (
    process.env.NODE_ENV === "production" // if defined
    || process.argv.includes("--production") // if option --prod
)
? "production"
: "development"
