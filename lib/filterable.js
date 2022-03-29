import _ from 'lodash'

export function filterTokens(tokens, filters, sort) {
  const filteredTokens = _(tokens)
    .sortBy(sort?.fn)
    .filter((token) => {
      const activeFilters = _.chain(filters)
        .toPairs()
        .map(([key, values]) => [
          key,
          Object.entries(values)
            .filter((v) => v[1])
            .map((v) => v[0]),
        ])
        .filter(([key, values]) => values.length)
        .value()

      if (activeFilters.length) {
        const attrs = traitsToObject(token)

        return (
          activeFilters.filter(([name, active]) => active.includes(attrs[name]))
            .length === activeFilters.length
        )
      } else {
        return true
      }
    })

  return sort?.reverse ? filteredTokens.reverse().value() : filteredTokens.value()
}

export function traitsToObject(token) {
  return _.chain(token.data.attributes)
    .map(({ trait_type, value }) => [trait_type, value])
    .fromPairs()
    .value()
}

export function extractAttributes(tokens) {
  return _.chain(tokens)
    .flatMap('data.attributes')
    .filter(({ trait_type }) => trait_type !== 'Number')
    .map(({ trait_type, value }) => [trait_type, value])
    .uniqBy(([trait, value]) => [trait, value].join())
    .groupBy(_.first)
    .toPairs()
    .map((pair) => [pair[0], _.chain(pair).last().map(_.last).sortBy().value()])
    .map(([name, values]) => ({ name, values }))
    .value()
}
