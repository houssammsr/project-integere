import React from 'react';
import { Link} from 'react-router-dom';
const AdminNavbar = () => {
  return (
   
    <div >
    
     
    <Link to="/admin/requests">Requests</Link>
    <Link to="/admin/program">Program</Link>
    <Link to="/admin/transaction">Transaction</Link>
    <Link to="/admin/funds">Funds</Link>
    <Link to="/admin/accounts">Accounts Management</Link>
     
  
  
    </div>
  );
};

export default AdminNavbar;
