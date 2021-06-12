class Form{

    constructor(){

    }

    display(){

        var input = createInput("Name");
        input.position(480,225);

        var button = createButton('Play');
        button.position(480,254);

        button.mousePressed(function(){

            input.hide();
            button.hide();
            
            var name = input.value();

            var greeting = createElement('h3');
            greeting.html("Hello " + input + ", dog is waiting for you.");

            greeting.position(170,250);

        })

    }

}