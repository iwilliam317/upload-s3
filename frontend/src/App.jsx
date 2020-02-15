import React, { Component } from 'react';
import Upload from './components/Upload'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'
import FileList from './components/FileList'
import { uniqueId } from 'lodash'
import filesize from 'filesize'


class App extends Component {
    state = {
        uploadedFiles: []
    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(22257664),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }))
        console.log(`Received ${JSON.stringify(uploadedFiles)}`);

        this.setState({ uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles) })
    }

    render() {
        const { uploadedFiles } = this.state
        return (<Container>
            <GlobalStyle />
            <Content>
                <Upload handleUpload={this.handleUpload} />
                {!!uploadedFiles.length && (
                    <FileList files={uploadedFiles} />
                )}
            </Content>
        </Container>
        )
    }
}

export default App