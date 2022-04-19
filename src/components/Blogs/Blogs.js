import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full grid grid-cols-2 my-8 '>
            <div className='bg-slate-200 m-5 rounded-lg p-8'>
                <h1 className='py-3 text-2xl'>Question: Difference between authorization and authentication

?</h1>
                <p>Answer: In website or app authentication is a process of giving user permission to access a a specific resource or function.Its confirm our identity when you want login an website or app .authentication work by  passwords, biometrics, one-time pins, or apps<br />
                on the other hand , authorization means  gives permision to user access a specific resourcse.its works by a settings which maintain by security teams.
                </p>
            </div>
            <div  className='bg-slate-200 m-5 rounded-lg p-8'>
                <h1  className='py-3 text-2xl' >Question: semantic ট্যাগ কি?</h1>
                <p>We use google firebase because it offers many featurse.We can add athentication easily by google firebase.it reduce our development time.Not only authentication we can save and use realtime data by google firebase.We can use it by no cost.
                    <br />
                    the  other options we have to implement authentication is Two-Factor Authentication (2FA) ...
Single Sign-On (SSO) ...
Multi-Factor Authentication (MFA) ...
Password Authentication Protocol (PAP) etc
                </p>
            </div>
        </div>
    );
};

export default Blogs;