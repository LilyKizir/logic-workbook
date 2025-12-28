import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './components/Authentication';
import Header from './components/Header'
import AssignmentDashboard from './components/LeftDashboard';
import Proofs from './components/Proofs';
import Grades from './components/RightDashboard';
import CourseManagementDashboard from './components/CourseManagementDashboard';
import MockupSwitcher from './components/MockupSwitcher.jsx';


function App() {

  // 1. Initialize state to track the active view. We start with 'grades'.
  const [activeView, setActiveView] = useState('auth');

  const renderContent = () => {
    switch (activeView) {
      case 'auth':
        return (
          <Authentication />
        );

      case 'students':
        return (
          <>
            <div className='row'>
              <div className='col-6'>
                <AssignmentDashboard />
              </div>
              <div className='col-6'>
                <Grades />
              </div>
            </div>
          </>
        );

      case 'instructor':
        return (
          
          <>
            <div className='row'>
              <div className='col-6'>
                <CourseManagementDashboard />
              </div>
              <div className='col-6'>
                <Grades />
              </div>
            </div>
          </>
        );

      case 'proof':
        return (
          <Proofs />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <MockupSwitcher
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <div class="col-lg mx-auto p-4 py-md-5">
        <Header />

        {renderContent()}

        <footer class="pt-5 my-5 text-body-secondary border-top">
          Created by the Hunter College Philosophy Department Developer team · © 2025
        </footer>
      </div>
    </>
  )
}

export default App
