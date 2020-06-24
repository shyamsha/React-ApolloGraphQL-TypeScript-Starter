import React, { Fragment, Component, FC } from "react";
import { Route, Switch, Redirect,useHistory, Router } from "react-router-dom";
import { RouteEnums } from "./routeEnums";
import { history } from "./History";



interface Props {
  history:History;
}

interface State {
}



class AppNavigator extends Component {
  state: State = {
  };

  componentDidMount() {
    const user = localStorage.getItem("x-session-id");
    if (user === null) {
      // this.props.history.push(``)
      useHistory().push(`/login`)
    }

  }


// FIXME: ROUTEING NEED GOOD STRUCTURE
  Auth: FC = () => (
    <Fragment>
      <Switch>
      <Router history={history}>
        <Route path={`/${RouteEnums.LOGIN}`} component={()=>null} exact />
        {/* <Route
          path={`/${RouteEnums.FORGOT_PASSWORD}`}
          component={ForgotPassword}
          exact
        />
        <Route
          path={`/${RouteEnums.SET_PASSWORD}`}
          component={SetPassword}
          exact
        /> */}
        </Router>
      </Switch>
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={()=><Redirect to={`/${RouteEnums.DASHBOARD}`}/>}/>



        <Route path="*" component={()=> <div>Not Found</div> } exact/>

      </Switch>
    </Fragment>
  );

  render() {
    const user = localStorage.getItem("x-session-id");

    return user ? <this.App /> : <this.Auth />;
  }
}



export default (AppNavigator);
