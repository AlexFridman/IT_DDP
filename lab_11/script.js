document.getElementById('add_skill').addEventListener("click", function () {
    var br = document.createElement('br')
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'skill';
    form = document.getElementById('form');
    form.appendChild(br);
    form.appendChild(input);
});
