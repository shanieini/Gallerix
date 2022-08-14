import { RiChatDeleteFill } from 'react-icons/ri';

export const PhotoPreview = ({ photo, onDelete, Bucket, loadPhotos }) => {

    const deleteFile = async () => {
        await onDelete(Bucket, photo.fileName);
        await loadPhotos();
    }

    return (
        <section className="card-container">
            <div className="card-img">
                <div className="photo-wrapper">
                    <img className="photo" src={photo.imgUrl} alt="photo" />
                </div>
                <div className="btn-delete" onClick={deleteFile} ><RiChatDeleteFill /></div>
            </div>
        </section>
    )
}