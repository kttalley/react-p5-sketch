var Building = React.createClass({
    getInitialState: function() {
        return {x: 500, y: 500};
    },
    render: function() {
        return ( 
            <svg width="150" height="600">
                <rect width="150" height ="600" fill="rgb(100,100,100)"/>
            </svg>
        );
    }
});


ReactDOM.render(
//   <Landscape/>,
  <Building/>,
//   document.getElementById('landscape')
  document.getElementById('building')
);