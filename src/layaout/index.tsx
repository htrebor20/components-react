import { Outlet } from 'react-router-dom'
import SideBar from '../components/sidebar'
import './layaout.sass'
import { sidebarIten } from './constans'

function Layout() {
  return (
    <div className="app-container">
      <SideBar listItem={sidebarIten} />
      <div className='style-container-page'>
        <Outlet />
      </div>
    </div>
  )
}
    
export default Layout
