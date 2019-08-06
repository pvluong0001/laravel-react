import React from 'react'
import clsx from 'clsx'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Book as BookIcon, Contacts as ContactIcon } from '@material-ui/icons'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import menuList from './menu_list'

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
            <ListItem className="menu_item" key={index} button to={item.url} component={
              React.forwardRef(
                (props, ref) => (
                  <NavLink {...props} />
                )
              )}
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
