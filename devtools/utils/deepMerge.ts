import lodashMerge from 'lodash-es/merge'

/**
 * @example
 * deepMerge(defaultConfigOptions, config)
 */
export default function deepMerge(defaultValues, newValues) {
  return lodashMerge(defaultValues, newValues)
}
