import { Switch, Route } from "wouter";
import { Toaster } from "../src/components/ui/toaster";
import Home from "../src/pages/home";
import NotFound from "../src/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <>
        <Toaster />
        <Router />
      </>
  );
}

export default App;
