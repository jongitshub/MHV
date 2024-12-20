import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/dashboard-layout'

// Import the components
import IndexPage from './routes/index'
import ContactPage from './routes/contact'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import InvoicesPage from './routes/dashboard.invoices'
import DashboardPage from './routes/dashboard'
import HomePage from './routes/home'
import Pharmacy from './pages/pharmacy'
import HealthRecords from './pages/HealthRecords'
import UserInputForm from './pages/UserInformationUpdate'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/pharmacy', element: <Pharmacy />},
      { path: '/update', element: <UserInputForm />},
      { path: '/records', element: <HealthRecords />},
      { path: '/', element: <IndexPage /> },
      { path: '/home', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/invoices', element: <InvoicesPage /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)