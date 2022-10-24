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

    static deleteComment(id) {
        CommentService.deleteComment(id)
        .then(() => {
            return CommentService.getAllComments();
        })
        .then((comments) => this.render(comments));
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
                    <button class="btn btn-danger" onclick="DOMManager.deleteComment('${comment.id}')">Delete</button>
                </div>` 
            );
        }
    }
}

$(`#create-comment`).on('click', () => {
    DOMManager.createComment($('#inputName').val());
    DOMManager.createComment($('#inputText').val());
    $('#inputName').val('');
    $('#inputText').val('');
})

DOMManager.getAllComments();