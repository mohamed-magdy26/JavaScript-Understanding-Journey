// ! simple simulating of react use state and stale clousre

const btn = document.getElementById('btn');

function useState(value) {
  let name = value;
  function setState(newValue) {
    name = newValue;
  }
  return [name, setState];
}

function App() {
  let [name, setName] = useState('Ahmed');
  function handleUpdate() {
    setName('mohamed');
    console.log(name);
  }

  return handleUpdate;
}

const handleUpdate = App();

btn.addEventListener('click', handleUpdate);
