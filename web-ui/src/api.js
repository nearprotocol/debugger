const API_URL = process.env.REACT_APP_API_URL

function handleErrors(response) {
  if (response.status !== 200) {
    throw response
  }
  return response;
}

export function listBlocks() {
  return fetch(`${API_URL}/list_blocks`)
    .then(handleErrors)
    .then((response) => response.json())
}

export function getBlockByIndex(blockIndex) {
  return fetch(`${API_URL}/get_block_by_index/${blockIndex}`)
    .then(handleErrors)
    .then((response) => response.json())
}

export function getTransactionInfo(hash) {
  return fetch(`${API_URL}/get_transaction_info/${hash}`)
    .then(handleErrors)
    .then((response) => response.json())
}

export function getContractInfo(name) {
  return fetch(`${API_URL}/get_contract_info/${name}`)
    .then(handleErrors)
    .then((response) => response.json())
}
