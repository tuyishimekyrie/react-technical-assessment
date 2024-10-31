import HeaderNavigation from './components/HeaderNavigation';

import Todos from './components/Todos';

const App = () => {
  return (
    <div className="max-h-screen bg-gray-100 dark:bg-gray-900 flex max-w-screen overflow-hidden transition-all">
      <div className="w-full flex flex-col dark:bg-gray-900">
        <HeaderNavigation />

        <Todos />
      </div>
    </div>
  );
};

export default App;
