import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './styles/index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editorContent: ""}
    }

    getContent = value => {
        this.setState({editorContent: value})
    }
    render() {
        return(
            <React.Fragment>
                <Editor content={this.getContent}/>
                <Preview content={this.state.editorContent} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('main'))