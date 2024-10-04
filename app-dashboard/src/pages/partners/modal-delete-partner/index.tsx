import { useMutation } from "@tanstack/react-query";
import { Modal } from "../../../components";
import { deletePartner } from "../../../services";
import { closeModalById } from "../../../utils";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import type * as T from "./types";

export const ModalDeletePartner = ({ id, name, refetch }: T.Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["delete-partner"],
    mutationFn: () => deletePartner({ id }),
    onSuccess: () => {
      refetch();
      toast("Parceiro deletado com sucesso.", { type: "success" });
      closeModalById(`delete-partner-${id}`);
    },
    onError: () => {
      toast("Erro ao deletar parceiro.", { type: "error" });
    },
  });

  return (
    <Modal id={`delete-partner-${id}`} title="Deletar parceiro">
      <div className="p-4">
        <p className="text-lg">
          Você realmente deseja deletar o parceiro{" "}
          <span className="font-semibold text-[#d95d2b]">{name}</span>?
        </p>

        <div className="flex justify-end mt-4 gap-4">
          <button
            type="button"
            className="border border-[#d95d2b] text-[#d95d2b] px-4 py-2 rounded-md hover:bg-[#b84f20] hover:text-white transition-all"
            onClick={() => closeModalById(`delete-partner-${id}`)}
            disabled={isPending}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#292929] transition-all"
            onClick={() => mutate()}
            disabled={isPending}
          >
            {isPending ? (
              <span className="loading loading-spinner" />
            ) : (
              <FaTrashAlt className="inline mr-2" />
            )}
            Deletar
          </button>
        </div>
      </div>
    </Modal>
  );
};
