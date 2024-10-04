import { useMutation } from "@tanstack/react-query";
import { Modal, RedButton } from "../../../components";
import { deleteCompany } from "../../../services";
import { closeModalById } from "../../../utils";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import * as T from "./types";
import { FaTrashAlt } from "react-icons/fa";

export const ModalDeleteCompany = ({ id, name, refetch }: T.Props) => {
    const { mutate, isPending } = useMutation({
        mutationKey: ["remove-company"],
        mutationFn: () => deleteCompany({ id }),
        onSuccess: () => {
            refetch();
            toast("Empresa removida com sucesso.", { type: "success" });
            closeModalById(`remove-company=${id}`);
        },
        onError: () => {
            toast("Ocorreu um erro ao tentar remover a empresa.", { type: "error" });
        }
    });

    return (
        <Modal id={`remove-company=${id}`} title="Remover empresa">
            <div className={styles.container}>
                <p>
                    Tem certeza de que deseja excluir a empresa{" "}
                    <span className={styles.companyName}>{name}</span>?
                </p>

                <div className={styles.actionButtons}>
                    <RedButton onClick={() => mutate()} disabled={isPending}>
                        <FaTrashAlt />
                    </RedButton>
                </div>
            </div>
        </Modal>
    );
};
