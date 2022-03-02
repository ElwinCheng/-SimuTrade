import React from 'react'
import { Button, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import SearchIcon from '@mui/icons-material/Search'
import styles from './NavBar.module.css'
import logo from '../../img/simutrade_logo_transparent.png'
import { useNavigate } from 'react-router-dom'

const drawerWidth=200

const NavBar = () => {
	const navigate = useNavigate();

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
        variant="permanent" anchor="left"
      >
			<Button onClick={() => navigate('/dashboard')}>
				<img style={{padding: '20px', width: '160px'}} src={logo} alt="SimuTrade"/>
			</Button>
			<Divider />
        <List>
					<ListItem button key="dashboard" component="a" onClick={() => navigate('/dashboard')}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
					<ListItem button key="portfolio" component="a" onClick={() => navigate('/portfolio')}>
						<ListItemIcon>
							<ShowChartIcon />
						</ListItemIcon>
						<ListItemText primary="Portfolio" />
					</ListItem>
					<ListItem button key="stocks" component="a" onClick={() => navigate('/stocks')}>
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