import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { GrayInput, GraySelect, Modal, SecondaryButton } from "../../../components";
import { editCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";

export const ModalEditCompany = ({ id, name, collaborators, isActive, refetch }: T.Props) => {
    const {
        reset,
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<T.Schema>({
        defaultValues: { name: name, collaborators: collaborators, isActive: isActive }
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ["update-company"],
        mutationFn: ({ name, collaborators, isActive }: T.MutationProps) =>
            editCompany({ id, name, collaborators, isActive }),
        onSuccess: () => {
            reset();
            refetch();
            toast("Empresa atualizada com sucesso.", { type: "success" });
            closeModalById(`update-company=${id}`);
        },
        onError: () => {
            toast("Falha ao atualizar a empresa.", { type: "error" });
        }
    });

    const onSubmit = (data: T.Schema) => {
        if (!data.name || !data.collaborators) {
            return toast("Por favor, preencha todos os campos.", { type: "warning" });
        }

        mutate({ name: data.name, collaborators: data.collaborators, isActive: data.isActive });
    };

    useEffect(() => {
        setValue("name", name);
        setValue("collaborators", collaborators);
        setValue("isActive", isActive);
    }, [name, collaborators, isActive]);

    return (
        <Modal id={`update-company=${id}`} title="Atualizar empresa">
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="text"
                            label="Nome:"
                            value={value}
                            onChange={onChange}
                            placeholder="Insira o nome..."
                        />
                    )}
                />

                <Controller
                    name="collaborators"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GrayInput
                            type="number"
                            onChange={onChange}
                            value={Number(value)}
                            label="Qtd. de colaboradores:"
                            placeholder="Informe a quantidade de colaboradores..."
                        />
                    )}
                />

                <Controller
                    name="isActive"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <GraySelect
                            label="Está ativo?"
                            onChange={onChange}
                            value={value.toString()}
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </GraySelect>
                    )}
                />

                <div className={styles.actionButtons}>
                    <SecondaryButton type="submit" disabled={isPending}>
                        Atualizar
                    </SecondaryButton>
                </div>
            </form>
        </Modal>
    );
};
