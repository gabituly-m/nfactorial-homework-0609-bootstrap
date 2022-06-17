const home = $('.home')
const libs = $('.libs')
const thumb = $('.thumb')

libs.addClass('hide')
thumb.addClass('hide')

const goHome = $('.goHome')
const goLibs = $('.goLibs')
const goThumb = $('.goThumb')

// Math Libs
const name = $('#name')
const character = $('#character')
const adverb = $('#adverb')
const adjective = $('#adjective')

const spanName = $('.name')
const spanCharacter = $('.character')
const spanAdverb = $('.adverb')
const spanAdjective = $('.adjective')

// Tom Thumb
const width = $('#width')
const height = $('#height')
const colors = $('#colors')

const size = $('.size')
const isOk = $('.isOk')

// Forms
const libsForm = $('.libs form')
const thumbForm = $('.thumb form')

const story = $('.story')
story.addClass('hide')

goHome.on('click', e => {
    e.preventDefault()

    goHome.addClass('active')
    goLibs.removeClass('active')
    goThumb.removeClass('active')

    home.removeClass('hide')
    libs.addClass('hide')
    thumb.addClass('hide')
})

goLibs.on('click', e => {
    e.preventDefault()

    goHome.removeClass('active')
    goLibs.addClass('active')
    goThumb.removeClass('active')

    home.addClass('hide')
    libs.removeClass('hide')
    thumb.addClass('hide')
})

libsForm.on('submit', e => {
    e.preventDefault()

    story.removeClass('hide')

    spanName.text(name.val())
    spanCharacter.text(character.val())
    spanAdverb.text(adverb.val())
    spanAdjective.text(adjective.val())
})

const calculation = $('.calculation')
calculation.addClass('hide')

goThumb.on('click', e => {
    e.preventDefault()

    goHome.removeClass('active')
    goLibs.removeClass('active')
    goThumb.addClass('active')

    home.addClass('hide')
    libs.addClass('hide')
    thumb.removeClass('hide')
})

thumbForm.on('submit', e => {
    e.preventDefault()

    calculation.removeClass('hide')

    let imgSize = (width.val() * height.val() * colors.val() / 1024).toFixed(2)
    let tempIsOk = imgSize < 1024

    size.text(imgSize)
    isOk.text(tempIsOk ? 'ok' : 'not ok')
})