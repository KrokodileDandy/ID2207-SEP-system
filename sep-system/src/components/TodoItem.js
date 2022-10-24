import React from "react";

class TodoItem extends React.Component {

  state = {
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true
    });
  }

  handleUpdateDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  }

  render() {
    const { completed, id, title, description, activityPlan } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else editMode.display = "none";

    return (
      <li>
        <div onDoubleClick={this.handleEditing}
          style={viewMode}>
          <input 
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)} />
            {title} <span className="activityPlan">({activityPlan})</span><br />
            {description}
        </div>
        <input type="text"
          style={editMode}
          value={title}
          onChange={e => {this.props.setUpdate(e.target.value, id)}}
          onKeyDown={this.handleUpdateDone} />
      </li>
    )
  }
}

export default TodoItem;