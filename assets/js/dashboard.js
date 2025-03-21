
  
        document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('barChart').getContext('2d');

            const data = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Overall Appointments',
                    data: [4000, 2500, 7000, 3000, 2000, 4000, 3000, 948],
                    backgroundColor: ['#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b'],
                    borderColor: ['#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b'],
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                    hoverBackgroundColor: '#ff6b6b',
                    hoverBorderColor: '#ff6b6b'
                }]
            };

            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 2000
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.parsed.y;
                                }
                            }
                        }
                    }
                }
            };

            new Chart(ctx, config);
        });

        document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('donutChart').getContext('2d');

            const data = {
                labels: ['Hair Cut', 'Massage', 'Hair Colouring', 'Facial', 'Skin Treatment'],
                datasets: [{
                    data: [2345, 456, 567, 3456, 4567],
                    backgroundColor: ['#ffce56', '#e74c3c', '#ff69b4', '#2ecc71', '#3498db'],
                    borderColor: ['#ffce56', '#e74c3c', '#ff69b4', '#2ecc71', '#3498db'],
                    borderWidth: 1
                }]
            };

            const config = {
                type: 'doughnut',
                data: data,
                options: {
                    cutout: '60%',
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.parsed.y;
                                }
                            }
                        }
                    }
                }
            };

            new Chart(ctx, config);
        });
