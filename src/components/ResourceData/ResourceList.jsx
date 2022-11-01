import React from 'react'
import {
  Pagination,
  List,
  TextField,
  useGetList,
  useRedirect,
  useResourceContext,
  useTheme,
} from 'react-admin'
import ResourceForm, { ResourceFormSideEffect } from './ResourceForm'
import { EditableDatagrid } from '@react-admin/ra-editable-datagrid'

const ResourceList = (props) => {
  const resource = useResourceContext()
  const theme = useTheme()
  const isDark = theme[0].palette.mode === 'dark'
  const { data, isSuccess, isLoading } = useGetList(`${resource}`, {
    pagination: { page: 1, perPage: 25 },
    sort: { field: 'id', order: 'DESC' },
  })
  const fields = isSuccess && Object?.keys(data[2])
  const mutationMode = 'optimistic'
  const frozenFields = ['id', 'url']

  const sortedFields = fields && [
    ...fields?.filter((item) => frozenFields.includes(item)),
    ...fields?.filter((item) => !frozenFields.includes(item)),
  ]

  if (!isLoading && !isSuccess)
    return (
      <div className='h-full flex justify-center items-center text-3xl font-semibold'>
        <h3 className={`${isDark ? "text-white" : "text-black"}`}>Oops something went wrong!</h3>
      </div>
    )

  return (
    <List
      pagination={<Pagination {...props} />}
      {...props}
      hasCreate
      empty={false}
      perPage={25}
      sort={{ field: 'id', order: 'DESC' }}
    >
      <EditableDatagrid
        sx={{ '& .RaDatagrid-headerCell': { whiteSpace: 'nowrap' } }}
        rowClick="edit"
        size="medium"
        mutationMode={mutationMode}
        createForm={
          <ResourceFormSideEffect dataFields={sortedFields} {...props} />
        }
        editForm={<ResourceForm dataFields={sortedFields} />}
      >
        {isSuccess &&
          sortedFields?.map((field, i) => (
            <TextField key={`${field}-${i}`} source={field} noWrap />
          ))}
      </EditableDatagrid>
    </List>
  )
}

export default ResourceList
