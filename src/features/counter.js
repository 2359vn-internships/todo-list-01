import { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./counterSlice";

class Counter extends Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.props.dispatch(increment())}>
						Increment
					</button>
					<h1>{this.props.count}</h1>
					<button onClick={() => this.props.dispatch(decrement())}>
						Decrement
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	count: state.counter.value,
});

export default connect(mapStateToProps)(Counter);
