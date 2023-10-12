import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTask from './componets/CreateTask'
import Wallet from './componets/Wallet'
import ViewAllTasks from './componets/ViewAllTask'
import UpdateTask from './componets/UpdateTask'
import ViewTask from './componets/ViewTask'
import DeleteTask from './componets/DeleteTaks'

import './App.css'
import Navigation from './pages/Navigation'

function App() {
  const[state, setState] = useState({web3:null, contract:null, account:null});

  const saveState = ({web3, contract, account})=>{
    setState({web3:web3, account:account, contract:contract})
  }
  state && console.log(state)

  const router = createBrowserRouter([
    {path:'/', element:<Wallet saveState ={saveState}/>},
    {path:'/view-all-tasks', element:<ViewAllTasks/>},
    {path:'/create-task', element:<CreateTask state={state} />},
    {path:'/view-task', element:<ViewTask/>},
    {path:'/update-task', element:<UpdateTask state={state} />},
    {path:'/delete-task', element:<DeleteTask state={state} />},
  ])

  return (
    <>
     
     <RouterProvider router={router} />
    </>
  )
}

export default App
