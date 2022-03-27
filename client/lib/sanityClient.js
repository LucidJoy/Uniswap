import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'n5iwg4ws',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skHWEKrTD4yG4KAqwaNEEPLIQKhnnHSqWuQR5okRSo2e88WVygQc7QWc4MK6vD8zPrUGNtfxKBBc6ulnC5fKBQpp3vFenZKceVIW7qmoAM9HV7n2deVy5VwzHxiBAkjkIlu3WDuSbKAB2sstdMgM3qF2SaLk8cGv7mwuyMxpETXM0HxN51vF',
  useCdn: false,
})
