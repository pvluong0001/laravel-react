import React from 'react'
import clsx from 'clsx'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import menuList from './menu_list'
import AdapterLink from '../../common/AdapterLink'

function Menu (props) {
  return (
    <Drawer
      variant="permanent"
      className={clsx(props.classes.drawer, {
        [props.classes.drawerOpen]: props.open,
        [props.classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [props.classes.drawerOpen]: props.open,
          [props.classes.drawerClose]: !props.open,
        }),
      }}
      open={props.open}
    >
      <div className={props.classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose}>
          {props.theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
        </IconButton>
      </div>
      <Divider/>
      <List>
        {
          menuList.map((item, index) => (
            <ListItem className="menu_item" key={index} button to={item.url} component={AdapterLink}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  )
}

export default Menu
