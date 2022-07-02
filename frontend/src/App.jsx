import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

import RouterConfig from './router';
import { sysStore } from './store';

function App() {
  const { isLoading } = sysStore; 
  return (
    <Spin tip="Loading..." spinning={isLoading}>
      <div className="App">
        <BrowserRouter>
          {<RouterConfig />}
        </BrowserRouter>
      </div>
    </Spin >
  );
}

export default App;
