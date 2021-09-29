import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import axios from "axios";

export default function Reports(props){
    return(
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reports</h2>}
        >
            <Head title="Reports" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-10">

                            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                            <div>
                                <div>
                                    <div className="text-center"><strong>Items for current month:</strong></div>
                                    <div>
                                            <div>
                                                <table className="w-full">
                                                    <thead>
                                                    <tr className="bg-gray-400">
                                                        <th className="border text-center p-3 w-1/2">Name</th>
                                                        <th className="border text-center p-3 w-1/2">Price</th>
                                                        <th className="border text-center p-3 w-px">Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {props.spends.map(d => (
                                                        <tr key={d.id}>
                                                            <td className="border text-center p-3">{d.name}</td>
                                                            <td className="border text-center p-3">{d.price}</td>
                                                            <td className="border text-center  p-3">
                                                                <div className="flex flex-row justify-between">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                </table>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
