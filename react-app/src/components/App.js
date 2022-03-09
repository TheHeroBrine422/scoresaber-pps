import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './App.scss';

import TopBar from 'components/TopBar/TopBar';
import Table from 'components/Table/Table';
import Faq from 'components/Faq/Faq';

import { isMobile } from 'utils/browser';

import { fetchMetadata } from 'reducers/metadata';

function ModeComponent({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetadata(match.params.mode));
  }, [dispatch, match.params.mode]);

  return (
    <>
      <Route exact path={match.path} render={() => <Redirect to={`${match.url}/maps`} />} />
      <Route
        path={`${match.path}/maps`}
        render={({ match }) => (
          <>
            <TopBar match={match} />
            <Table match={match} />
          </>
        )}
      />
    </>
  );
}

function App() {
  return (
    <div className={classNames('container', { mobile: isMobile })}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/osu/maps" />} />
        <Route
          path="/faq"
          render={({ match }) => (
            <>
              <TopBar match={match} />
              <Faq />
            </>
          )}
        />
        <Route path="/:mode(osu|taiko|mania|fruits)" component={ModeComponent} />
        <Route render={() => <Redirect to="/osu/maps" />} />
      </Switch>
    </div>
  );
}

export default App;
