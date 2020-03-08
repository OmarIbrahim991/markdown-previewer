import React from 'react'

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    handleChange = e => {
        this.setState(
            {value: e.target.value},
            this.props.content(e.target.value)
        )
    }
    
    render() {
        return (
            <section>
                <label id="editor-label" htmlFor="editor">Editor:</label>
                <textarea id="editor" className="partition" value={this.state.value} onChange={this.handleChange}></textarea>
            </section>
        )
    }
}

export default Editor