const kv = await Deno.openKv()

const prefs = {
    username:"ada",
    theme: "dark",
    language: "pt-BR"
}

const result = await kv.set(["preferences","ada"], prefs)



console.log(result)
