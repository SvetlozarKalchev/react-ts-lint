import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./App.less";

class App extends React.Component<any, any> {
	public render(): any {
		let foo: string = '\n';

		console.log(foo);

		return (
			<div>
				<h1>App title</h1>
				<div>App content</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);
