//write

await Deno.writeTextFile('./hello.txt', 'Hello World!')

console.log("File writting to ./hello.tsx")

// append

await Deno.writeTextFile('./hello.txt', "\n\nThis text will be appended", {
    append: true
})