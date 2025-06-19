import { Outlet } from 'react-router-dom'
import SideBar from '../components/sidebar'
import { sidebarIten } from '../App'
import './layaout.sass'

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
