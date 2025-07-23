import Sidebar from './../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return < >
      <Sidebar />
      <div className="flex-1 ml-0 sm:ml-64">
        <Outlet />
      </div>
    </>
  ;
}
