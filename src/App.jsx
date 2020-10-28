import TodoApp from './components/TodoApp';
import Center from './components/center/Center';
import Container from './components/container/Container';

import { Provider } from 'react-redux';
import store from './components/store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Center>
          <TodoApp title='To do List' />
        </Center>
      </Container>
    </Provider>
  );
};

export default App;
