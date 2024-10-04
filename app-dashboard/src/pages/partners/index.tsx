import { Fragment, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../../services";
import { Loading } from "../../components";
import { openModalById } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalDeletePartner } from "./modal-delete-partner";
import { ModalRegisterPartner } from "./modal-register-partner";
import { ModalEditPartner } from "./modal-edit-partner";
import { toast } from "react-toastify";

export const Partners = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-partners"],
    queryFn: getPartners
  });

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const copyTablePageToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link copiado para a área de transferência.", { type: "success" });
  };

  return !isLoading ? (
    <main className="min-h-[calc(100vh-5rem)] bg-zinc-900">
      <div className="container mx-auto py-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between gap-6 items-center">
          <div className="w-1/3">
            <button
              type="button"
              className="border border-[#d95d2b] text-[#d95d2b] px-4 py-2 rounded-md hover:bg-[#b84f20] hover:text-white transition-all"
              onClick={() => navigate("/user/dashboard")}
            >
              Voltar
            </button>
          </div>

          <h1 className="text-white text-center font-semibold text-2xl w-1/3">Parceiros</h1>

          <div className="w-1/3 flex justify-end">
            <button
              type="button"
              onClick={() => openModalById("register-partner")}
              className="bg-[#d95d2b] text-white px-4 py-2 rounded-md hover:bg-[#b84f20] transition-all"
            >
              Adicionar parceiro
            </button>
          </div>
        </div>

        {/* Grid de Parceiros */}
        <div className="grid grid-cols-4 gap-6">
          {currentData?.map((partner) => (
            <Fragment key={partner.id}>
              <div className="flex flex-col w-full bg-white justify-between p-4 rounded-lg">
                <p className="truncate">
                  <span className="font-semibold">Nome do parceiro:</span> {partner.name}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Descrição:</span> {partner.description}
                </p>

                <p className="truncate">
                  <span className="font-semibold">URL do documento:</span> {partner.urlDoc}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Repositório git:</span> {partner.repositoryGit}
                </p>

                <div className="flex w-full gap-4 mt-2">
                  <button
                    type="button"
                    className="bg-[#d95d2b] text-white px-4 py-2 rounded-md w-[48%] hover:bg-[#b84f20] transition-all"
                    onClick={() => openModalById(`edit-partner-${partner.id}`)}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="bg-[#333333] text-white px-4 py-2 rounded-md w-[48%] hover:bg-[#292929] transition-all"
                    onClick={() => openModalById(`delete-partner-${partner.id}`)}
                  >
                    Deletar
                  </button>
                </div>
              </div>

              {/* Modais */}
              <ModalDeletePartner id={partner.id} name={partner.name} refetch={refetch} />
              <ModalEditPartner
                id={partner.id}
                name={partner.name}
                description={partner.description}
                repositoryGit={partner.repositoryGit}
                urlDoc={partner.urlDoc}
                projects={partner.projects}
                clients={partner.clients}
                refetch={refetch}
              />
            </Fragment>
          ))}
        </div>

        {/* Footer: Compartilhamento e Paginação */}
        <div className="flex justify-between items-center gap-4 py-6">
          <button
            type="button"
            className="bg-[#d95d2b] text-white px-4 py-2 rounded-md hover:bg-[#b84f20] transition-all"
            onClick={() => copyTablePageToClipboard()}
          >
            Compartilhar
          </button>

          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              className="bg-[#d95d2b] text-white px-4 py-2 rounded-md hover:bg-[#b84f20] transition-all"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            <span className="text-white">
              Página {currentPage} de {totalPages}
            </span>

            <button
              type="button"
              className="bg-[#d95d2b] text-white px-4 py-2 rounded-md hover:bg-[#b84f20] transition-all"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </div>
        </div>

        <ModalRegisterPartner refetch={refetch} />
      </div>
    </main>
  ) : (
    <Loading />
  );
};
