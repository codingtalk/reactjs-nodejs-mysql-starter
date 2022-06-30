import { BrowserRouter } from 'react-router-dom';

import RouterConfig from './router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<RouterConfig />}
      </BrowserRouter>
    </div>
  );
}

export default App;
