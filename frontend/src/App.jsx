import React from 'react';
import Upload from './components/Upload/index'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles/index'

const App = () => (
    <Container>
        <GlobalStyle />
        <Content>
            <Upload />
        </Content>
    </Container>
)

export default App