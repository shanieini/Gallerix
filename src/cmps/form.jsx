import { FcGallery } from 'react-icons/fc';

export const Form = ({ onUpload }) => {

    return (
        <form>
            <input type="file" id='file'
                onChange={onUpload}
            />
            <label htmlFor="file">
                <FcGallery />
                Upload a photo
            </label>
        </form>
    )
}

