import { PhotoList } from "./photo-list";

export const Gallery = ({ photos, onDelete, Bucket, loadPhotos }) => {

    return (
        <div className='main-gallery' >
            {photos ?
                <PhotoList
                    photos={photos}
                    onDelete={onDelete}
                    Bucket={Bucket}
                    loadPhotos={loadPhotos}
                />
                :
                <div className='no-content'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83o7RxXhQQg78OZz2yO2AOgfafJ0gdWmLDQ&usqp=CAU" alt="" />
                </div >
            }
        </div>
    )
}

