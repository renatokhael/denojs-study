// read

const text = await Deno.readTextFile('./person.json')

console.log(text)