import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron, Table } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";

import { photoServerUrl } from "Constants/defaultValues";
import { connect } from 'react-redux';
import {
  imageList
} from "Redux/actions";

import './index.module.scss'

class InstaImages extends Component {

  componentDidMount() {
    const { customerId } = this.props.match.params
    this.props.getInstaImageList(customerId);
  }

  render() {

    const { imageList } = this.props;
    const { customerId } = this.props.match.params

    console.log(imageList);
    
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
                {imageList.length > 0 && 
                  imageList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img className="img-instagram"
                            src={photoServerUrl + item.ImageUrl} alt="Instagram" />
                        </td>
                        <td>{item.RefUrl}</td>
                        <td>{item.Status === '1' ? 'Yes' : 'No'}</td>
                        <td>
                          <Link to="/customer/insta-image" className="control-link">
                            <FontAwesomeIcon icon="edit" title="Edit" size="lg" /> Edit</Link>
                        </td>
                      </tr>
                      )
                    })
                  }
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

const mapStateToProps = ({ customerData, settings }) => {

  const { imageList } = customerData;
  const { locale } = settings;

  return {
    imageList, locale
  };
};

export default connect(
  mapStateToProps,
  {
    getInstaImageList: imageList
  }
)(InstaImages);