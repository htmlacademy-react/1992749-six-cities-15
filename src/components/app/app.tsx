import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  numberOfCards: number;
}

function App({numberOfCards}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      numberOfCards={numberOfCards}
    />
  );
}

export default App;
