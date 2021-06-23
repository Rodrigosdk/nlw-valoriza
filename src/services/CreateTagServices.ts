import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repository/TagsRepository";

export class CreateTagServices {
    async execute( name: string) {
        const repository = getCustomRepository(TagsRepository)

        if (!name) {
            throw new Error("Name not found")
        }

        const nameAlreadyExists = await repository.findOne({ name })

        if (nameAlreadyExists) {
            throw new Error("Name already exists")
        }

        const tag = repository.create({ name})
        await repository.save(tag)

        return tag
    }
}