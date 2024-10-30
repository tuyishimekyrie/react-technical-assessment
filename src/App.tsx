import Header from "./components/Header";
import HeaderNavigation from "./components/HeaderNavigation";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="max-h-screen bg-gray-100 flex max-w-screen overflow-hidden">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col ">
        <Header />
        <HeaderNavigation />


        <Todos />

      </div>
    </div>
  );
};

export default App;
