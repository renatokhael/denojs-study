function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data))

        return "File writting to " + path;

    } catch(e) {
        return e.message
    }
}

console.log(writeJson("./data.json", { hello: "world"}))