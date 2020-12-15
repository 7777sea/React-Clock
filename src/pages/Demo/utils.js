
export function array(length) {
    return Array.from({length}).map((v, k) => k).map( x => x + 1)
}

