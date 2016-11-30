console.log('js sourced');

var garage = [];

$(document).ready(function() {
    $('#addCarButton').on('click', function() {
        var newCar = {
            year: $('#year').val(),
            make: $('#make').val(),
            model: $('#model').val(),
            description: $('#description').val(),
            picURL: $('#picURL').val()
        }; //end of newCar obejct
        console.log('adding:', newCar);
        //add newCar to garage array
        garage.push(newCar);
        displayCars();
        //clear input after button click
        $('#year').val('');
        $('#make').val('');
        $('#model').val('');
        $('#description').val('');
        $('#picURL').val('');
        //end clear input
    }); //end of addCarButton function

    var displayCars = function() {
        var displayText = '';
        for (var i = 0; i < garage.length; i++) {
            displayText += '<p>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + '</p>';
            displayText += '<p>' + garage[i].description + '</p>';
            displayText += '<img src="' + garage[i].picURL + '" />';
        } //end of for loop
        $('#outputText').html(displayText);
    }; //end of displayCars function

    var getInfo = function() {
        console.log('inside getInfo');
        $.ajax({
            url: 'http://devjana.net/support/cars.json',
            dataType: 'JSON',
            success: function(data) {
                console.log('success!', data);
                console.log('data.cars');
                for (var i = 0; i < data.cars.length; i++) {
                    // push each car into the garage
                    garage.push(data.cars[i]);
                } // end for
                displayCars();

            }

        });

    }; //end of receiving info


    getInfo();



}); //end of doc ready of doc ready
