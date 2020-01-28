import React, { Fragment, Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default class DateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: Date.now()
    };
    this.props.notifyParent(Date.now());
  }

  handleDayClick = date => {
    const previousSelection = new Date(this.state.selectedDate)
      .toISOString()
      .slice(0, 10);
    const newDate = new Date(date);
    if (previousSelection === newDate.toISOString().slice(0, 10)) {
      return;
    }

    this.setState({ selectedDate: newDate });
    this.props.notifyParent(newDate);
  };

  render() {
    return (
      <Fragment>
        <DayPicker onDayClick={this.handleDayClick} />
      </Fragment>
    );
  }
}



