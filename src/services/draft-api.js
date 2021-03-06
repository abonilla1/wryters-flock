import tokenService from "../services/tokenService"
const BASE_URL = '/api/drafts'

export function create(entry) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    body: JSON.stringify(entry)
  }, { mode: "cors" })
    .then(res => res.json());
}