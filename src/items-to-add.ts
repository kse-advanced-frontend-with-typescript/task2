import crypto from 'crypto'

export const uuidsToAdd = new Array(20).fill(null).map(() => crypto.randomUUID())
