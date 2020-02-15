import React from 'react'
import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const FileList = ({ files }) => (
    <Container>
        {files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview}></Preview>
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>{uploadedFile.readableSize} <button onClick={() => { }}>Delete</button></span>
                    </div>
                </FileInfo>
                <div>
                    <CircularProgressbar
                        strokeWidth={10} value={uploadedFile.progress} text={uploadedFile.progress + '%'}
                        styles={
                            { root: { width: 24, marginTop: '-12px' }, path: { stroke: '#7159c1' } }
                        } />
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        <MdLink style={{ marginRight: 8 }} size={24} color='#222'></MdLink>
                    </a>
                    <MdCheckCircle size={24} color='#78e5d5'></MdCheckCircle>
                    <MdError size={24} color='#e57878'></MdError>

                </div>
            </li>

        ))}

    </Container>
)

export default FileList