import React from 'react'
import { Route } from 'react-router-dom'
import { useTheme, CssBaseline } from '@material-ui/core'
import Nav from './partials/Nav'
import useStyles from './styles'
import Menu from './partials/Menu'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'

const DefaultLayout = ({ component: Component, ...rest }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen () {
    setOpen(true)
  }

  function handleDrawerClose () {
    setOpen(false)
  }

  return (
    <Route {...rest} render={matchProps => (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline/>
          <Nav classes={classes} open={open} handleDrawerOpen={handleDrawerOpen}/>
          <Menu classes={classes} open={open} handleDrawerClose={handleDrawerClose} theme={theme}/>
          <main className={classes.content}>
            <Paper className={clsx(classes.content, classes.mainContent)}>
              <Component {...matchProps} />
            </Paper>
          </main>
        </div>
      </React.Fragment>
    )}/>
  )
}

export default DefaultLayout
