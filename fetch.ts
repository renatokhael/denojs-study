const jsonResponse = await fetch("https://api.github.com/users/denoland")
const jsonData = await jsonResponse.json()

console.log(jsonData)


// output html data

const textResponse = await fetch("https://deno.land/")
const textData = await textResponse.text()

console.log(textData)


// output error message

try {
    await fetch("https://does.not.exist/")
} catch (error) {
    console.log(error)
}