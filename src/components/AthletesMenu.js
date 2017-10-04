// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class AthletesMenu extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector('body');
  }
  render() {
    return (
      <nav className="athletes-menu-synee">
        {this.props.athletes.map(menuAthlete => {
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
            {menuAthlete.name}
          </Link>;
        })}
      </nav>
    );
  }
}