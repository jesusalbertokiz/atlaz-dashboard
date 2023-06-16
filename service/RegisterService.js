export const RegisterServices = {
    getCompanyData() {
        const date = new Date();
        const dayLabels = [];
        for (let i = 0; i < 7; i++) {
          const day = date.toLocaleString('es-ES', { weekday: 'long'});
          dayLabels.unshift(day.charAt(0).toUpperCase() + day.slice(1));
          date.setDate(date.getDate() - 1);
        }
        const data = [];
        let value = Math.floor(Math.random() * 51) + 50;
        for (let i = 0; i < 7; i++) {
          data.unshift(value);
          value += Math.floor(Math.random() * 11) - 5;
          if (value < 50) {
            value = 50;
          } else if (value > 100) {
            value = 100;
          }
        }
        return {
          labels: dayLabels,
          datasets: [
            {
              label: 'Registro de empresas',
              data: data,
              fill: true,
              backgroundColor: '#2f4860',
              borderColor: '#ff6901',
              tension: 0.4
            }
          ]
        };
    }
}