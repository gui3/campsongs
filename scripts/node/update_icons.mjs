/**
 * This script alows formatting a raw svg logo (from figma)
 * into an existing react component
 */

import { readdirSync, readFileSync, writeFileSync } from "fs"
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const RAW_SVG_PATH = "../../global/icons/"
const REACT_COMPONENT_PATH = "../../global/icons/_template_icon.jsx"
const MARKER_COMMENT = "PASTE_SVG_HERE"

const __dirname = dirname(fileURLToPath(import.meta.url))

const base_folder_path = resolve(__dirname, RAW_SVG_PATH)

readdirSync(base_folder_path, {encoding: "utf-8"})
.forEach((filename) => {
    if (filename.match(/\.svg$/)) {

        const absolute_path = resolve(base_folder_path, filename)
        const icon_name = filename.replace(/\.svg$/, "")
        const new_path = base_folder_path + "/icon_" + icon_name + ".jsx"

        console.log("creating " + icon_name + "...")

        const svg = readFileSync(
            absolute_path // path to raw svg logo
        , {encoding: "utf-8"})
    
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

        /**
         * end lines
         */
        .replace(/></g, ">\n<")
    
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
            new_path,
            newComponent,
            {encoding:"utf-8"}
        )
    
        /* SUCCESS */
    
        console.log("Icon updated : " + new_path)
    }

})
