import React from 'react'
import marked from 'marked'

class Preview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show: 'preview'}
    }

    togglePreview = () => {
        this.setState({show: 'preview'})
    }

    toggleSource = () => {
        this.setState({show: 'source'})
    }

    render() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            smartLists: true,
            sanitize: true,
            smartypants: false
          })
          const text = marked(this.props.content)
          const preview = (
            <section>
                <header>
                    <label id="preview-label" htmlFor="preview">Preview:</label>
                    <button onClick={this.toggleSource}>Show HTML</button>
                </header>
                <article id="preview" dangerouslySetInnerHTML={{__html: text}}></article>
            </section>
          )
          const source = (
            <section>
                <header>
                    <label id="source-label" htmlFor="source-html">HTML Code:</label>
                    <button onClick={this.togglePreview}>Preview</button>
                </header>
                <article id="source-html">{text}</article>
            </section>
          )
        return (
            this.state.show === 'preview' ? preview : source
        )
    }
}

export default Preview