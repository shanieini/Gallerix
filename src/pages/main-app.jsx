import { useEffect, useState } from 'react';
import { galleryService } from '../services/gallery.service';
import { Form } from '../cmps/form';
import { Gallery } from '../cmps/gallery';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';

export function MainApp() {

    const [photos, setPhotos] = useState([])

    const Bucket = galleryService.Bucket

    useEffect(() => {
        loadPhotos()
    }, [])

    const loadPhotos = async () => {
        const imgForRender = await galleryService.getList(galleryService.Bucket);
        setPhotos(imgForRender);
    }

    const onUpload = async (ev) => {
        try {
            await galleryService.upload(ev)
            showSuccessMsg('Added Successfully')
            loadPhotos()
        } catch (err) {
            showErrorMsg('Cant Add')
        }
    }

    const onDelete = async (Bucket, Key) => {
        try {
            await galleryService.deleteFile(Bucket, Key)
            showSuccessMsg('Deleted Successfully')
            loadPhotos()
        } catch (err) {
            showErrorMsg('Cant Delete')
        }
    }

    return (
        <div className='gallery'>
            <Form onUpload={onUpload} />
            {photos &&
                <div className='counter'>Your gallery containes: {photos.length} photos</div>
            }
            <Gallery
                Bucket={Bucket}
                onDelete={onDelete}
                loadPhotos={loadPhotos}
                photos={photos}
            />
        </div>
    )
}

