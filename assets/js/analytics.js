
// Horizontal Bar Chart Initialization

    // Horizontal Bar Chart Initialization
    const ctx = document.getElementById('horizontalBarChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar', // Use 'bar' instead of 'horizontalBar' (deprecated in Chart.js v3+)
        data: {
            labels: ['Trendy Salon', 'Worldwide Salon', 'Karoma Salon'],
            datasets: [{
                label: 'Ratings', // Add a label for the dataset
                data: [65000, 90000, 78000],
                backgroundColor: 'rgba(238, 45, 122, 1)', // Pink color
                borderColor: 'rgba(238, 45, 122, 1)', // Pink border
                borderWidth: 1,
                borderRadius: 10, // Add border radius for rounded corners
                borderSkipped: false, // Ensure all corners are rounded
            }]
        },
        options: {
            indexAxis: 'y', // Make the chart horizontal
            responsive: true, // Ensure responsiveness
            maintainAspectRatio: false, // Allow aspect ratio adjustment
            scales: {
                x: {
                    grid: {
                        display: false, // Hide x-axis grid lines
                    },
                    beginAtZero: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return Math.round(value / 1000) + 'K'; // Format as "XK" without unnecessary decimals
                        },
                        maxRotation: 0, // Ensure labels are not rotated
                        minRotation: 0, // Ensure labels are not rotated
                    },
                },
                y: {
                    grid: {
                        display: false, // Hide y-axis grid lines
                    },
                    ticks: {
                        display: false, // Hide default y-axis labels
                    },
                },
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + Math.round(context.parsed.x / 1000) + 'K';
                        },
                    },
                },
            },
        },
        plugins: [
            {
                id: 'customLabelsAboveBars',
                afterDraw: (chart) => {
                    const { ctx, chartArea, scales } = chart;
                    const yScale = scales.y;
                    const xScale = scales.x;
                    const labels = chart.data.labels;
                    const datasets = chart.data.datasets;
    
                    // Loop through each bar and draw the label above it
                    labels.forEach((label, index) => {
                        const barValue = datasets[0].data[index]; // Get the value for the bar
                        const yPosition = yScale.getPixelForValue(index); // Get the y-coordinate of the bar
                        const xPosition = xScale.getPixelForValue(barValue); // Get the x-coordinate of the bar's end
    
                        // Draw the label above the bar
                        ctx.save();
                        ctx.font = '12px Arial'; // Set font size and style
                        ctx.fillStyle = '#000'; // Set text color
                        ctx.textAlign = 'left'; // Align text to the left
                        ctx.fillText(label, 10, yPosition - 30); // Adjust position dynamically
                        ctx.restore();
                    });
                },
            },
        ],
    });

// Horizontal Bar Chart Initialization
const ctx2 = document.getElementById('horizontalBarChart2').getContext('2d');

new Chart(ctx2, {
    type: 'bar', // Use 'bar' instead of 'horizontalBar' (deprecated in Chart.js v3+)
    data: {
        labels: ['Mr. Walter', 'Mr. Watson', 'Mr. Hussey'],
        datasets: [{
            label: 'Ratings', // Add a label for the dataset
            data: [65000, 90000, 78000],
            backgroundColor: 'rgba(238, 45, 122, 0.4)', // Pink color
            borderColor: 'rgba(238, 45, 122, 0.4))', // Pink border
            borderRadius: 10, // Add border radius for rounded corners
            borderSkipped: false, // Ensure all corners are rounded
        }]
    },
    options: {
        indexAxis: 'y', // Make the chart horizontal
        responsive: true, // Ensure responsiveness
        maintainAspectRatio: false, // Allow aspect ratio adjustment
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                        return Math.round(value / 1000) + 'K'; // Format as "XK" without unnecessary decimals
                    },
                    maxRotation: 0, // Ensure labels are not rotated
                    minRotation: 0, // Ensure labels are not rotated
                },
            },
            y: {
                grid: {
                    display: false, // Hide y-axis grid lines
                },
                ticks: {
                    display: false, // Hide default y-axis labels
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + Math.round(context.parsed.x / 1000) + 'K';
                    },
                },
            },
        },
    },
    plugins: [
        {
            id: 'customLabelsAboveBars',
            afterDraw: (chart) => {
                const { ctx, chartArea, scales } = chart;
                const yScale = scales.y;
                const xScale = scales.x;
                const labels = chart.data.labels;
                const datasets = chart.data.datasets;

                // Loop through each bar and draw the label above it
                labels.forEach((label, index) => {
                    const barValue = datasets[0].data[index]; // Get the value for the bar
                    const yPosition = yScale.getPixelForValue(index); // Get the y-coordinate of the bar
                    const xPosition = xScale.getPixelForValue(barValue); // Get the x-coordinate of the bar's end

                    // Draw the label above the bar
                    ctx.save();
                    ctx.font = '12px Arial'; // Set font size and style
                    ctx.fillStyle = '#000'; // Set text color
                    ctx.textAlign = 'left'; // Align text to the left
                    ctx.fillText(label, 10, yPosition - 30); // Adjust position dynamically
                    ctx.restore();
                });
            },
        },
    ],
});



