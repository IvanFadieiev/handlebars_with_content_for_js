$.ajax({
  url: '/user_list',
  success: function(data){
    console.log(data.user)
    $.each(data.user, function(index, user){
      var template = function(user) {
        console.log(user);
        return HandlebarsTemplates['users/deech']
        (
          {
            user: user,
            index: index,
            name: user.name,
            job: user.job,
            created_at: user.created_at
          }
        );
      };
      $('#qweqwe').append(template(user))
    })
  }
})