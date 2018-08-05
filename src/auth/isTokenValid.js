export default function isTokenValid(token) {
  if (!token) {
    return false
  }
  const [_, payload] = token.split(".")
  if (!payload) {
    return false
  }
  try {
    const parsedPayload = JSON.parse(atob(payload))
    return (Date.now() / 1000) < parsedPayload.exp;
  } catch (e) {
    console.log("Error parsing JSON -> ", e)
    return false
  }
}
