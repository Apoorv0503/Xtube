import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchedVideos from './components/SearchedVideos';

function App() {

  //configure router for our app
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"search",
          element:<SearchedVideos/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ])
  return (
    // see, we need the <Head/> component on every page but the body component and the components inside body component will be dynamic eg: on home
    // page we need to show the <MainContainer/> but on watch page we need to show <WatchPage/> , we will use outlet for dynamically rendering the 
    //<WatchPage/> and <MainContainer/> 

    //also we will use <Head/> directly in app but will use RouterProvider to facilitate the other components(eg Body and its childrens etc) according to the router configured above.
    <Provider store={store}>
    <div>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
