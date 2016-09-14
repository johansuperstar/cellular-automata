import React from 'react';
import Row from './Row';
import getRandomArray from '../randomArray';
import createRowFromRule from '../createRowFromRule';

const App = React.createClass({
  interval: null,
  getInitialState() {
    return {
      matrix: this._getInitialMatrix(),
      selectedRule: 1,
      running: false
    };
  },
  _getInitialMatrix() {
    return [getRandomArray()];
  },
  _onStartClicked() {
    this.interval = setInterval(() => {
      this._addNewRow();
    }, 200);
  },
  _onPauseClicked() {
    clearInterval(this.interval);
  },
  _onResetClicked() {
    this.setState({
      running: false,
      matrix: this._getInitialMatrix()
    });
  },
  _onRuleChanged(e) {
    this.setState({
      selectedRule: e.target.value,
      matrix: this._getInitialMatrix()
    });
  },
  _addNewRow() {
    var matrix = this.state.matrix;
    var latestRow = matrix[this.state.matrix.length - 1];
    var newRow = createRowFromRule(latestRow, this.state.selectedRule);
    matrix.push(newRow);

    this.setState({
      matrix: matrix
    });
  },
  render() {
    const matrix = this.state.matrix;
    return (
      <div>
        <div className="controls">
          <label>Rule:</label>
          <select onChange={this._onRuleChanged}>
            {this.props.rules.map((x, i) => <option key={i}>{x}</option>)}
          </select>
          <button onClick={this._onStartClicked}>Start</button>
          <button onClick={this._onPauseClicked}>Pause</button>
          <button onClick={this._onResetClicked}>Reset</button>
        </div>
        {matrix.map((row, i) => <Row row={row} key={i} />)}
      </div>
    );
  }
});

export default App;
