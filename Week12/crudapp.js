class Comment {
    constructor(name, comment) {
        this.name = name;
        this.comment = comment;
    }
}

class CommentService {
    static url = "https://6351ab5cdfe45bbd55c6d2f9.mockapi.io/users";

    static getAllComments() {
        return $.get(this.url);
    }

    static getComment(id) {
        return $.get(this.url + `/${id}`);
    }

    static createComment(comment) {
        return $.post(this.url, comment);
    }

    static updateComment(comment) {
        return $.ajax({
            url: this.url + `/${comment.id}`,
            dataType: 'json',
            data: JSON.stringify(comment),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteComment(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager {
    static comments;

    static getAllComments() {
        CommentService.getAllComments().then(comments => this.render(comments));
    }

    static createComment(name, comment) {
        CommentService.createComment(new Comment(name, comment))
        .then(() => {
            return CommentService.getAllComments();
        })
        .then((comments) => {
            this.render(comments)
        });
    }
    static updateComment(id) {
        for (let key in id) {
                let thisId = `${id[key]}`;
                console.log(thisId.text);
            }
            //check to see the id that's passing matches the edit button - DONE
            //find a field where the user can edit them - DONE
            //I think now I have to make the onclick for save-changes button or somethhing...
        CommentService.updateComment(id)
        .then(() => {
            return CommentService.getAllComments();
        })
      .then((comments) => this.render(comments));
    
    }

    static deleteComment(id) {
        CommentService.deleteComment(id)
        .then(() => {
            return CommentService.getAllComments();
        })
        .then((comments) => this.render(comments));
        $(`#${id}`).remove();
    }

    static render(comments) {
        this.comments = comments;
        $('#app').empty();
        for (let comment of comments) {
            $('#app').prepend(
                `<div id="${comment.id} class="card">
                    <figure class="test-center'>
                        <blockquote class="blockquote">
                            <p>${comment.comment}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            ${comment.name}
                        </figurecaption>
                    </figure>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="DOMManager.updateComment('${comment.id}')">Edit</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="inputName">
                                        <label for="floatingText" class="col-form-label">Updated Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="inputText">
                                        <label for="floatingText" class="col-form-label">Updated Comment</label>
                                    </div>
                                </form> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="edit-comment" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger" onclick="DOMManager.deleteComment('${comment.id}')">Delete</button>
                </div>` 
            );
        }
    }
}

$(`#create-comment`).on('click', () => {
    DOMManager.createComment($('#inputName').val(), $('#inputText').val());
    $('#inputName').val('');
    $('#inputText').val('');
})
$(`#edit-comment`).on('click', () => {
    DOMManager.updateComment($('#inputName').val(), $('#inputText').val());
    $('#inputName').val('');
    $('#inputText').val('');
})

DOMManager.getAllComments();