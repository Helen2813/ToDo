//view
;(function () {
    'use strict'
    const selectedLiTemplate = '<li style="text-decoration: line-through"><lable><input type="checkbox">%CONTENT%</lable></li>'
    const liTemplate = '<li><lable><input type="checkbox">%CONTENT%</lable></li>'
    const mainTemplate = `<input type="text"><button>Добавить</button>
    <ul></ul>
    <button>Выполнить выбранные</button>`

    const View = window.View = {}

    View.getView = function getView () {
        const api = {}

        const rootElement = document.createElement('div')
        rootElement.innerHTML = mainTemplate

        api.getRoot = function getRoot () {//берет шаблон и из него создает готовый элемент dom
            return rootElement
        }

        return api
    }
})();