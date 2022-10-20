import { JsonSchemaForm } from '@react-admin/ra-json-schema-form'
import React from 'react'
import { Edit, useResourceContext } from 'react-admin'
import { resourceSchema } from '../../lib/resourceSchema'

const EditResource = () => {
  const resource = useResourceContext()
  return (
    <Edit>
      <JsonSchemaForm
        schema={resourceSchema[resource]}
        uiSchema={{
          id: { 'ui:disabled': true },
          url: { 'ui:disabled': true },
        }}
      />
    </Edit>
  )
}

export default EditResource
