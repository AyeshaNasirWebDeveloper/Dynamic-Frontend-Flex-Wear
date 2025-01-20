import { type SchemaTypeDefinition } from 'sanity'
import {productSchema} from './schemaTypes/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}