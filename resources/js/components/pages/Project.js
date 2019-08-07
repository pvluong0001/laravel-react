import React from 'react'
import { Button } from '@material-ui/core'
import AdapterLink from '../../common/AdapterLink'

function Project (props) {

  return (
    <React.Fragment>
      <h1>Project page</h1>
      <Button variant="contained" color="primary" component={AdapterLink} to="/projects/create">
        Create
      </Button>
    </React.Fragment>
  )
}

export default Project
