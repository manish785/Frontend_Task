import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import  Navbar from './Navbar';
import { Analytics, Dashboard, Overview, Statistics} from './index';

function App() {
  
  const routes = (
    <Routes>
      <Route path="/analytics" element={<Analytics/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/statics" element={<Statistics />} />
    </Routes>
  );

  return (
    <div className="App">
      <Router>
        <Navbar/>
        {routes}
      </Router>
    </div>
  );
}

export default App;
