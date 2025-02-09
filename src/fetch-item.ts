import { StoreAccessor } from './types.js'
import { getRandomItemFromArray } from './get-random-item-from-array.js'

export const fetchItem: StoreAccessor = uuid =>
  new Promise(resolve => {
    const storeItems = ['tv', 'phone', 'car', 'potato']
    const currencies: any[] = ['UAH', 'USD', 'EUR']

    resolve({
      name: getRandomItemFromArray(storeItems),
      price: {
        value: Math.round(Math.random() * 100),
        currency: getRandomItemFromArray(currencies),
      },
      uuid: uuid,
      quantity: Math.round(Math.random() * 4) + 1,
    })
  })
