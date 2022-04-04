$("#formvalidation").validate({
  rules:{
      name:{
          minlength:2
      }
  },
  messages: {
    required: "please enter your name",
    minlength: "name atleast two characters"
  },
  
  
    submitHandler: function(form) {
     form.submit();
  }
 });