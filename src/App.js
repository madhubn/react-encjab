import React from "react";
import "./style.css";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    );
  }
}
export default App;
