import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from '../../../../components/select';
import './form.sass'
import { optionsGender, optionsState } from './constans';
import DatePicker from '../../../../components/dataPicker';
import Button from '../../../../components/button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FormData } from '../../../../services/models/types';
import usePostForm, { useGetcharacterById } from '../../../../services/models';
import Card from '../../../../components/card';
import { useParams } from 'react-router-dom';
import Input from '../../../../components/input';

function Form() {
    const { handleSubmit, setValue, control } = useForm<FormData>();
    const postMutation = usePostForm();
    const { id } = useParams<{ id?: string }>();
    const characterId = id ? parseInt(id) : undefined;
    const getByid = useGetcharacterById(characterId);

    useEffect(() => {
        if (getByid.data) {
            const { name, gender, status, created } = getByid.data;
            const [firstName, ...rest] = name.split(" ");
            const lastName = rest.join(" ");

            setValue('firstName', firstName);
            setValue('lastName', lastName);
            setValue('gender', optionsGender.find(optGender => optGender.value.toLowerCase().trim() === gender.toLowerCase().trim()) ?? null);
            setValue('state', optionsState.find(opt => opt.value.toLowerCase().trim() === status.toLowerCase().trim()) ?? null);
            setValue('startDate', new Date(created));
        }
    }, [getByid.data, setValue]);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const dataToSave = { ...data, gender: data.gender?.value ?? "", state: data.state?.value ?? "" }
        console.log('Formulario enviado:', dataToSave);
        postMutation.mutate(dataToSave, {
            onSuccess: (response) => {
                console.log(' Datos enviados con éxito:', response);
            },
            onError: (error: any) => {
                console.error(' Error al enviar datos:', error.message);
            }
        });
    };

    return (
        <div className='form-wrapper'>
            <Card>
                <div className='title-wrapper'>
                    <h1> 1 Configuracion general</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-content'>
                            <div className='form-right'>
                                <Controller
                                    control={control}
                                    name="firstName"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            label="Nombre"
                                            placeHolder="Ingresa tu nombre"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="lastName"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            label="Apellido"
                                            placeHolder="Ingresa su apellido"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="startDate"
                                    defaultValue={null}
                                    render={({ field }) => (
                                        <DatePicker
                                            label="Fecha de inicio contabilización"
                                            placeholder="Seleccionar"
                                            selectedDate={field.value}
                                            onChange={field.onChange}
                                            helperText={field.value === null ? 'Selecciona una fecha' : ''}
                                        />
                                    )}
                                />

                            </div>
                            <div className='form-left'>
                                <Controller
                                    control={control}
                                    name="gender"
                                    render={({ field }) => (
                                        <Select
                                            label='Genero'
                                            optionsSelect={optionsGender}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="state"
                                    render={({ field }) => (
                                        <Select
                                            label='Estado'
                                            optionsSelect={optionsState}
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />

                            </div>
                        </div>
                        <div className='footer-wrapper'>
                            <Button label='Salir' buttonStyle='ghost' />
                            <Button label='Siguiente' icon={{ end: faChevronRight }} type='submit' />
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}
export default Form


