import React, { Component } from 'react';
import Upload from './components/Upload'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'
import FileList from './components/FileList'
import {uniqueId} from 'lodash'
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
            readableSize: filesize(22257664)
        }))
        console.log(`Received ${JSON.stringify(uploadedFiles)}`);
        
    }

    render() {
        return (<Container>
            <GlobalStyle />
            <Content>
                <Upload handleUpload={this.handleUpload}/>
                <FileList />
            </Content>
        </Container>
        )
    }
}

export default App