import { StackNavigator } from 'react-navigation';

// Pages
import Repositories from './pages/repositories';
import Issues from './pages/issues';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
});

export default Routes;
