import "./App.css";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Maincontainer } from "./components/Maincontainer";
import WatchVideo from "./components/WatchVideo";
import SearchResult from "./components/SearchResult";
import Error from "./components/Error";

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
    errorElement: <Error />,
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
            path: "searchResult",
            element: <SearchResult />,
          },
        ],
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

export default App;
