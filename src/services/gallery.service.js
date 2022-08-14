import { S3Client, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const Bucket = 'react-bucket-my-app'

const client = new S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
    signatureVersion: 'v4'
});

const upload = async (file) => {
    var fileData = file.target.files[0]
    const params = {
        Bucket: Bucket,
        Key: fileData.name,
        Body: fileData,
    };
    await client.send(new PutObjectCommand(params));
}

const getList = async (Bucket) => {
    let imgForRender = null
    const command = new ListObjectsCommand({ Bucket });
    const response = await client.send(command);
    if (response.Contents) {
        imgForRender = response.Contents?.map(awsFile => ({ imgUrl: `https://${Bucket}.s3.us-east-1.amazonaws.com/${awsFile.Key}`, fileName: awsFile.Key }))
    }
    return imgForRender;
}

const deleteFile = async (Bucket, Key) => {
    try {
        const command = new DeleteObjectCommand({ Bucket, Key });
        const deleted = await client.send(command);
        return deleted
    } catch (e) {
        return null;
    }
};

export const galleryService = {
    Bucket,
    upload,
    getList,
    deleteFile
}