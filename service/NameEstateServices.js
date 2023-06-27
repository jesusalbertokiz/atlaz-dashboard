export const NameEstateServices = {
    async getname(iso, setName) {
      try {
        const res = await fetch('/demo/data/estados.json', { headers: { 'Cache-Control': 'no-cache' } });
        const data = await res.json();
        const estado = data.data.find((element) => element.iso === iso);
        setName(estado.estado)
      } catch (err) {
        console.log(err);
      }
    }
  }