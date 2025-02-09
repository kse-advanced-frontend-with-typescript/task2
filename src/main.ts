import { uuidsToAdd } from './items-to-add.js'
import { fetchItem } from './fetch-item.js'
import { currencyConverter } from './currency-converter.js'
import { Item } from './types.js'

const getCartTotal = async (uuids: any): any => {
  const result = await Promise.all(uuids.map(uuid => fetchItem(uuid)))

  const itemsWithPrice = result.map(item => {
    return {
      value: item.price.value * item.quantity,
      currency: item.price.currency,
    }
  })

  const total = itemsWithPrice.reduce(
    (acc, price) => {
      return {
        value: currencyConverter(price.value, price.currency) + acc.value,
        currency: acc.currency,
      }
    },
    { value: 0, currency: 'USD' },
  )

  return {
    ...total,
  }
}

getCartTotal(uuidsToAdd).then(console.log)

const selectItemByUuid = (items: any[], uuid: ItemUuidType<Item>): any => {
  const index = items.findIndex(item => item.uuid === uuid)
  if (index === -1) {
    throw new Error('Not found')
  }

  return items[index]
}

const item = selectItemByUuid(
  [
    {
      uuid: '123-123-123-123-123',
      price: {
        value: 1,
        currency: 'USD',
      },
      name: 'Toy',
    },
  ],
  '123-123-123-123-123',
)

console.log(item)

type ItemUuidType<T extends any> = any
