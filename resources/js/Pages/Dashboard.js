import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './style.css'


export default function Dashboard(props){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        price: '',
    });
    // function handleSubmit(){
    //
    //     Inertia.post(`hi`, {data: data}, {
    //         onStart: () => {
    //             // Do something the moment request is made
    //         },
    //         onSuccess: response => {
    //             console.log(response.message)
    //         },
    //         onError: e => {
    //             console.log(e.errors)
    //         }
    //     })
    // }

    const submit = (e) => {
        e.preventDefault();

        axios.post(route('save-spends'), {
            name:data.name,
            price: data.price
        })
            .then(res => {
                if(res.data.status === 200){
                    toastr.options = {
                        positionClass : 'toast-top-full-width',
                        hideDuration: 300,
                        timeOut: 3000
                    }
                    toastr.clear()
                    setTimeout(() => toastr.success('Success'), 300)
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            })
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-10">

                            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                            <ValidationErrors errors={errors} />

                            <form onSubmit={submit}>
                                <div>
                                    <div className="text-center">Spends for current month : <strong>{props.count} UAH</strong></div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Name of item..."
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Input
                                        type="text"
                                        name="price"
                                        placeholder="Price of item..."
                                        value={data.price}
                                        className="mt-1 block w-full"
                                        autoComplete="price"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4" processing={processing}>
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
