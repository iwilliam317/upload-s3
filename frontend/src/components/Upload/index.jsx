import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

class Upload extends Component {

    renderMessage = (isDragActive, isDragReject) => {
        if(!isDragActive){
            return <UploadMessage>Drag the files here...</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type='Error'>File(s) not supported...</UploadMessage>
        }

        return <UploadMessage type='success'>Drop the files here...</UploadMessage>
    }
    render() {
        const {handleUpload} = this.props
        return (<>
            <Dropzone accept='image/*' onDropAccepted={handleUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        {this.renderMessage(isDragActive, isDragReject)}
                        <input {...getInputProps()} />
                    </DropContainer>
                )}
            </Dropzone>
        </>)
    }
}

export default Upload