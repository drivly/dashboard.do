import React from 'react'
import {
  Datagrid,
  List,
  TextField,
  useGetList,
  useRedirect,
  useResourceContext,
} from 'react-admin'

const ResourceList = (props) => {
  const resource = useResourceContext()
  const redirect = useRedirect()
  const { data, isSuccess, isLoading } = useGetList(`${resource}`, {
    pagination: { page: 1, perPage: 25 },
    sort: { field: 'id', order: 'DESC' },
  })
  const fields = isSuccess && Object?.keys(data[2])
  // const mutationMode = 'optimistic'
  const frozenFields = ['id', 'url']

  const sortedFields = fields && [
    ...fields?.filter((item) => frozenFields.includes(item)),
    ...fields?.filter((item) => !frozenFields.includes(item)),
  ]

  if (!isLoading && !isSuccess) redirect('create', resource)

  return (
    <List
      {...props}
      hasCreate
      empty={false}
      perPage={25}
      sort={{ field: 'id', order: 'DESC' }}
    >
      <Datagrid
        sx={{ '& .RaDatagrid-headerCell': { whiteSpace: 'nowrap' } }}
        rowClick="edit"
        size="medium"
      >
        {isSuccess &&
          sortedFields?.map((field, i) => (
            <TextField key={`${field}-${i}`} source={field} noWrap />
          ))}
      </Datagrid>
    </List>
  )
}

export default ResourceList

// mutationMode={mutationMode}
// createForm={
//   <ResourceFormSideEffect dataFields={sortedFields} {...props} />
// }
// editform={<EditResource />}
