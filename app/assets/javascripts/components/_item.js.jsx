var Item = React.createClass({

 render() {
  return (
    <div>
        <h3>{item.props.name}</h3>
        <p>{item.props.description}</p>
        <button onClick={this.props.handleDeleteClick} >Delete</button>
    </div>
    )
  }
});
