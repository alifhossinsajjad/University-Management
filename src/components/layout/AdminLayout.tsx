import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
<div>
    <h1>this is admin dashboard </h1>
   <div>
     <Outlet/> 
   </div>
</div>
  )
}

export default AdminLayout