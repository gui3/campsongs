import { readFileSync, writeFileSync } from "fs"
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const RAW_SVG_PATH = "../global/logos/fireside.svg"
const REACT_COMPONENT_PATH = "../global/logos/AppLogoSvg.jsx"
const MARKER_COMMENT = "PASTE_SVG_HERE"

const __dirname = dirname(fileURLToPath(import.meta.url))

const svg = await readFileSync(resolve(
    __dirname,
    RAW_SVG_PATH // path to raw svg logo
), {encoding: "utf-8"})

/** reading files */

const oldComponent = readFileSync(resolve(
    __dirname,
    REACT_COMPONENT_PATH // path to react component
), {encoding: "utf-8"})

/** FORMATTING FOR REACT */

const newSvgText = svg

/**
 * ID to CLASSNAMES
 * (not necessary but cleaner)
 */
.replace(/ id="/g, " className=\"")

/**
 * remove height & width
 */
.replace(/ (height|width)="[^"]+"/g, "")

/**
 * camelcase props
 * fill-opacity => fillOpacity
 */
.replace(/ \w+(-(\w))\w+="/g, (a, b, c) => {
    return a.replace(b, c.toUpperCase())
})

/** SVG ready */

/** updating existing react component */

/**
 * split by marker
 */
const destructuredComponent = oldComponent
.split(new RegExp("\/\/ *" + MARKER_COMMENT,"g"))

/**
 * keep before and after markers
 */
const newComponent = [
    destructuredComponent[0],
    "\n\n" + newSvgText + "\n",
    ...destructuredComponent.slice(2)
]

/**
 * to text with markers
 */
.join("// " + MARKER_COMMENT)

/* React component ready */
//console.log("------------------\nNEW COMPONENT:\n\n", newComponent)

/* WRITE FILE */
writeFileSync(
    resolve(
        __dirname,
        REACT_COMPONENT_PATH
    ),
    newComponent,
    {encoding:"utf-8"}
)

/* SUCCESS */

console.log("Logo updated, check " + resolve(
    __dirname,
    REACT_COMPONENT_PATH
))