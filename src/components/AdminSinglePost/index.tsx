type AdminSinglePostPageProps = {
  idParam: Promise<{ id: string }>;
};

export async function AdminSinglePost({ idParam }: AdminSinglePostPageProps) {
  const { id } = await idParam;

  return <h1>AdminSinglePost: {id}</h1>;
}
