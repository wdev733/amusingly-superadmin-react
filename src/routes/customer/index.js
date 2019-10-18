import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import list from './list';
import images from './images';
import editProfile from './edit-profile';
import instaImage from './edit-image';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
        <Route path={`${match.url}/list`} component={list} />
        <Route path={`${match.url}/images/:customerId`} component={images} />
        <Route path={`${match.url}/edit/:customerId`} component={editProfile} />
        <Route path={`${match.url}/insta-image`} component={instaImage} />
        <Redirect to="/error" />
    </Switch>
);