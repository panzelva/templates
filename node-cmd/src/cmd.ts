import { options } from "yargs"

const { argv } = options({ name: { type: "string", demandOption: true } })

console.log(`hello ${argv.name}!`)
