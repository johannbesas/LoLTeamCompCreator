import './tailwind.css'
import { Route } from 'react-router-dom'

import Header from './client/components/Header'
import NavBar from './client/components/NavBar'
import Search from './client/components/Search'
import Champions from './client/components/Champions'
import RedSide from './client/components/RedSide'
import BlueSide from './client/components/BlueSide'

function App() {
  return (
    <>
      <Header />
      <div className='main flex flex-row'>
        <Route path='/' className='flex-1' component={NavBar} />
        <Route exact path='/' component={Search} />
        <Route exact path='/Champions'>
          <Champions />
        </Route>
        {/* </Route>component={RedSide } /> , Champions} /> */}
        {/* <div className='flex 1'><NavBar /></div> */}
        {/* <div className='flex-auto'><Search /></div> */}
        <Route exact path='/Champions2' component={Champions} />
      </div>
    </>
  );
}
export default App;
