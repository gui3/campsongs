process.env.NODE_ENV = process.argv.includes("--prod")
? "production"
: "development"
