import React from 'react'
import { Button, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import SearchIcon from '@mui/icons-material/Search'
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
					<ListItem button key="dashboard" component="a" href="dashboard">
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
					<ListItem button key="portfolio" component="a" href="portfolio">
						<ListItemIcon>
							<ShowChartIcon />
						</ListItemIcon>
						<ListItemText primary="Portfolio" />
					</ListItem>
					<ListItem button key="stocks" component="a" href="stocks">
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
						<ListItemText primary="Stocks" />
					</ListItem>
        </List>
      </Drawer>
		</div>
	)
}

export default NavBar