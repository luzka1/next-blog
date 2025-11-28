export default function NotFoundPage() {
  return (
    <>
    <title>Página não encontrada!</title>

    <div className="min-h-80 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex justify-center items-center">
      <div>
        <h1 className="text-7xl/tight mb-4 font-extrabold text-center">404</h1>
        <p>
          Erro 404 - A página que você está tentando acessar não existe nesse!
        </p>
      </div>
    </div>
    </>
  );
}
