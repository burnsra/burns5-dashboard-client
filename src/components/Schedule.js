import React, { Component } from 'react';
import Moment from 'moment';
import DataService from '../services/api/data'

class Schedule extends Component {
  state = {
    schedule: [],
    updated: ""
  };

  componentDidMount() {
    DataService
      .get('schedule')
      .then((response) => {
        this.setState({
          schedule: response.detail,
          updated: response.updated
        });
      });
  }

  render() {
    const { schedule } = this.state;
    const { updated } = this.state;
    var today = Moment().format("YYYY-MM-DD");

    var arrSchedule = [];

    Object.keys(schedule).forEach(function(key) {
      arrSchedule.push(schedule[key]);
    });

    return (
      <div className="Schedule">
        <table className="table table-bordered table-striped table-sm">
            <thead className="thead-inverse"><tr><th width="66%">Date</th><th>Schedule</th></tr></thead>
            <tbody>
                {arrSchedule.map(item => <DaySchedule today={today} key={item.date} date={item.date} day={item.day} time={item.time} />)}
            </tbody>
            <tfoot><tr className="table-active"><td colSpan="2"><small>Last Updated { updated }</small></td></tr></tfoot>
        </table>
      </div>
    );
  }
}

class DaySchedule extends React.Component {
  render() {
    var dayStyle = this.props.today === this.props.date ? "table-info" : "";
    return <tr className={dayStyle}><td width="66%">{this.props.day}</td><td>{this.props.time}</td></tr>;
  }
}

export default Schedule;
