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
                <Label for="username">User Name:</Label>
                <Input type="email" name="username" placeholder="username" id="username"/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" name="password" id="password"/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" id="email"/>
              </FormGroup>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="phone" id="phone"/>
              </FormGroup>
              <FormGroup>
                <Label for="billing_address">Billing Address 1:</Label>
                <Input type="text" name="billing_address" id="bill_address_1" />
              </FormGroup>
              <FormGroup>
                <Label for="billing_address2">Billing Address 2:</Label>
                <Input type="text" name="billing_address2" id="bill_address_2" />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="select" name="state" id="state">
                  <option>-- Select --</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Maine</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="instagram_profile">Instagram Profile Name </Label>
                <Input type="text" name="email" 
                    id="exampleEmail" instagram_profile="with a placeholder"/>
              </FormGroup>
              <FormGroup>
                <Label for="url_key">Url Key</Label>
                <Input type="text" name="email" id="exampleurl_keyEmail"/>
              </FormGroup>
              <FormGroup>
                <Label for="url_key">Profile Logo</Label>
                <Input type="file" name="email" id="exampleurl_keyEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input type="select" name="status" id="status">
                  <option>Active</option>
                  <option>Inactive</option>
                </Input>
              </FormGroup>
              <Button>Save</Button> 
              <Link to="/customer/list"> Cancel</Link>
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
