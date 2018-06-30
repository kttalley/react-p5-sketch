var Landscape = React.createClass({
  getInitialState: function() {
    return {x: 50, y: 50, r: 40};
  },
  handleMouseMove: function(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
      r: event.clientX
    });
  },
  radiusIncreaser: function(event) {
      this.setState({
          r: 20
      });
  },
  render: function() {
    return (
      <svg width="640" height="880" onMouseMove={this.handleMouseMove} onKeyDown={this.radiusIncreaser} background="rgb(0,255,0)">
        <circle 
            cx={this.state.x} 
            cy={this.state.y} 
            r={this.state.r}
            stroke="black" 
            fill={
                "rgba(" + this.state.x + ",0,"+this.state.y+",20"+")"}
        />

        <rect width="640" height="50" y = "430" fill="rgb(10,255,200)"/>
      </svg>
    );
  }
});

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
  <Landscape/>,
//   <Building/>,
  document.getElementById('landscape')
//   document.getElementById('building')
);