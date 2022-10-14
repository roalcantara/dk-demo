const sendData = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
  url: string,
  data: unknown = {}
) => {
  const opts: RequestInit = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
  if (method !== 'GET' && method !== 'HEAD') {
    opts.body = JSON.stringify(data) // body data type must match "Content-Type" header
  }
  const response = await fetch(url, opts)

  return response.json() // parses JSON response into native JavaScript objects
}

export const getData = (url: string, data = null) => sendData('GET', url, data)
export const putData = (url: string, data = {}) => sendData('PUT', url, data)
export const postData = (url: string, data = {}) => sendData('POST', url, data)
export const deleteData = (url: string, data = {}) =>
  sendData('DELETE', url, data)
