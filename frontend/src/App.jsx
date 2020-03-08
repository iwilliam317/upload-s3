import React, { Component } from 'react';
import Upload from './components/Upload'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'
import FileList from './components/FileList'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import api from './services/api'

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

        uploadedFiles.forEach(uploadedFile => this.processUpload(uploadedFile))
    }

    updateFile = (id, data) => {
        const { uploadedFiles } = this.state
        this.setState({
            uploadedFiles: uploadedFiles.map(uploadedFile => {
                return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile
            })
        })

    }

    processUpload = uploadedFile => {
        const data = new FormData()
        data.append('file', uploadedFile.file, uploadedFile.name)
        console.log(data, uploadedFile)

        const configPost = {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                console.log(e)
                console.log(progress)
                this.updateFile(uploadedFile.id, { progress })
            }
        }
        api.post('/posts', data, configPost)

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