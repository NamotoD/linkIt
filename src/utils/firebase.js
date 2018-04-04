import { firebase } from '../firebase/firebase';

const storage = firebase.storage();

export const showError  = (err) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (err.code) {
        case 'storage/unauthorized':
            console.log(`User doesn't have permission to access the object`);
            break;

        case 'storage/canceled':
            console.log(`User canceled the upload`);
            break;

        case 'storage/object_not_found':
            console.log(`No object exists at the desired reference`);
            break;

        case 'storage/bucket_not_found':
            console.log(`No bucket is configured for Cloud Storage`);
            break;

        case 'storage/project_not_found':
            console.log(`No project is configured for Cloud Storage`);
            break;

        case 'storage/quota_exceeded':
            console.log(`Quota on your Cloud Storage bucket has been exceeded. If you're on the free tier, upgrade to a paid plan. If you're on a paid plan, reach out to Firebase support.`);
            break;

        case 'storage/unauthenticated':
            console.log(`User is unauthenticated, please authenticate and try again.`);
            break;

        case 'storage/retry_limit_exceeded':
            console.log(`The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again.`);
            break;

        case 'storage/invalid_checksum':
            console.log(`File on the client does not match the checksum of the file received by the server. Try uploading again.`);
            break;

        case 'storage/invalid_event_name':
            console.log(`Invalid event name provided. Must be one of ['running', 'progress', 'pause']`);
            break;

        case 'storage/invalid_url':
            console.log(`Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>`);
            break;

        case 'storage/invalid-argument':
            console.log(`The argument passed to put() must be 'File', 'Blob', or 'UInt8' Array. The argument passed to putString() must be a raw, 'Base64', or 'Base64URL' string.`);
            break;

        case 'storage/no_default_bucket':
            console.log(`No bucket has been set in your config's storageBucket property.`);
            break;

        case 'storage/cannot_slice_blob':
            console.log(`Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.`);
            break;

        case 'storage/server_wrong_file_size':
            console.log(`File on the client does not match the size of the file recieved by the server. Try uploading again.`);
            break;

        case 'storage/unknown':
            console.log(`Unknown error occurred, inspect error.serverResponse`);
            break;
    }

};

export const deleteFileFromStorage = (fileToDelete) => {
    storage.ref(fileToDelete) // reference to the image to be deleted
        .delete()
        .then(function () {
            console.log('!!!!!!File in storage deleted successfully!');
            // document.getElementById('uploader').value = 0;
        })
        .catch((e) => {
            console.log('!!!!!!Failed attempt to delete file in storage!', e);
        });

}

export const showProgress = (snapshot) => {
    
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.getElementById('uploader').value = percentage;
}