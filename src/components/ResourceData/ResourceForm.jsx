import { RowForm, useRowContext } from '@react-admin/ra-editable-datagrid'
import React from 'react'
import { TextField, TextInput, useNotify, useRefresh } from 'react-admin'

const ResourceForm = ({ dataFields }, props) => {
  const frozenFields = ['id', 'url']

  return (
    <RowForm {...props}>
      {/* Non editable fields */}
      {dataFields
        ?.filter((item) => frozenFields.includes(item))
        .map((field, i) => (
          <TextField key={`${field}-${i}`} source={field} noWrap />
        ))}
      {/* Editable fields */}
      {dataFields
        ?.filter((item) => !frozenFields.includes(item))
        .map((field, i) => (
          <TextInput key={`${field}-${i}`} source={field} noWrap />
        ))}
    </RowForm>
  )
}

export default ResourceForm

export function ResourceFormSideEffect({ dataFields}, props) {
  const notify = useNotify()
  const refresh = useRefresh()
  const { close } = useRowContext()

  return (
    <ResourceForm
      {...props}
      dataFields={dataFields}
      mutationOptions={{
        onSuccess: (record) => {
          notify(`${record} has been added!`)
          refresh()
          close()
        },
      }}
    />
  )
}
