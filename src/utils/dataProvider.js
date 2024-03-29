import { stringify } from 'query-string'
import { fetchUtils } from 'react-admin'

const apiUrl = 'https://northwind.kvdb.do/'
const httpClient = fetchUtils.fetchJson

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination
    // const { field, order } = params.sort
    const baseurl = `${apiUrl}${resource}`

    const { json } = await httpClient(baseurl)
    let records = []
    const totalDocs = await json.data.length

    if (page === 1) {
      const initialUrl = `${apiUrl}${resource}?limit=${perPage}`
      records = await httpClient(initialUrl)
    } else {
      const skip = perPage * (page - 1)
      const nextUrl = `${apiUrl}${resource}?skip=${skip}&limit=${
        perPage + skip
      }`
      records = await httpClient(nextUrl)
    }
    const formattedRecords = records?.json?.data?.map((item) => ({
      ...item,
      id: item.entityId,
    }))
    return {
      data: formattedRecords,
      total: parseInt(totalDocs),
    }
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}${resource}/${params.id}`).then(({ json }) => ({
      data: json.data,
    })),

  getMany: async (resource) => {
    const url = `${apiUrl}${resource}`
    const { json } = await httpClient(url)
    const formattedRecords = json?.data?.map((item) => ({
      ...item,
      id: item.entityId,
    }))
    return { data: formattedRecords }
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    }
    const url = `${apiUrl}${resource}?${stringify(query)}`

    const { json } = await httpClient(url)
    const formattedRecords = json?.data?.map((item) => ({
      ...item,
      id: item.entityId,
    }))
    return {
      data: formattedRecords,
      total: parseInt(json.data.length),
    }
  },

  create: async (resource, params) => {
    console.log('create', resource, params)
    const data = await fetch(`${apiUrl}${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    })
    const json = await data.json()
    return {
      data: { ...params.data, id: json.entityId },
    }
  },

  update: async (resource, params) => {
    console.log('update', {resource, params})
    const resp = await fetch(`${apiUrl}${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    })
    console.log('resp', resp)
    const json = await resp.json()
    return {
      data: { ...params.data, id: json.entityId },
    }
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    }
    const { json } = await httpClient(
      `${apiUrl}${resource}?${stringify(query)}`,
      {
        method: 'PATCH',
        body: JSON.stringify(params.data),
      },
    )
    const formattedRecords = json?.data?.map((item) => ({
      ...item,
      id: item.entityId,
    }))
    return { data: formattedRecords }
  },

  delete: async (resource, params) => {
    const resp = await fetch(`${apiUrl}${resource}/${params.id}`, {
      method: 'DELETE',
    })
    const json = await resp.json()
    return { data: json }
  },

  deleteMany: async (resource, params) => {
    const query = { filter: JSON.stringify({ id: params.ids }) }
    const resp = await fetch(`${apiUrl}${resource}?${stringify(query)}`, {
      method: 'DELETE',
      body: JSON.stringify(params.data),
    })
    const json = await resp.json()
    return { data: json }
  },
}
