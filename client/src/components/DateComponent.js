import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {Spinner, Button} from 'react-bootstrap';

export default class DateComponent extends Component {
  render() {
    return (
      <Fragment>
        <DayPicker />
              <Button variant="primary" disabled>
              <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
            </Button>
      </Fragment>
    )
  }
}
