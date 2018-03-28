import React from 'react';

import LeftPane from './components/leftPane';
import RightPane from './components/rightPane';
class App extends React.Component{
	render(){
		return(
			<div className="main-container">
				<LeftPane/>
				<RightPane/>
			</div>
		)
	}
}

export default App;