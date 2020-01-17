import React from 'react'
import { Container, FileInfo, Preview } from './styles'

const FileList = () => (
    <Container color='red'>
        <li>
            <FileInfo>
                <Preview src=''></Preview>
                <div>
                    <strong>profile.png</strong>
                    <span>64KB <button onClick={() => {}}>Delete</button></span>
                </div>
            </FileInfo>
        </li>
    </Container>
)

export default FileList