$('#savepost').click(function (){

    // console.log('event is triggered!')

    let postId =$('#post-id').val();
    let postTitle =$('#post-title').val();
    let postContent =$('#post-content').val();
    console.log(postId,postTitle,postContent);
    $.ajax({
        url:"http://localhost:8080/blog/savepost",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "id":postId,
            "title":postTitle,
            "content":postContent
        }),
        success:function (result){
           console.log(result)
           alert("done")
        },
        error:function (error){
            console.log(error)
            alert("try again")

        }
    })


})




