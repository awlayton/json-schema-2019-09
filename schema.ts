/**
 * Type definitions for JSON Schema 7.0
 * Definitions by: Boris Cherny <https://github.com/bcherny>
 *                 Cyrille Tuzi <https://github.com/cyrilletuzi>
 *                 Lucian Buzzo <https://github.com/lucianbuzzo>
 *                 Roland Groza <https://github.com/rolandjitsu>
 *                 Alex Layton <https://github.com/awlayton>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * TypeScript Version: 3.7
 * @license MIT
 *
 * Modified from source obtained here
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/68be545f66fa6f7782a71fc8cf9248adf4d96904/types/json-schema/index.d.ts#L510}
 */

/**
 * JSON Schema 7
 * Draft 07
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02}
 */

/**
 * Primitive type
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.1}
 */
export type JSONSchema7TypeName =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array'
  | 'null'
export type JSONSchema7Type =
  | JSONSchema7Type[]
  | boolean
  | number
  | null
  | object
  | string

/**
 * Meta schema
 *
 * Recommended values:
 * - 'http://json-schema.org/schema#'
 * - 'http://json-schema.org/hyper-schema#'
 * - 'http://json-schema.org/draft-07/schema#'
 * - 'http://json-schema.org/draft-07/hyper-schema#'
 * - 'http://json-schema.org/draft/2019-09/schema'
 *
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-5}
 */
export type JSONSchema7Version = string

/**
 * JSON Schema v7
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02}
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02}
 */
export type JSONSchema7Definition = JSONSchema7 | boolean
export type JSONSchema7 =
  | JSONSchema7BaseSchema
  | JSONSchema7NullSchema
  | JSONSchema7NumericSchema
  | JSONSchema7StringSchema
  | JSONSchema7ArraySchema
  | JSONSchema7ObjectSchema
  | JSONSchema7EnumSchema
  | JSONSchema7ConstSchema
  | JSONSchema7TypeArraySchema

export interface JSONSchema7BaseSchema {
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.2}
   */
  $id?: string

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.4}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.4.1}
   */
  $ref?: string
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.4.2}
   */
  $recursiveRef?: '#'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.4.2.2}
   */
  $recursiveAnhor?: boolean

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.1}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.1.1}
   */
  $schema?: JSONSchema7Version
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.1.2}
   */
  $vocabulary?: {
    [key: string]: boolean
  }

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.5}
   */
  $defs?: {
    [key: string]: JSONSchema7Definition
  }
  /**
   * @deprecated Use @see $defs
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#appendix-A}
   */
  definitions?: {
    [key: string]: JSONSchema7Definition
  }

  /**
   * @todo Allow $comment _everywhere_
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.3}
   */
  $comment?: string

  /**
   * Combining subschemas conditionally
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.1}
   */
  if?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.2}
   */
  then?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.3}
   */
  else?: JSONSchema7Definition

  /**
   * Combining subschemas with boolean logic
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.1}
   */
  allOf?: JSONSchema7Definition[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.2}
   */
  anyOf?: JSONSchema7Definition[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.3}
   */
  oneOf?: JSONSchema7Definition[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.4}
   */
  not?: JSONSchema7Definition

  /**
   * The standard formats all only apply to type: 'string'
   * but the spec allows it on any type so I put it here.
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7}
   */
  format?: string

  /**
   * Meta-data annotation of schemas
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.1}
   */
  title?: string
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.1}
   */
  description?: string
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.2}
   */
  default?: JSONSchema7Type
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.3}
   */
  deprecated?: boolean
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.4}
   */
  readOnly?: boolean
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.4}
   */
  writeOnly?: boolean
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-9.5}
   */
  examples?: JSONSchema7Type[]
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.1]
 */
export interface JSONSchema7TypeSchema extends JSONSchema7BaseSchema {
  type: JSONSchema7TypeName
}
/**
 * @todo How to have TS only intersect the included types?
 */
export type JSONSchema7TypeArraySchema = { type: JSONSchema7TypeName[] } & Omit<
  JSONSchema7NullSchema,
  'type'
> &
  Omit<JSONSchema7NumericSchema, 'type'> &
  Omit<JSONSchema7StringSchema, 'type'> &
  Omit<JSONSchema7ArraySchema, 'type'> &
  Omit<JSONSchema7ObjectSchema, 'type'>
export interface JSONSchema7NullSchema extends JSONSchema7TypeSchema {
  type: 'null'
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.2}
 */
export interface JSONSchema7EnumSchema extends JSONSchema7BaseSchema {
  enum: JSONSchema7Type[]
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.3}
 */
export interface JSONSchema7ConstSchema extends JSONSchema7BaseSchema {
  const: JSONSchema7Type
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2}
 */
export interface JSONSchema7NumericSchema extends JSONSchema7TypeSchema {
  type: 'number' | 'integer'

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2.1}
   */
  multipleOf?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2.2}
   */
  maximum?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2.3}
   */
  exclusiveMaximum?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2.4}
   */
  minimum?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2.5}
   */
  exclusiveMinimum?: number
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3}
 */
export interface JSONSchema7StringSchema extends JSONSchema7TypeSchema {
  type: 'string'

  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3.1}
   */
  maxLength?: number
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3.2}
   */
  minLength?: number
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3.3}
   */
  pattern?: string

  /**
   * @todo Should there be a separate interface for string-encoded schema?
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8}
   */
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8.3}
   */
  contentEncoding?: string
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8.4}
   */
  contentMediaType?: string
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8.5}
   */
  contentSchema?: JSONSchema7
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4}
 */
export interface JSONSchema7ArraySchema extends JSONSchema7TypeSchema {
  type: 'array'

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4.1}
   */
  maxItems?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4.2}
   */
  minItems?: number
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4.3}
   */
  uniqueItems?: boolean
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4.4}
   */
  maxContains?: number

  /**
   * Keywords for applying subschemas to arrays
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.1}
   */
  items?: JSONSchema7Definition | JSONSchema7Definition[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.2}
   */
  additionalItems?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.3}
   */
  unevaluatedItems?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.4}
   */
  contains?: JSONSchema7
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5}
 */
export interface JSONSchema7ObjectSchema extends JSONSchema7TypeSchema {
  type: 'object'

  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5.1}
   */
  maxProperties?: number
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5.2}
   */
  minProperties?: number
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5.3}
   */
  required?: string[]
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5.4}
   */
  dependentRequired?: {
    [key: string]: string[]
  }

  /**
   * Keywords for applying subschemas to objects
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.1}
   */
  properties?: {
    [key: string]: JSONSchema7Definition
  }
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.2}
   */
  patternProperties?: {
    [key: string]: JSONSchema7Definition
  }
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.3}
   */
  additionalProperties?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.4}
   */
  unevaluatedProperties?: JSONSchema7Definition
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.5}
   */
  propertyNames?: JSONSchema7Definition

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.4}
   */
  dependentSchemas?: {
    [key: string]: JSONSchema7Definition
  }

  /**
   * @deprecated Use @see dependentSchemas or @see dependentRequired
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#appendix-A}
   */
  dependencies?: {
    [key: string]: JSONSchema7Definition | string[]
  }
}
