import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer } from './styles'

class Upload extends Component {
    render() {
        return (<>
            <h1>Hey</h1>
            <Dropzone accept='image/*' onDropAccepted={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <input {...getInputProps()} />
                    </DropContainer>
                )}
            </Dropzone>
        </>)
    }
}

export default Upload