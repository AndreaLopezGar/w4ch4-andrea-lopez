import { Actions } from "../actions/actions";
import { Keyboard } from "../keyboard/keyboard";
import { Info } from '../info/info';

function App() {
  return (
<>

<Info></Info>
<main className="phone">
<Keyboard></Keyboard>
<Actions></Actions>
</main>

</>

  );
}

export default App;
