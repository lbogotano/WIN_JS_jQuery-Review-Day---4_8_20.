$('div').hover( 
    
    function(){

        let self = $(this)

        self.html('over')

    }, 
    function(){
        let self = $(this)

        self.html('out')
    })