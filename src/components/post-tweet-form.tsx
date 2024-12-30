import { styled } from "styled-components";

const Form = styled. form`
    display; flex;
    flex-direction: column;
    gap: 10px;
`;

const TextArea = styled.textarea`
    border: 2px solid white;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    color: white;
    background-color: black;
    width: 100%;
    resize: none;
    &::placeholder{
        font-size: 16px;
        font-family: system-ui, -apple-FileSystem, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif; 
    }
    &:focus {
        outline: none;
        border-color: #1d9bf0;
    }
`;

const AttachFileButton = styled.label``;

const AttachFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input``;

export default function PosttweetForm(){
    return <Form>
        <TextArea placeholder="What is that?!"/>
        <AttachFileButton htmlFor="file">Add photo</AttachFileButton>
        <AttachFileInput type="file" id="file" accept="image/*"/>
        <SubmitBtn type="submit" value="Post Tweet" />
    </Form>
}