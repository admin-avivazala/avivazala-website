export const token = process.env.NEXT_SANITY_API_READ_TOKEN

if (!token) {
  throw new Error('Missing NEXT_SANITY_API_READ_TOKEN')
}