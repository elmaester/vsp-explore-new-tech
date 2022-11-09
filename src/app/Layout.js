import { Link, Outlet } from 'react-router-dom';

import { Button } from '@mui/material';

const Layout = () => (
  <div className='App'>
    <nav>
      <Button component={Link} to='/'>
        Home
      </Button>
      <Button component={Link} to='list'>
        List
      </Button>
      <Button component={Link} to='counter'>
        Counter
      </Button>
      <Button component={Link} to='donut'>
        Donut
      </Button>
      <Button component={Link} to='bar'>
        Bar
      </Button>
      <Button component={Link} to='graph'>
        Graph
      </Button>
    </nav>
    <div className='App-header'>
      <Outlet />
    </div>
  </div>
);

export default Layout;
