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
                  <th>Image</th>
                  <th>Link</th>
                  <th>Active</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img className="img-instagram"
                      src="https://www.amusingly.com/user/pics/89/50230781_768990676802301_8988820627105940466_n.jpg" alt="Instagram" />
                  </td>
                  <td></td>
                  <td>No</td>
                  <td>
                    <Link to="/customer/insta-image" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit" size="lg" /> Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="img-instagram"
                      src="https://www.amusingly.com/user/pics/89/50138732_343378499602628_5034109922798297977_n.jpg" alt="Instagram" />
                  </td>
                  <td></td>
                  <td>No</td>
                  <td>
                    <Link to="/customer/insta-image" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit" size="lg" /> Edit</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="img-instagram"
                      src="https://www.amusingly.com/user/pics/89/51337193_399261217552069_2912088519142282911_n.jpg" alt="Instagram" />
                  </td>
                  <td></td>
                  <td>No</td>
                  <td>
                    <Link to="/customer/insta-image" className="control-link">
                      <FontAwesomeIcon icon="edit" title="Edit" size="lg" /> Edit</Link>
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
