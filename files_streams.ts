// receiving a file


const fileResponse = await fetch("https://deno.land/logo.svg")

if (fileResponse.body) {
    const file = await Deno.open("./logo.svg", { write: true, create: true})
    await fileResponse.body.pipeTo(file.writable)
}