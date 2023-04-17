import "./App.css";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import Body from "./components/Body";
import Header from "./components/Header";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Maincontainer } from "./components/Maincontainer";
import WatchVideo from "./components/WatchVideo";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Maincontainer />,
          },
          {
            path: "watch",
            element: <WatchVideo />,
          },
        ],
      },
      {
        path: "searchResult",
        element: <SearchResult />,
      },
    ],
  },
]);

export default App;
