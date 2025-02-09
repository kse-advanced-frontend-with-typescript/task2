export const currencyConverter = (price, currency) => {
  const currencyRate: any = {
    USD: 1,
    EUR: 0.9,
    UAH: 41,
  }

  return price * currencyRate[currency]
}
