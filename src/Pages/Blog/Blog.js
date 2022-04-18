import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl mt-5'> Question And Answer </h2>
            <h3 className='text-3xl mt-5'>Difference between authorization and authentication</h3>
            <p className='mt-5'>Authorization: Authorization in system security is the process of giving the user permission to access a specific resource or function <br/>
            Giving someone permission to download a particular file on a server or providing individual users <br/>
            In secure environments, authorization must always follow authentication</p>
            <p className='mt-2'>Authentication: Passwords. Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access.<br/>
            In some instances, systems require the successful verification of more than one factor before granting access. This multi-factor authentication (MFA) requirement is often deployed to increase security beyond what passwords alone can provide.
            </p>
            <h3 className='text-3xl mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='mt-5'>Firebase is one of the most powerful reliable database hosting system. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br/>
            alternative of google firebase is Parse, Back4app, Kinvey, Backendless and many more</p>
            <h3 className='text-3xl mt-5'>What other services does firebase provide other than authentication</h3>
            <p className='mt-5 mb-5'>Cloud Functions, Firebase Hosting, Cloud Storage, Cloud Firestore and many more</p>

        </div>
    );
};

export default Blog;