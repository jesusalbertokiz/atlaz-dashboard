import { useRouter } from 'next/router';

function EstatePage() {
  const router = useRouter();
  const { iso } = router.query;

  return (
    <div>
      <p>El ID de la página es: {iso}</p>
    </div>
  );
}

export default EstatePage;