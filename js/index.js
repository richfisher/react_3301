var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {tasks: []};
  },
  componentDidMount : function() {
    this.setState({tasks: [{'name': 'n1', 'val': 1}, {'name': 'n2', 'val': 2}, {'name': 'n3', 'val': 3}]});
  },
  render: function() {
    var taskNodes = this.state.tasks.map(function (task) {
      return (
        React.createElement("p", null,
          React.createElement("b", null, task.name),

          React.createElement("br", null),

          React.createElement("b", null, task.val)
        )
      )
    })

    return (
      React.createElement("div", null,
        "Test",
        taskNodes
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.body
);
