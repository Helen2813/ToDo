//view
;(function () {
    'use strict'

    const doneLiTemplate = '<li style="text-decoration: line-through"><label><input type="checkbox"/> %CONTENT%</label></li>'
    const liTemplate = '<li><label><input type="checkbox"/> %CONTENT%</label></li>'
    const mainTemplate = '<input type="text"><button id="addTask">Добавить</button><ul></ul><button id="doneSelected">Выполнить выбранные</button>'

    const View = window.View = {}

    View.getView = function getView () {
        const api = {
            buttonClickHandler () {}
        }

        const rootElement = document.createElement('div')
        rootElement.innerHTML = mainTemplate

        rootElement
            .querySelector('button#addTask')
            .addEventListener('click', () => api.buttonClickHandler('addTask'))

        rootElement
            .querySelector('button#doneSelected')
            .addEventListener('click', () => api.buttonClickHandler('doneSelected'))

        api.getRoot = function getRoot () {
            return rootElement
        }

        api.update = function update (tasks) {
            const ulElement = rootElement.querySelector('ul')
            ulElement.innerHTML = ''

            for (const task of tasks) {
                // Манипуляция и работа с DOM-элементами
                let template = task.done ? doneLiTemplate : liTemplate

                const div = document.createElement('div')
                div.innerHTML = template

                const liElement = div.firstChild
                liElement.innerHTML = liElement.innerHTML.replace('%CONTENT%', task.content)

                ulElement.append(liElement)
            }
        }

        api.getContent = function getContent () {
            return rootElement.querySelector('input').value
        }

        api.setContent = function setContent (value) {
            rootElement.querySelector('input').value = value
        }

        return api
    }
})();