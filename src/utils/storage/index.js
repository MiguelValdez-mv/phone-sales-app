export function saveExpiringItem(key, value, ttl = 3600000) {
  const now = new Date().getTime()
  const item = { value, expiry: now + ttl }

  localStorage.setItem(key, JSON.stringify(item))
}

export function loadExpiringItem(key) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) return null

  const { value, expiry } = JSON.parse(itemStr)
  if (Date.now() > expiry) {
    localStorage.removeItem(key)
    return null
  }

  return value
}
