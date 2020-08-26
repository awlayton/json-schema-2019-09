/**
 * Type definitions for JSON Schema 2019-09
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
 * JSON Schema 2019-09
 * Draft 08
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02}
 */

/**
 * Primitive type
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.1}
 */
export type JSONSchema8TypeName =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array'
  | 'null'
export type JSONSchema8Type =
  | JSONSchema8Type[]
  | boolean
  | number
  | null
  | object
  | string

/**
 * Meta schema
 *
 * Recommended values:
 * - 'https://json-schema.org/schema#'
 * - 'https://json-schema.org/hyper-schema#'
 * - 'https://json-schema.org/draft/2019-09/schema#'
 * - 'https://json-schema.org/draft/2019-09/hyper-schema#'
 *
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-5}
 */
export type JSONSchema8Version = string

/**
 * Allow only standard defined values,
 * or allowed any values allowed (i.e., custom values where allowed by spec)
 */
export type SchemaStrictness = 'defined' | 'allowed'

/**
 * JSON Schema 2019-09
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02}
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02}
 */
export type JSONSchema8Definition<S extends SchemaStrictness = 'allowed'> =
  | JSONSchema8<S>
  | boolean
export type JSONSchema8<S extends SchemaStrictness = 'allowed'> =
  | JSONSchema8BaseSchema<S>
  | JSONSchema8TypeSchema<S>
  | JSONSchema8NullSchema<S>
  | JSONSchema8NumericSchema<S>
  | JSONSchema8StringSchema<S>
  | JSONSchema8ArraySchema<S>
  | JSONSchema8ObjectSchema<S>
  | JSONSchema8EnumSchema<S>
  | JSONSchema8ConstSchema<S>
  | JSONSchema8TypeArraySchema<S>

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3}
 */
export type DefinedFormat =
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.1}
   */
  | 'date-time'
  | 'date'
  | 'time'
  | 'duration'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.2}
   */
  | 'email'
  | 'idn-email'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.3}
   */
  | 'hostname'
  | 'idn-hostname'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.4}
   */
  | 'ipv4'
  | 'ipv6'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.5}
   */
  | 'uri'
  | 'uri-reference'
  | 'iri'
  | 'iri-reference'
  | 'uuid'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.6}
   */
  | 'uri-template'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.7}
   */
  | 'json-pointer'
  | 'relative-json-pointer'
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7.3.8}
   */
  | 'regex'

export interface JSONSchema8BaseSchema<
  S extends SchemaStrictness = 'allowed',
  T extends JSONSchema8Type = JSONSchema8Type
> {
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.2.2}
   */
  $id?: string

  /**
   * @see {@link https://json-schema.org/draft/2019-09/json-schema-core.html#anchor}
   */
  $anchor?: string

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
  $recursiveAnchor?: boolean

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.1}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-8.1.1}
   */
  $schema?: JSONSchema8Version
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
    [key: string]: JSONSchema8Definition<S>
  }
  /**
   * @deprecated Use @see $defs
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#appendix-A}
   */
  definitions?: {
    [key: string]: JSONSchema8Definition<S>
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
  if?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.2}
   */
  then?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.3}
   */
  else?: JSONSchema8Definition<S>

  /**
   * Combining subschemas with boolean logic
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1}
   */
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.1}
   */
  allOf?: JSONSchema8Definition<S>[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.2}
   */
  anyOf?: JSONSchema8Definition<S>[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.3}
   */
  oneOf?: JSONSchema8Definition<S>[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.1.4}
   */
  not?: JSONSchema8Definition<S>

  /**
   * The standard formats all only apply to type: 'string'
   * but the spec allows it on any type so I put it here.
   *
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-7}
   */
  format?: S extends 'defined' ? DefinedFormat : string

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
  default?: T
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
  examples?: T[]
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.1]
 */
export interface JSONSchema8TypeSchema<
  S extends SchemaStrictness = 'allowed',
  T extends JSONSchema8Type = JSONSchema8Type
> extends JSONSchema8BaseSchema<S, T> {
  type: JSONSchema8TypeName
}
/**
 * @todo How to have TS only intersect the included types?
 */
export type JSONSchema8TypeArraySchema<
  S extends SchemaStrictness = 'allowed'
> = {
  type: JSONSchema8TypeName[]
} & Omit<JSONSchema8NullSchema<S>, 'type'> &
  Omit<JSONSchema8NumericSchema<S>, 'type'> &
  Omit<JSONSchema8StringSchema<S>, 'type'> &
  Omit<JSONSchema8ArraySchema<S>, 'type'> &
  Omit<JSONSchema8ObjectSchema<S>, 'type'>
export interface JSONSchema8NullSchema<S extends SchemaStrictness = 'allowed'>
  extends JSONSchema8TypeSchema<S> {
  type: 'null'
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.2}
 */
export interface JSONSchema8EnumSchema<S extends SchemaStrictness = 'allowed'>
  extends JSONSchema8BaseSchema<S> {
  enum: JSONSchema8Type[]
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.1.3}
 */
export interface JSONSchema8ConstSchema<S extends SchemaStrictness = 'allowed'>
  extends JSONSchema8BaseSchema<S> {
  const: JSONSchema8Type
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.2}
 */
export interface JSONSchema8NumericSchema<
  S extends SchemaStrictness = 'allowed'
> extends JSONSchema8TypeSchema<S, number> {
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
 * @see {@link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.8.3}
 */
type DefinedEncoding =
  /**
   * @see {@link https://tools.ietf.org/html/rfc2045#section-6.1}
   */
  | '7bit'
  | '8bit'
  | 'binary'
  | 'quoted-printable'
  // | 'base64'
  /**
   * @see {@link https://tools.ietf.org/html/rfc4648}
   */
  | 'base16'
  | 'base32'
  | 'base64'

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.3}
 */
export interface JSONSchema8StringSchema<
  S extends SchemaStrictness = 'allowed'
> extends JSONSchema8TypeSchema<S, string> {
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
  contentEncoding?: S extends 'defined' ? DefinedEncoding : string
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8.4}
   */
  contentMediaType?: string
  /**
   * @see {@link  https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-8.5}
   */
  contentSchema?: JSONSchema8
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.4}
 */
export interface JSONSchema8ArraySchema<S extends SchemaStrictness = 'allowed'>
  extends JSONSchema8TypeSchema<S, JSONSchema8Type[]> {
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
  items?: JSONSchema8Definition<S> | JSONSchema8Definition<S>[]
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.2}
   */
  additionalItems?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.3}
   */
  unevaluatedItems?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.1.4}
   */
  contains?: JSONSchema8<S>
}

/**
 * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#section-6.5}
 */
export interface JSONSchema8ObjectSchema<
  S extends SchemaStrictness = 'allowed'
> extends JSONSchema8TypeSchema<S, object> {
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
    [key: string]: JSONSchema8Definition<S>
  }
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.2}
   */
  patternProperties?: {
    [key: string]: JSONSchema8Definition<S>
  }
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.3}
   */
  additionalProperties?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.4}
   */
  unevaluatedProperties?: JSONSchema8Definition<S>
  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.3.2.5}
   */
  propertyNames?: JSONSchema8Definition<S>

  /**
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-02#section-9.2.2.4}
   */
  dependentSchemas?: {
    [key: string]: JSONSchema8Definition<S>
  }

  /**
   * @deprecated Use @see dependentSchemas or @see dependentRequired
   * @see {@link https://tools.ietf.org/html/draft-handrews-json-schema-validation-02#appendix-A}
   */
  dependencies?: {
    [key: string]: JSONSchema8Definition<S> | string[]
  }
}
