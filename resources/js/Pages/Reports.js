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
                                    <div className="text-center">Items for current month:</div>
                                    <div>
                                        {props.spends.map(d => (
                                            <div key={d.id}><strong>{d.name} </strong>
                                                <div className="text-blue-900">
                                                    <strong>{d.price}</strong>
                                                </div>
                                            </div>
                                        ))}
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
