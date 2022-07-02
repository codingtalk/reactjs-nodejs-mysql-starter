import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';

import RouterConfig from './router';
import browserUtil from './utils/browserUtil';
import { sysStore } from './store';

function App() {
  const { isLoading } = sysStore;
  useEffect(() => {
    setIsMobile();
  }, []);
  const setIsMobile = () => {
    sysStore.isMobile = browserUtil.isMobile();
  }
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
