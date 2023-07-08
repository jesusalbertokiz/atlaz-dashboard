//Esta funcion sirve el Datatable de la pagina principal
export const EstatesService = {
    getStates() {
        return fetch('/demo/data/estados.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },
    async getname(iso, setName) {
        try {
          const res = await fetch('/demo/data/estados.json', { headers: { 'Cache-Control': 'no-cache' } });
          const data = await res.json();
          const estado = data.data.find((element) => element.iso === iso);
          setName(estado.estado)
        } catch (err) {
          console.log(err);
        }
      },
      getNegocios() {
        return fetch('/demo/data/negocios.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },  
};

