import React from 'react'
import { Button, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart'; 
import styles from './NavBar.module.css'
import logo from '../../img/SimuTrade_logo.png'

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
			<Button href="/dashboard">
				<img style={{padding: '20px', width: '160px'}} src={logo} alt="SimuTrade"/>
			</Button>
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