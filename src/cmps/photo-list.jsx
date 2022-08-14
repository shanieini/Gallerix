import { PhotoPreview } from './photo-preview';

export const PhotoList = ({ photos, onDelete, Bucket, loadPhotos }) => {
    return (
        <section className="photo-list-container">
            {photos.map((photo, idx) => <PhotoPreview
                key={idx}
                photo={photo}
                onDelete={onDelete}
                Bucket={Bucket}
                loadPhotos={loadPhotos}
            />)}
        </section>
    )
}