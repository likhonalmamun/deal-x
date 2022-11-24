import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/route";

function App() {
  return (
    <div className='max-w-[1200px] bg-white mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
 