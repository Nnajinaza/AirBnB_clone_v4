
/**
 * 1-hbnb.js : Manipulates the DOM of 1-hbnb.html
 */

$(function () {
  const amenities = [];

  $('.amenity-check').on('click', function () {
    const amenity = {
      id: $(this).attr('data-id'),
      name: $(this).attr('data-name')
    };

    if ($(this).is(':checked')) {
      amenities.push(amenity);
    } else {
      const amenityIds = amenities.map(a => a.id);
      const index = amenityIds.indexOf(amenity.id);
      if (index > -1) {
        amenities.splice(index, 1);
      }
    }

    // Update the h4 with the list of amenities in the array
    const amenityNames = amenities.map(a => a.name);
    const selectAmenities = amenityNames.join(', ');
    if (selectAmenities.length > 20) {
      $('h4.select-amenities').text(selectAmenities.substring(0, 19) + '...');
    } else {
      $('h4.select-amenities').text(selectAmenities);
    }
    
  });
});
