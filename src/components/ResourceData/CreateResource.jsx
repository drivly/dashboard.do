import { JsonSchemaForm } from '@react-admin/ra-json-schema-form'
import React from 'react'
import { Create, useResourceContext } from 'react-admin'
import { resourceSchema } from '../../lib/resourceSchema'

const CreateResource = () => {
  const resource = useResourceContext()
  return (
    <Create redirect="list">
      <JsonSchemaForm schema={resourceSchema[resource]} />
    </Create>
  )
}

export default CreateResource
