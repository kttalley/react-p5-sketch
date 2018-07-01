import React from 'react'
import ReactDOM from 'react-dom'



let SvgCanvas = React.createClass( {
    getInitialState: function() {
        return {x: 50, y: 50};
    },
    handleMouseMove: function(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    },
    render: function() {
        return (
            <div>

                <div>
                    <svg width = "320" height="440" onMouseMove = {this.handleMouseMove}>
                        <circle 
                            cx = {this.state.x}
                            cy = {this.state.y}
                            stroke = "black"
                            r="100"
                        />
                    </svg>
                </div>
                <div>
                    <svg width = "320" height="440" onMouseMove = {this.handleMouseMove}>
                        <circle 
                            cx = {this.state.y}
                            cy = {this.state.x}
                            stroke = "black"
                            r = "25"
                        />
                    </svg>
                </div> 


            </div>
        );
    }

});


ReactDom.render(
    <SvgCanvas/>,
    document.getElementById('svgCanvas')
);