import Link from 'next/link'
import { utils } from 'ethers'
import { useState, useMemo, useCallback } from 'react'
import { Address, ipfsImage, getWethSaleFromLogs } from '@lib/helpers'

import { gql } from '@apollo/client'
import client from '@lib/client'
import { filterTokens, extractAttributes } from '@lib/filterable'

import { title, descriptionText, contractAddress, baseUrl } from '@lib/constants'

import { Box, Flex, Text } from '@components/primitives'
import { Button, ButtonSet } from '@components/Button'

import _ from 'lodash'

const sortMethods = {
  default: { label: 'ID', fn: (o) => Number(o.id), reverse: false },
  priceAsc: {
    label: 'PRICE ↓',
    fn: (o) => Number(o.transferEvents[0].transaction.value),
    reverse: true,
  },
  priceDesc: {
    label: 'PRICE ↑',
    fn: (o) => Number(o.transferEvents[0].transaction.value),
    reverse: false,
  },
  rarityDesc: {
    label: 'RARITY',
    fn: 'rarity',
    reverse: false,
  },
}

function AttributeFiltersCheckboxes({ data, setAttributeSelected }) {
  return data.map((filter) => (
    <Box key={filter.name}>
      <strong>{filter.name.toUpperCase()}</strong>
      <Box
        css={{
          label: {
            cursor: 'pointer',
            marginRight: '2rem',
          },
        }}
      >
        {filter.values.map(({ value, checked }) => (
          <label
            key={value}
            style={{
              textUnderlineOffset: '20%',
              textDecoration: checked ? 'underline' : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={({ target }) => {
                setAttributeSelected(
                  filter.name,
                  value,
                  target.type === 'checkbox' ? target.checked : target.value
                )
              }}
            />
            <span>{value ? value.toUpperCase() : '[EMPTY]'}</span>
          </label>
        ))}
      </Box>
      <br />
    </Box>
  ))
}

const GalleryPage = ({ tokens, totalSupply }) => {
  const [sortKey, setSortKey] = useState('default')
  const sort = useMemo(() => sortMethods[sortKey], [sortKey])

  const attributeFilters = useMemo(() => extractAttributes(tokens), [tokens])

  const [filters, setFilters] = useState({})
  const [filterNonce, setFilterNonce] = useState(0)

  const updateFilters = useCallback(
    (updatedFilters) => {
      setFilters(updatedFilters)
      setFilterNonce(filterNonce + 1)
    },
    [filterNonce]
  )

  const isAttributeSelected = useCallback(
    (name, value) => {
      return _.get(filters, [name, value]) === true
    },
    [filters]
  )

  const setAttributeSelected = useCallback(
    (name, value, selected) => {
      updateFilters({
        ...filters,
        [name]: { [value]: selected },
      })
    },
    [filters, updateFilters]
  )

  const attributeFiltersCheckboxes = useMemo(() => {
    return _.chain(attributeFilters)
      .map(({ name, values }) => ({
        name,
        values: _.chain(values)
          .map((value) => ({
            value,
            checked: isAttributeSelected(name, value),
          }))
          .value(),
      }))
      .value()
  }, [attributeFilters, isAttributeSelected])

  const filteredTokens = useMemo(
    () => filterTokens(tokens, filters, sort),
    [tokens, filters, sort]
  )

  if (!tokens && !errorMessage) {
    return (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      ></Box>
    )
  }

  const latestSales = _(tokens)
    .filter((o) => o.transferEvents[0].transaction.value > 0)
    .sortBy((o) => +new Date(o.transferEvents[0].transaction.blockTimestamp))
    .reverse()
    .value()
  const latestSale = latestSales[0].transferEvents[0].transaction.value
  const highestSales = _(tokens)
    .sortBy((o) => Number(o.transferEvents[0].transaction.value))
    .reverse()
    .value()
  const highestSale = highestSales[0].transferEvents[0].transaction.value

  console.log(tokens)

  return (
    <Box>
      <Box
        css={{
          padding: '3rem',
        }}
      >
        <Text center>
          <h1>{title}</h1>
          <br />
          {descriptionText}
        </Text>
        <Flex>
          <Text center>
            {totalSupply}
            <br />
            items
          </Text>
          <Text center>
            {utils.formatEther(latestSale, 'ether')}Ξ<br />
            Last sale
          </Text>
          <Text center>
            {utils.formatEther(highestSale, 'ether')}Ξ<br />
            Highest sale
          </Text>
        </Flex>
      </Box>

      <Box css={{ padding: '0rem 3rem 3rem' }}>
        <Text center>
          <strong>Latest Sales</strong>
        </Text>
        <Flex
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          }}
        >
          {latestSales.map((t) => (
            <Box css={{ border: '1px solid gray', padding: '1rem' }}>
              {utils.formatEther(t.transferEvents[0].transaction.value, 'ether')}Ξ
              <br />
              {new Date(t.transferEvents[0].transaction.blockTimestamp).toLocaleString(
                'en-US',
                {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                }
              )}
            </Box>
          ))}
        </Flex>
      </Box>
      <Box
        key="grid"
        css={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '380px 1fr',
          gap: '1rem',
          '@lg': {
            gridTemplateColumns: '1fr 3fr',
          },
          '@sm': {
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box
          key="sidebar"
          css={{
            display: 'grid',
            color: '$black',
            background: '$white',
            padding: '3rem 3rem 8rem',
          }}
        >
          <Box>
            <strong>SORT</strong>
            <ButtonSet center={false}>
              {Object.entries(sortMethods).map(([key, { label }]) => (
                <Button
                  key={key}
                  link
                  active={sort.label === label}
                  onClick={() => setSortKey(key)}
                  css={{ marginBottom: '0 !important' }}
                >
                  {label}
                </Button>
              ))}
            </ButtonSet>
            <br />
            <br />
            <AttributeFiltersCheckboxes
              key={filterNonce}
              data={attributeFiltersCheckboxes}
              setAttributeSelected={setAttributeSelected}
            />
          </Box>
        </Box>
        <Box
          key="images"
          css={{
            padding: '3rem 3rem 8rem',
            position: 'sticky',
            bottom: '3rem',
            alignSelf: 'start',
          }}
        >
          <Box>
            <Box
              key="internal-grid"
              css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {filteredTokens.map((token) => (
                <Box
                  key={'token_' + token.id}
                  css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    img: {
                      cursor: 'pointer',
                      objectFit: 'contain',
                      maxHeight: '80vh',
                      maxWidth: '100%',
                      width: 'auto',
                    },
                  }}
                >
                  <Link href={'/token/' + token.id}>
                    <img loading="lazy" src={ipfsImage(token.data.image)} />
                  </Link>
                  <Box
                    css={{
                      padding: '1rem 0 2rem',
                    }}
                  >
                    <Text>{token.data.name}</Text>
                    <dl>
                      <dd>LAST SOLD:</dd>
                      <dt>
                        {token.transferEvents[0].transaction.value > 0 ? (
                          <>
                            {utils.formatEther(
                              token.transferEvents[0].transaction.value,
                              'ether'
                            )}
                            Ξ
                          </>
                        ) : (
                          '—'
                        )}
                      </dt>
                      <dd>RARITY:</dd>
                      <dt>
                        #{token.rarityRank} ({token.rarity.toFixed(4)})
                      </dt>
                    </dl>
                    <dl>
                      <dd>OWNER:</dd>
                      <dt>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://etherscan.io/address/${token.owner}`}
                        >
                          <Address address={token.owner} />
                        </a>
                      </dt>
                      <dd>MINTER:</dd>
                      <dt>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://etherscan.io/address/${token.minter}`}
                        >
                          <Address address={token.minter} />
                        </a>
                      </dt>
                    </dl>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const cleanContractAddress = utils.getAddress(contractAddress)
  const tokenDataReq = await client.query({
    query: gql`
      query {
        Token_aggregate(
          where: {
            address: { _eq: "${cleanContractAddress}" }
          }
          order_by: { tokenId: asc }
          limit: 1000
        ) {
          aggregate {
            count
          }
          nodes {
            tokenId
            tokenURI
            owner
            minter
            transferEvents {
              from
              to
              transaction {
                value
                hash
                blockTimestamp
                eventLogs {
                  logIndex
                  topics
                  data
                }
              }
            }
          }
        }
      }
    `,
  })

  let props = {
    tokens: [],
    totalSupply: tokenDataReq.data['Token_aggregate'].aggregate.count,
  }

  let tokenData = tokenDataReq.data['Token_aggregate'].nodes.map((token) => {
    const transferEvents = token.transferEvents.map((tx) => {
      if (
        Number(tx.transaction.from) > 0 &&
        Number(tx.transaction.value) > 0 &&
        tx.transaction.eventLogs.length < 3
      ) {
        return tx
      }
      try {
        const wethSaleLog = getWethSaleFromLogs(token, tx.transaction.eventLogs)
        return {
          ...tx,
          transaction: {
            ...tx.transaction,
            value: wethSaleLog ? wethSaleLog.args.price.toString() : 0,
          },
        }
      } catch (e) {
        return tx
      }
    })
    return {
      ...token,
      transferEvents,
    }
  })

  // Localhost fallback
  // if (!tokenData.length) {
  //   tokenData = params.id.split(',').map((id) => ({
  //     tokenId: id,
  //     owner: '0x0000000000000000000000000000000000000000',
  //     minter: '0x0000000000000000000000000000000000000000',
  //     tokenURI: process.env.NEXT_PUBLIC_BASE_URL + '/api/metadata/' + id + '.json',
  //     transferEvents: [],
  //   }));
  // }

  let rarities
  let tokens
  try {
    tokens = await Promise.all(
      tokenData.map(async (token) => {
        const res = await fetch(token.tokenURI)
        const data = await res.json()
        return {
          id: token.tokenId,
          owner: token.owner,
          minter: token.minter,
          data,
          metadataUrl: token.tokenURI,
          transferEvents: token.transferEvents.reverse(),
        }
      })
    )
    tokens = tokens.slice(1) // Remove TOMB

    // Calculate rarity percentages
    let traits = {}
    tokens.forEach((t) => {
      t.data.attributes.forEach((a) => {
        if (!traits[a.trait_type]) traits[a.trait_type] = []
        traits[a.trait_type].push(a.value)
      })
    })
    // Numbers don't count towards rarities
    const traitCounts = Object.entries(traits).map(([k, v]) => ({
      trait: k,
      counts: v.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
      }, {}),
    }))

    rarities = Object.fromEntries(
      traitCounts.map((o) => [
        o.trait,
        Object.fromEntries(
          Object.entries(o.counts).map(([k, v]) => [k, v / traits[o.trait].length])
        ),
      ])
    )

    const allRarities = tokens
      .map((t) => [
        t.id,
        t.data.attributes.reduce((total, next) => {
          return total + rarities[next.trait_type][next.value]
        }, 0),
      ])
      .sort((a, b) => a[1] - b[1])

    props.tokens = tokens.map((t) => {
      const rarity = allRarities.filter((r) => r[0] === t.id)[0]
      return {
        ...t,
        rarity: rarity[1],
        rarityRank: allRarities.indexOf(rarity) + 1,
      }
    })
  } catch (e) {
    console.log(e)
    props.errorMessage = e.message
  }

  return {
    props: {
      ...props,
      rarities,
    },
  }
}

export default GalleryPage
