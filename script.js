function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    var celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
}

function clearFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}
