import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron, Table } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

import styles from './index.module.scss'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.customer" />}
              match={this.props.match}
            />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Profile Logo</th>
                  <th>User Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>State</th>
                  <th>UrlKey</th>
                  <th>Active</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img className="img-profile-logo" 
                      src="https://www.amusingly.com/user/profilepic/profilelogo_91.png" alt="Profile Logo"/>
                  </td>
                  <td>Mistic</td>
                  <td>Josh</td>
                  <td>Josh@misticecigs.com</td>
                  <td>(704) 837-2872</td>
                  <td>Charlotte</td>
                  <td></td>
                  <td>Table cell</td>
                  <td>Yes</td>
                  <td>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="user-circle" title="Login into account" size="lg"/></Link>
                    <Link to="/customer/edit" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit customer" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="stop" title="Suspend customer" size="lg" /></Link><br/>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="unlink" title="Unsync" size="lg" /></Link>
                    <Link to="/customer/images" className="control-link">
                      <FontAwesomeIcon icon="list" title="List Images" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="times" title="Delete" size="lg" /></Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <img className="img-profile-logo"
                      src="https://www.amusingly.com/user/profilepic/profilelogo_81.jpg" alt="Profile Logo" />
                  </td>
                  <td>snqueens</td>
                  <td>Sylva & Gina</td>
                  <td>info@snqueens.com</td>
                  <td>(213) 629-2221</td>
                  <td>Los Angeles</td>
                  <td>California</td>
                  <td>snqueens</td>
                  <td>Yes</td>
                  <td>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="user-circle" title="Login into account" size="lg" /></Link>
                    <Link to="/customer/edit" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit customer" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="stop" title="Suspend customer" size="lg" /></Link><br />
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="unlink" title="Unsync" size="lg" /></Link>
                    <Link to="/customer/images" className="control-link">
                      <FontAwesomeIcon icon="list" title="List Images" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="times" title="Delete" size="lg" /></Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <img className="img-profile-logo"
                      src="https://www.amusingly.com/user/profilepic/profilelogo_87.jpg" alt="Profile Logo" />
                  </td>
                  <td>martinas</td>
                  <td>Margie Arbizo	</td>
                  <td>margie@martinashotsauce.com</td>
                  <td>3109244910</td>
                  <td></td>
                  <td>California</td>
                  <td>martinashotsauce</td>
                  <td>Yes</td>
                  <td>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="user-circle" title="Login into account" size="lg" /></Link>
                    <Link to="/customer/edit" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit customer" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="stop" title="Suspend customer" size="lg" /></Link><br />
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="unlink" title="Unsync" size="lg" /></Link>
                    <Link to="/customer/images" className="control-link">
                      <FontAwesomeIcon icon="list" title="List Images" size="lg" /></Link>
                    <Link to="/customer" className="control-link">
                      <FontAwesomeIcon icon="times" title="Delete" size="lg" /></Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
