import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Forgotpassword from './pages/First';
import SecondPage from './pages/Second';
import ThirdPage from './pages/Third';
import LastPage from './pages/LastPage';
import Dashboard from './components/employee/Dashboard';
import EditProfile from './components/employee/EditProfile';
import EmployeeProgram from './components/employee/EmployeeProgram';
import EmployeeTrackRequest from './components/employee/EmployeeTrackRequest';
import AddChapterPage from './components/admin/AddChapterPage';
import AddArticlePage from './components/admin/AddArticlePage';
import TransactionsOfPayout from "./components/admin/TransactionsOfPayout";
import TransactionsOfTransfer from "./components/admin/TransactionsOfTransfer";
import TransactionsOfAllocation from "./components/admin/TransactionsOfAllocation";
import TransactionsOfIncome from "./components/admin/TransactionsOfIncome";
import ProgramManagementPage from "./components/admin/ProgramManagementPage";
import ArticlePage from "./components/admin/ArticlePage";
import Funds from "./components/admin/Funds";
import MoveFunds from "./components/admin/MoveFunds";
import Allocate from "./components/admin/Allocate";
import Budget from "./components/admin/Budget";
import Articles from "./components/admin/Articles";
import RequestAdminPage from "./components/admin/RequestAdmin/RequestAdminPage";
import RequestAdmin from "./components/admin/RequestAdminPage/RequestAdmin";
import RequestDetail from "./components/admin/RequestDetail/RequestDetail";
import RequestDetailPending from "./components/admin/RequestDetailPending/RequestDetailPending";
import History from "./components/employee/History/History";
import CreateRequest from "./components/employee/CreateRequest/CreateRequest";
import "./App.css"


function App() {

  return (
    <div className='continer' >
      <BrowserRouter>
      
        <Routes>

          <Route path='/' exact element={<Login />}></Route>
          <Route path="/employee-dashboard" exact element={<EmployeeDashboardPage />} ></Route>
          <Route path="/admin-dashboard" exact element={<AdminDashboardPage />} ></Route>
          <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
          <Route path="/send-link" exact element={<SecondPage />} ></Route>
          <Route path="/reset-password" exact element={<ThirdPage />} ></Route>
          <Route path="/success" exact element={<LastPage />} ></Route>
          <Route path="/employee/dashboard" element={<Dashboard />} />
          <Route path="/employee/profile" element={<EditProfile />} />
          <Route path="/employee/track-request" element={<EmployeeTrackRequest />} />
          <Route path="/employee/program" element={<EmployeeProgram />} />
          <Route path="/admin/TransactionsOfPayout" element={<TransactionsOfPayout />} />
          <Route path="/admin/Funds" element={<Funds />} />
          <Route path="/admin/MoveFunds" element={<MoveFunds />} />
          <Route path="/admin/Allocate" element={<Allocate />} />
          <Route path="/admin/Budget" element={<Budget />} />
          <Route path="/admin/Articles" element={<Articles />} />
          <Route path="/admin/transactionsoftransfer" element={<TransactionsOfTransfer />} />
          <Route  path="/admin/transactionsofallocation" element={<TransactionsOfAllocation />}/>
          <Route path="/admin/transactionsofincome" element={<TransactionsOfIncome />} />
          <Route exact path="/admin/programmanagementpage" element={<ProgramManagementPage />} />
          <Route exact path="/admin/ProgramManagementPage/add-chapter" element={<AddChapterPage />} />
         <Route exact path="/admin/ProgramManagementPage/chapter/:chapterId/articles" element={<ArticlePage />} />
         <Route exact path="/admin/ProgramManagementPage/chapter/:chapterId/add-article" element={<AddArticlePage />} />
         <Route path="/request-admin" element={<RequestAdmin />} />
              <Route path="/pending-requests" element={<RequestAdminPage />} />
              <Route path="/paid-requests" element={<RequestAdminPage />} />
              <Route path="/rejected-requests" element={<RequestAdminPage />} />
              <Route path="/previous-page" element={<RequestAdminPage />} />
              <Route
                path="/request-detail/"
                element={<RequestDetail />}
              />
           <Route
            path="/request-detail-pending/"
            element={<RequestDetailPending />}
          />
          <Route path="/create-request" element={<CreateRequest />} />
          <Route path="/previous-page" element={<History />} />
        </Routes>


      </BrowserRouter>
    </div>




  );
}


export default App;
