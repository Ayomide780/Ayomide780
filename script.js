$(document).ready(function(){
  // Interactions
  $(".draggable-box").draggable();
  $(".droppable-box").droppable({
    drop: function(event, ui) {
      $(this).addClass("ui-state-highlight").html("Dropped!");
    }
  });
  $(".resizable-box").resizable();
  
  // Initialize Selectable
  $(".selectable-list").selectable({
    selected: function(event, ui) {
      $(ui.selected).addClass("ui-selected").siblings().removeClass("ui-selected");
      // Add your reaction here, for example:
      alert("Selected item: " + $(ui.selected).text());
    }
  });

  // Widgets
  $("#accordion").accordion();
  $("#autocomplete").autocomplete({
    source: ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon"]
  });
  $("#datepicker").datepicker();
  $("#slider").slider();

  // Effects
  $("#showHide").click(function(){
    $("#elementToShowHide").toggle(); // Toggle visibility without any effect
  });
  $("#explode").click(function(){
    $("#elementToExplode").effect("explode");
  });
  $("#fadeInOut").click(function(){
    $("#elementToFadeInOut").fadeToggle(1000);
  });
  $("#colorAnimate").click(function(){
    $("#elementToAnimate").animate({
      backgroundColor: "#ff6347",
      color: "#fff"
    }, 1000);
  });
});
