import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Typography, Toolbar, AppBar } from '@material-ui/core'

function Nav (props) {
  return (
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(props.classes.menuButton, {
            [props.classes.hide]: props.open,
          })}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Lit</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
