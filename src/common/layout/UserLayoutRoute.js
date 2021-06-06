import { Dashboard } from '@material-ui/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import DashBoard from '../../components/DashBoard/DashBoard';


function UserLayoutRoute(props) {
  const {name,Component:YourComponent ,...remainProps} = props;


  return (
    <Route
      {...remainProps}
      render = {routeProps => {
        return (
          <DashBoard>
            <YourComponent {...routeProps} />
          </DashBoard>
        )
      }}
   />
  );
}

export default UserLayoutRoute;