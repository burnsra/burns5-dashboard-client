import React, { Component } from 'react';
import DataService from '../services/api/data'

class Grades extends Component {
  state = {
    grades: [],
    updated: ""
  };

  componentDidMount() {
    DataService
      .get('grades')
      .then((response) => {
        this.setState({
          grades: response.detail,
          updated: response.updated
        });
      });
  }

  render() {
    const { grades } = this.state;
    const { updated } = this.state;
    var arrGrades = [];

    Object.keys(grades).forEach(function(name) {
      var student = {};
      var studentCourses = [];

      student.name = name;
      Object.keys(grades[name]).forEach(function(course) {
        studentCourses.push(grades[name][course])
      });
      student.courses = studentCourses;
      arrGrades.push(student);
    });

    return (
      <div className="Grades">
      <table className="table table-bordered table-striped table-sm">
          <thead className="thead-inverse"><tr><th width="66%">Course</th><th>Grade</th></tr></thead>
            {arrGrades.map( (item,index) =>
              <StudentDetail key={index} name={item.name} courses={item.courses} />
            )}
          <tfoot><tr className="table-active"><td colSpan="2"><small>Last Updated { updated }</small></td></tr></tfoot>
      </table>
      </div>
    );
  }
}

class StudentDetail extends React.Component {
  render() {
    return (
      [
        <tbody key={this.props.name+'student'}><DataTitle name={this.props.name} /></tbody>,
        <tbody key={this.props.name+'courses'}>{this.props.courses.map( (item,index) =>
          <MyGradesChild key={index} course={item.course} grade={item.grade} />
        )}</tbody>
      ]
    );
  }
}

class DataTitle extends React.Component {
  render() {
    return (
        <tr><th className="table-active" colSpan="2"><strong>{this.props.name}</strong></th></tr>
    );
  }
}

class MyGradesChild extends React.Component {
  render() {
    return <tr><td width="66%">{this.props.course}</td><td>{this.props.grade}</td></tr>
  }
}

export default Grades;
