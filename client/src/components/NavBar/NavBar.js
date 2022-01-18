import React from 'react'
import { Link, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import styles from './NavBar.module.css'

const drawerWidth=200

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
      <h1 style={{padding: '15px'}}>SimuTrade</h1>
			<Divider />
        <List>
          {['Dashboard', 'Portfolio', 'Stocks' ].map((text, index) => (
            <ListItem button key={text} component="a" href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
								<DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
		</div>
	)
}

export default NavBar