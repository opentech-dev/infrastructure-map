import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'

import MainLayout from '@/layouts/main-layout'
import HomePage from '@/pages/map'
import React from 'react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route
        path="/"
        element={
          <MainLayout />
        }
      >
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </React.Fragment>,
  ),
)

export const Router = () => {
  return <RouterProvider router={router} />
}
