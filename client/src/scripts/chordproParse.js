
const char_tokens = {
    "[": "SOA", // start of annotation
    "]": "EOA", // end of annotation
    "{": "SOT", // start of tag
    "}": "EOT", // end of tag
    ":": "KVD", // key-value delimiter
    "-": "KID", // key id delimiter
    //"\t": "SPC", // spacing
    //" ": "SPC",
    "\n": "ELN", // end line
    "\r": "ELN",
}



function parse (script) {
    let cursor = 0
    let head = 0
    const end = script.length
    const ast = []
    const parse_stack = []

    function consume () {
        return script[cursor++]
    }

    function peek (nb = 1) {
        return script[cursor + nb]
    }

    function tokenize (char) {
        return [
            char_tokens[char] || "TXT", // txt = plain text token
            char
        ]
    }

    function shift () {
        return tokenize(consume())
    }

    function lookahead() {
        return tokenize(peek())
    }

    function reduce () {
        
    }

    function next () {
        
    }


    while (cursor < end) {
        ast.push(next())
    }
}


/**
 * tokenize
 */
function lexer (script) {
    let cursor = 0
    const end = script.length
    const tokens = []

    while (cursor < end) {
        const char = script[cursor]
        tokens.push([
            token_types[char] || "LIT", // litteral
            char
        ])
    }

    return tokens
}

/**
 * parse
 */
function parse (script) {

}

