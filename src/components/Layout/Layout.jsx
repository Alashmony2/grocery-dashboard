import Sidebar from './../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>
    <Sidebar/>
    
    <div className="sm:ml-64 p-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Outlet/>
      </div>
  </>
}