import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import tender from './schemas/tender'
import subscribe from './schemas/Subscribe'
import company from './schemas/company'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,tender,subscribe,company,social],
}
