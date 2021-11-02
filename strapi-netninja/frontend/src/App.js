import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import Header from './components/Header';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/details/:id'>
              <ReviewDetails />
            </Route>
            <Route path='/category/:id'>
              <Category />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
