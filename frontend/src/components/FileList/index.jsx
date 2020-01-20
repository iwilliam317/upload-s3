import React from 'react'
import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar'
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md'

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src='https://avatars2.githubusercontent.com/u/5485672?s=460&v=4'></Preview>
                <div>
                    <strong>profile.png</strong>
                    <span>64KB <button onClick={() => { }}>Delete</button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar
                    strokeWidth={10} value={80} text={'80%'}
                    styles={
                        { root: { width: 24, marginTop: '-12px' }, path: { stroke: '#7159c1' } }
                    } />
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <MdLink style={{marginRight: 8}} size={24} color='#222'></MdLink>
                    </a>
                    <MdCheckCircle size={24} color='#78e5d5'></MdCheckCircle>
                    <MdError size={24} color='#e57878'></MdError>

            </div>
        </li>
    </Container>
)

export default FileList