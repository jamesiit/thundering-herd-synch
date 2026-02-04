import Button from "./components/Button.jsx";
import Welcome from "./components/Welcome.jsx";
import {Toaster} from "sonner";

function App() {

  return (
      <>
          <Toaster richColors={true}/>
      <Welcome />
      <Button />
      </>
  )

}

export default App
