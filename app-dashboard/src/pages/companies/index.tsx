import { Fragment, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services";
import { Loading } from "../../components";
import { formatDate, openModalById } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalDeleteCompany } from "./modal-delete-company";
import { ModalEditCompany } from "./modal-edit-company";
import { ModalRegisterCompany } from "./modal-register-company";
import { toast } from "react-toastify";

export const Companies = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-companies"],
    queryFn: getCompanies,
  });

  const itemsPerPage = 10;
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

          <h1 className="text-white text-center font-semibold text-2xl w-1/3">Empresas externas</h1>

          <div className="w-1/3 flex justify-end">
            <button
              type="button"
              onClick={() => openModalById("register-company")}
              className="bg-[#d95d2b] text-white px-4 py-2 rounded-md hover:bg-[#b84f20] transition-all"
            >
              Nova empresa
            </button>
          </div>
        </div>

        {/* Grid de Empresas */}
        <div className="grid grid-cols-4 gap-6">
          {currentData?.map((company) => (
            <Fragment key={company.id}>
              <div className="flex flex-col w-full bg-white justify-between p-4 rounded-lg">
                <p className="truncate">
                  <span className="font-semibold">Nome:</span> {company.companyName}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Qtd. colaboradores:</span> {company.collaboratorsCount}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Ativa:</span> {company.isActive ? "Sim" : "Não"}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Último envio:</span> {formatDate(company.lastSubmit)}
                </p>

                <p className="truncate">
                  <span className="font-semibold">Criada em:</span> {formatDate(company.createdAt)}
                </p>

                <div className="flex w-full gap-4 mt-2">
                  <button
                    type="button"
                    className="bg-[#d95d2b] text-white px-4 py-2 rounded-md w-[48%] hover:bg-[#b84f20] transition-all"
                    onClick={() => openModalById(`edit-company-${company.id}`)} // Corrigido o uso do '=' para '-'
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="bg-[#333333] text-white px-4 py-2 rounded-md w-[48%] hover:bg-[#292929] transition-all"
                    onClick={() => openModalById(`delete-company-${company.id}`)}
                  >
                    Deletar
                  </button>
                </div>
              </div>

              {/* Modais */}
              <ModalDeleteCompany
                id={company.id}
                name={company.companyName}
                refetch={refetch}
              />

              <ModalEditCompany
                id={company.id} // Certifique-se de que o ID é passado corretamente
                refetch={refetch}
                name={company.companyName}
                isActive={company.isActive}
                collaborators={company.collaboratorsCount}
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

        <ModalRegisterCompany refetch={refetch} />
      </div>
    </main>
  ) : (
    <Loading />
  );
};
