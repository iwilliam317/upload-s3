import React, { Component } from 'react';
import Upload from './components/Upload'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'
import FileList from './components/FileList'
import {uniqueId} from 'lodash'


class App extends Component {
    state = {
        uploadedFiles: []
    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file, 
            id: uniqueId(),
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