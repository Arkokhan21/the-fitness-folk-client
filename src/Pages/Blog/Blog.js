import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y text-center">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Database</p>
                            <p className="text-gray-600">11 Nov 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    Difference between SQL and NoSQL?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Database</p>
                            <p className="text-gray-600">11 Nov 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is JWT, and how does it work?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Node.js</p>
                            <p className="text-gray-600">11 Nov 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is the difference between javascript and NodeJS?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Node.js</p>
                            <p className="text-gray-600">11 Nov 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <div className="inline-block text-gray-700">
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does NodeJS handle multiple requests at the same time?
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="cursor-pointer inline-flex items-center font-semibold">
                    See all blogs
                    <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Blog;