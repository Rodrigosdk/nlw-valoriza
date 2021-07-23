import { EntityRepository, Repository } from 'typeorm'
import {Tag} from "../model/Tag"

@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag>{}