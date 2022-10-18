import { EditableDatagrid } from '@react-admin/ra-editable-datagrid'
import React from 'react'
import { List, TextField, useGetList, useResourceContext } from 'react-admin'
import ResourceForm, { ResourceFormSideEffect } from './ResourceForm'

const ResourceList = (props) => {
  const resource = useResourceContext()
  const { data, isSuccess } = useGetList(`${resource}`, {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'DESC' },
  })
  const fields = isSuccess && Object?.keys(data[4])
  const mutationMode = 'optimistic'
  const frozenFields = ['id', 'url']

  const sortedFields = fields && [
    ...fields?.filter((item) => frozenFields.includes(item)),
    ...fields?.filter((item) => !frozenFields.includes(item)),
  ]

  return (
    <List
      hasCreate
      empty={false}
      perPage={25}
      sort={{ field: 'id', order: 'DESC' }}
    >
      <EditableDatagrid
        rowClick="edit"
        mutationMode={mutationMode}
        createForm={
          <ResourceFormSideEffect dataFields={sortedFields} {...props} />
        }
        editForm={<ResourceForm dataFields={sortedFields} />}
      >
        {isSuccess &&
          sortedFields?.map((field, i) => (
            <TextField key={`${field}-${i}`} source={field} />
          ))}
      </EditableDatagrid>
    </List>
  )
}

export default ResourceList
