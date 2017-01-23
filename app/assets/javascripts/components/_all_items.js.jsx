var AllItems = React.createClass({

  handleDeleteClick(id) {
    this.props.handleDelete(id);
  },

 render() {
  var items= this.props.items.map((item) => {
    return (
      <div key={item.id}>
      <Item item={item}
        handleDeleteClick = handleDeleteClick.bind(this,item.id)}>Delete</button>
      </div>
    )
  });
  return(
    <div>
     {items}
    </div>
  )
}

});
