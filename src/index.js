import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  BrowserRouter,
} from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './component/homepage';
// import Service from './component/service';
// import Medicine from './component/medicine';
// import Signup from './component/signup';
// import Register from './component/register';

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <App />,
//       children: [
//           {
//               path: '/',
//               element: <Home />,
//           },
//           {
//               path: '/service',
//               element: <Service />,
//           },
//           {
//               path: '/medicine',
//               element: <Medicine />,
//           },
//           {
//               path: '/signup',
//               element: <Signup />,
//           },
//           {
//             path:'/register',
//             element:<Register/>
//           }
//       ]
//   }
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router}>
  //   <App />
  // </RouterProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
