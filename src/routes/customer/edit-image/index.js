import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
          <Colxx xxs="8">
            <Form>
              <FormGroup>
                <Label for="ref_url">Ref Url:</Label>
                <Input type="text" name="ref_url" id="ref_url" />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input type="select" name="status" id="status">
                  <option>Active</option>
                  <option>Inactive</option>
                </Input>
              </FormGroup>
              <Button>Save</Button>
              <Link to="/customer/images"> Cancel</Link>
            </Form>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
