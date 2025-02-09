type GetArrayType<A extends any> = any

export function getRandomItemFromArray<A extends any[]>(items: A): GetArrayType<A> {
  return items[Math.floor(Math.random() * items.length)]
}