// Line and Bar Chart Initialization
const ctx3 = document.getElementById('lineBarChart').getContext('2d');

new Chart(ctx3, {
type: 'bar', // Use 'bar' instead of 'horizontalBar' (deprecated in Chart.js v3+)
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            type: 'line', // Line dataset
            label: 'Monthly Data',
            data: [100, 200, 300, 948, 500, 600, 700],
            borderColor: 'rgba(238, 45, 122, 1)', // Pink color
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: 'rgba(238, 45, 122, 1)', // Pink color for points
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.4, // Smoothness of the line
        },
        {
            type: 'bar', // Bar dataset
            label: 'Monthly Data',
            data: [100, 200, 300, 948, 500, 600, 700],
            backgroundColor: 'rgba(238, 45, 122, 1)', // Pink color
            borderColor: 'rgba(238, 45, 122, 1)', // Pink border
            borderWidth: 1,
            barThickness: 40, // Adjust bar width
        },
    ],
},
options: {
    responsive: true, // Ensure responsiveness
    maintainAspectRatio: false, // Allow aspect ratio adjustment
    scales: {
        x: {
            grid: {
                display: false, // Hide x-axis grid lines
            },
            ticks: {
                maxRotation: 0, // Ensure labels are not rotated
                minRotation: 0, // Ensure labels are not rotated
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value, index, values) {
                    return value.toLocaleString(); // Format as "X"
                },
            },
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    return context.dataset.label + ': ' + context.parsed.y.toLocaleString();
                },
            },
        },
    },
},
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



// Customer Map Chart Initialization
const ctx5 = document.getElementById('customerMapChart').getContext('2d');

new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'], // Only 4 months
        datasets: [
            {
                label: 'Customers (Positive)',
                data: [38000, 40000, 25000, 22000], // Data for Jan, Feb, Mar, Apr
                backgroundColor: 'rgba(238, 45, 122, 1)', // Pink color for positive values
                borderColor: 'rgba(238, 45, 122, 1)', // Pink border
                borderWidth: 1,
                borderRadius: 20, // Add border radius for rounded corners
                borderSkipped: false, // Ensure all corners are rounded
            },
            {
                label: 'Customers (Negative)',
                data: [-38000, -40000, -25000, -22000], // Data for Jan, Feb, Mar, Apr
                backgroundColor: 'rgba(238, 45, 122, 0.2)', // Same pink color for negative values
                borderColor: 'rgba(238, 45, 122, 0.2)', // Same pink border
                borderWidth: 1,
                borderRadius: 20, // Add border radius for rounded corners
                borderSkipped: false, // Ensure all corners are rounded
            }
        ]
    },
    options: {
        indexAxis: 'x', // Make the chart horizontal
        responsive: true, // Ensure responsiveness
        maintainAspectRatio: false, // Allow aspect ratio adjustment
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                ticks: {
                    maxRotation: 0, // Ensure labels are not rotated
                    minRotation: 0, // Ensure labels are not rotated
                },
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, values) {
                        return value.toLocaleString() + 'K'; // Format as "XK"
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + 'K';
                    },
                },
            },
        },
    },
    plugins: [
        {
            id: 'customXAxisButtons',
            afterDraw: (chart) => {
                const { ctx, scales } = chart;
                const xAxis = scales.x;

                // Get the labels and their positions
                const labels = chart.data.labels;
                labels.forEach((label, index) => {
                    const xPosition = xAxis.getPixelForTick(index); // Get the x-coordinate of the label
                    const yPosition = chart.height +30; // Position the button near the bottom of the chart

                    // Draw a rectangle around the label (button-like structure)
                    ctx.save();
                    ctx.fillStyle = 'rgba(238, 45, 122, 0.2)'; // Background color for the button
                    ctx.strokeStyle = 'rgba(238, 45, 122, 1)'; // Border color for the button
                    ctx.lineWidth = 2;
                    ctx.roundRect(xPosition - 30, yPosition - 20, 60, 20, 5); // Rounded rectangle
                    ctx.fill();
                    ctx.stroke();

                    // Draw the label text inside the button
                    ctx.font = '12px Arial';
                    ctx.fillStyle = '#000'; // Text color
                    ctx.textAlign = 'center';
                    ctx.fillText(label, xPosition, yPosition - 5); // Center the text inside the button
                    ctx.restore();
                });
            },
        },
    ],
});