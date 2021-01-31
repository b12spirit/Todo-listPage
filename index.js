$(function () {
    $("#add-button").click(function () {
        //1. clone the template to a variable, item
        //ex. let item = $("...").clone();
        let item = $(".template").clone()
        item.removeClass("template")
        //3. replace the example text with what is in the textbox
        //   clear the textbox when you are done
        item.find(".todo-text").text($(".form-control").val());
        $(".form-control").val('');
        //4. add cloned item to the DOM
        $("#todo-list").append(item);
        //5. when the checkbox is clicked
        //   if it is now checked:
        //      - remove the css class 'incomplete'
        //      - add the css class 'complete'
        //   if it is now unchecked:
        //      - remove the css class 'complete'
        //      - add the css class 'incomplete' 
        item.find(".checkbox").click(function(){
            if ($(this).is(":checked")) 
            {
                $(item).addClass("complete");
                $(item).removeClass("incomplete");

            }
            else
            {
                $(item).addClass("incomplete");
                $(item).removeClass("complete");
            }
        });
        //6. within the cloned item, find the delete button
        //   remove the cloned item from the DOM when button is clicked
        item.find(".delete-button").click(function(){
            $(item).remove();
        });
        
        
    });

});
