import React, { useState } from 'react'
import { Link, makeStyles, Button, TextField, Grid } from '@material-ui/core'
import clsx from 'clsx'
import AdapterLink from '../../common/AdapterLink'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  saveButton: {
    marginRight: '20px'
  },
  cancelButton: {
    textDecoration: 'underline !important'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1
  },
  marginZero: {
    margin: 0
  }
}))

function ProjectCreate (props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

  function handleDateChange (date) {
    setSelectedDate(date)
  }

  const classes = useStyles()
  const [project, setProject] = useState({
    name: '',
    color: '#f1f1f1',
    start_at: '',
    finish_at: ''
  })

  const onChangeHandle = (event) => {
    console.log(project, event.target.value)
    setProject({
      ...project,
      [event.target.name]: event.target.value
    })
  }

  return (
    <React.Fragment>
      <Grid
        container
      >
        <Grid
          item xs={12}
        >
          <h1>Create Project</h1>
        </Grid>
      </Grid>


      <form noValidate autoComplete="off" className={classes.root}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item xs={6}
          >
            <TextField
              fullWidth
              label="Name"
              className={clsx(classes.textField, classes.marginZero)}
              onChange={onChangeHandle}
              margin="normal"
              variant="outlined"
              value={project.name}
              name="name"
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
        >
          <Grid
            item xs={3}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

        <div>
          <Button variant="contained" color="primary" className={classes.saveButton}>
            Save
          </Button>
          <Link component={AdapterLink} to="/projects" variant="body2">
            Cancel
          </Link>
        </div>
      </form>

    </React.Fragment>
  )
}

export default ProjectCreate
