import React from 'react'
import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar'

const FileList = () => (
    <Container color='red'>
        <li>
            <FileInfo>
                <Preview src=''></Preview>
                <div>
                    <strong>profile.png</strong>
                    <span>64KB <button onClick={() => { }}>Delete</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar
                    strokeWidth={10} value={80} text={'80%'}
                    styles={
                        { root: { width: 24 }, path: { stroke: '#7159c1' } }
                    } />
            </div>
        </li>
    </Container>
)

export default FileList