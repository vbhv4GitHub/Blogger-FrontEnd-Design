//#----------------------------------------- <<< Toggle Hamburger Menu --> JQuery >>> ----------------------------------------------//

$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle_collapse');
    
    // Click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
        
    })
});

//#----------------------------------------- >>> Toggle Hamburger Menu --> JQuery <<< ----------------------------------------------//