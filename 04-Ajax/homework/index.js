const URL = 'http://localhost:5000/amigos/';

function showFriends(){
    $('#lista').empty();
    $.get(URL, function(friends){
        friends.forEach(friend => {
            $('#lista').append(`<li> ${friend.name} </li>`);
        });
    });
}

function searchFriends(){
    let idFriend = $('#input').val();
    $.get(`${URL} ${idFriend}`, function(data){
        if(data.name !== undefined){
            $('#amigo').text(`El amigo seleccionado es ${data.name}`);
            $('#input').val('');
        } 
        else{
            alert('Debe ingresar algún ID');
        };
    });   
}

function deleteFriend(){
    let inputDelete = $('#inputDelete').val();
    if(inputDelete){
        $.ajax({
            url: `${URL} ${inputDelete}`,
            type: 'DELETE',
            success: function() {
                $('#success').text('Tu amigo fue eliminado con éxito');
                $('#input').val('');
                showFriends()
            }
        });
    }
    else{
        alert('Debe ingresar algún ID');
    };
}


$('#boton').click(showFriends);
$('#search').click(searchFriends);
$('#delete').click(deleteFriend);