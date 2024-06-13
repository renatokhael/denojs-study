import { MongoClient} from 'npm:mongodb@6.1.0'

const client = new MongoClient('mongodb://localhost:27017');

await client.connect()

interface DinossaurSchema {
    name: string;
    skills: string[]
}

const db = client.db("animals")

const dinosaurs = db.collection<DinosaurSchema>("dinosaurs")

await dinosaurs.insertOne({
    name: "deno",
    skills: ["dancing", "hiding"]
})

const allDinosaurs = await dinosaurs.find({ name: "deno" }).toArray()

console.log(allDinosaurs)

client.close()

