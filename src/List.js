import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.name.map((item, index) => (
          <li
            style={{ cursor: 'pointer' }}
            onClick={this.props.deleteTask.bind(this, index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </div>
    );
  }
}

export default List;
