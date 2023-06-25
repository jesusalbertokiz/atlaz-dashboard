//Esta funcion sirve el Datatable de la pagina principal
export const EstatesService = {
    getStates() {
        return fetch('/demo/data/estados.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    },
};

