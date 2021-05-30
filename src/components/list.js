import React from "react";

export default class List extends React.PureComponent {
  list = ["Вадим", "Александр", "Николай", "Бадма", "Станислав", "Андрей"];

  constructor(props) {
    super(props);
    this.state = {
      list: this.list.sort().concat(),
      exists: false,
    };
  }

  renderList() {
    return (
      <ul>
        {this.state.list.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    );
  }

  handlerChange = (e) => {
    this.setState({
      exists: this.state.list.indexOf(e.target.value) > -1,
      list: this.list.filter((el) => el.includes(e.target.value)).sort(),
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        <h2>
          {this.state.exists
            ? "Такой элемент есть в списке"
            : "Такого элемента нет в списке"}
        </h2>
        {this.renderList()}
      </div>
    );
  }
}
