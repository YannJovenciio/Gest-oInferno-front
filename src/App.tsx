import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { Layot } from "./Layot/Layot";
import { Router } from "./Router/Router";

function App() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="App">
        <Layot>
          <Router />
        </Layot>
      </div>
    </FormProvider>
  );
}

export default App;
