import React from 'react';
import Upload from './components/Upload'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'
import FileList from './components/FileList'

const App = () => (
    <Container>
        <GlobalStyle />
        <Content>
            <Upload />
            <FileList />
        </Content>
    </Container>
)

export default App