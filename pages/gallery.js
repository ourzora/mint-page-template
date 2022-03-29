import Link from 'next/link'
import { utils } from 'ethers'
import { useState, useMemo, useCallback } from 'react'
import { Address, ipfsImage, getWethSaleFromLogs } from '@lib/helpers'

import { gql } from '@apollo/client'
import client from '@lib/client'
import { filterTokens, extractAttributes } from '@lib/filterable'

import { contractAddress, baseUrl } from '@lib/constants'

import { Box, Text } from '@components/primitives'
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

const GalleryPage = ({ tokens }) => {
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

  return (
    <Box>
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
                      padding: '3rem 0 3rem',
                    }}
                  >
                    <Text>{token.data.name}</Text>
                    <hr />
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
                    <hr />
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
  let props = { tokens: [] }
  const cleanContractAddress = utils.getAddress(contractAddress)
  const tokenDataReq = await client.query({
    query: gql`
      query {
        Token(
          where: {
            address: { _eq: "${cleanContractAddress}" }
          }
          order_by: { tokenId: asc }
          limit: 100
        ) {
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
    `,
  })

  console.log({ tokenDataReq })

  let tokenData = tokenDataReq.data['Token'].map((token) => {
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
        // console.log({ wethSaleLog });
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
