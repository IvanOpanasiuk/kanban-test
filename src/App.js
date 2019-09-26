import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Column from "./components/Column";
import { getAllData, addCard, moveCard } from './actions';

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  handleAdd = columnIndex => {
    const name = window.prompt('Name?');
    if (!name) return
    const card = { name };
    this.props.addCard({ columnIndex, card });
  }

  componentDidMount() {
    const { getAllData } = this.props;
    getAllData();

  }

  render() {
    const { columns } = this.props;
    return (
      <div className='App'>
        {
          columns && columns.map((column, columnIndex) => (
            <Column
              column={column}
              key={columnIndex}
              columnIndex={columnIndex}
              onMoveLeft={cardIndex => this.props.moveCard({ columnIndex, cardIndex, DIRECTION_LEFT })}
              onMoveRight={cardIndex => this.props.moveCard({ columnIndex, cardIndex, DIRECTION_RIGHT })}
              onAddCard={() => this.handleAdd(columnIndex)}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ columns }) => ({
  columns
});

const mapDispatchToProps = {
  getAllData,
  addCard,
  moveCard
}

export default connect(mapStateToProps, mapDispatchToProps)(App);