import React, { Component } from 'react';
import Moment from 'moment';
import DataService from '../services/api/data'

class Wireless extends Component {
  state = {
    wireless: [],
    updated: ""
  };

  componentDidMount() {
    DataService
      .get('wireless')
      .then((response) => {
        this.setState({
          wireless: response.detail,
          updated: response.updated
        });
      });
  }

  render() {
    const { wireless } = this.state;
    const { updated } = this.state;
    var arrWireless = [];

    Object.keys(wireless).forEach(function(key) {
      wireless[key]["name"] = key;
      arrWireless.push(wireless[key]);
    });
    return (
      <div className="Wireless">
        <table className="table table-bordered table-sm">
          <thead className="thead-inverse">
            <tr><th>Current Data Usage</th></tr>
            <MonthlyProgress />
          </thead>
          <tbody>
            {arrWireless.map( item =>
            <WirelessDetail key={item.name + 'wireless'} name={item.name} phonenumber={item.phonenumber} data={item.data} data_msg={item.data_msg} data_percent={item.data_percent} />
            )}
          </tbody>
          <tfoot><tr className="table-active"><td><small>Last Updated { updated }</small></td></tr></tfoot>
        </table>
      </div>
    );
  }
}

class MonthlyProgress extends React.Component {
  render() {
    var end, progress;
    var dayOfMonth = 17;
    var today = Moment();

    if (today.date() < dayOfMonth) {
      end = Moment().date(dayOfMonth)
    } else {
      end = Moment().startOf('month').add(1,'month').date(dayOfMonth)
    }
    progress = end.fromNow();

    return <tr className="table-active"><td><small>Data resets { progress }</small></td></tr>;
  }
}

class WirelessDetail extends React.Component {
  render() {
    return (
      [
        <DataTitle key={this.props.name + 'title'} name={this.props.name} />,
        <DataPercentage key={this.props.name + 'percent'} phonenumber={this.props.phonenumber} data={this.props.data} data_msg={this.props.data_msg} data_percent={this.props.data_percent} />,
        <DataDetail key={this.props.name + 'detail'} data_msg={this.props.data_msg} />
      ]
    );
  }
}

class DataTitle extends React.Component {
  render() {
    return (
        <tr><th className="table-active"><strong>{this.props.name}</strong></th></tr>
    );
  }
}

class DataPercentage extends React.Component {
  render() {
    var barStyle = "progress-bar progress-bar-striped progress-bar-animated"
    var barWidth = this.props.data_percent + '%';

    if (this.props.data_percent >= 100) {
      barStyle = barStyle + " bg-danger";
    } else if (this.props.data_percent >= 90) {
      barStyle = barStyle + " bg-warning";
    }else if (this.props.data_percent >= 75) {
      barStyle = barStyle + " bg-info";
    } else {
      barStyle = barStyle + " bg-success";
    }

    return (
        <tr><td><div className="progress"><div className={barStyle} role="progressbar" aria-valuenow={this.props.data_percent} aria-valuemin="0" aria-valuemax="100" style={{width : barWidth}}>{this.props.data_percent}%</div></div></td></tr>
    );
  }
}

class DataDetail extends React.Component {
  render() {
    return (
        <tr><td><div className="text-right">{this.props.data_msg}</div></td></tr>
    );
  }
}

export default Wireless;
